import { NextResponse } from 'next/server';
import { db } from '@/db';
import { jobDocuments, jobPostings } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../auth/[...nextauth]/route";
import { v4 as uuidv4 } from 'uuid';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id: jobId } = await context.params;

        // Ensure the job exists
        const job = await db.query.jobPostings.findFirst({
            where: eq(jobPostings.id, jobId)
        });

        if (!job) {
            return NextResponse.json({ error: 'Job not found' }, { status: 404 });
        }

        const formData = await request.formData();
        const file = formData.get('file') as File | null;
        const documentType = formData.get('documentType') as string;
        const title = formData.get('title') as string;

        if (!file || !documentType || !title) {
            return NextResponse.json({ error: 'Missing file, title, or documentType' }, { status: 400 });
        }

        if (file.type !== 'application/pdf') {
            return NextResponse.json({ error: 'Only PDF files are allowed' }, { status: 400 });
        }

        // Initialize Supabase Client
        const supabaseUrl = process.env.SUPABASE_URL!;
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

        if (!supabaseUrl || !supabaseKey) {
            console.error("Missing SUPABASE credentials in environment");
            return NextResponse.json({ error: 'Server misconfiguration: Storage not available' }, { status: 500 });
        }
        const supabase = createClient(supabaseUrl, supabaseKey);

        const uniqueFilename = `${jobId}/${uuidv4()}.pdf`;

        // Read file to buffer/arraybuffer for Supabase
        const bytes = await file.arrayBuffer();
        const fileBuffer = Buffer.from(bytes);

        // Upload to Supabase 'convocatorias' bucket
        const { data: uploadData, error: uploadError } = await supabase
            .storage
            .from('convocatorias')
            .upload(uniqueFilename, fileBuffer, {
                contentType: 'application/pdf',
                upsert: false // Don't overwrite existing
            });

        if (uploadError) {
            console.error("Supabase Upload Error:", uploadError);
            return NextResponse.json({ error: 'Failed to upload to cloud storage' }, { status: 500 });
        }

        // Get the permanent Public URL for the database
        const { data: publicUrlData } = supabase
            .storage
            .from('convocatorias')
            .getPublicUrl(uniqueFilename);

        const publicUrl = publicUrlData.publicUrl;

        // Save reference in the database
        const newRecord = await db.insert(jobDocuments).values({
            jobPostingId: jobId,
            title,
            documentType,
            documentUrl: publicUrl
        }).returning();

        return NextResponse.json(newRecord[0], { status: 201 });

    } catch (error: any) {
        console.error('Error uploading document:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { searchParams } = new URL(request.url);
        const docId = searchParams.get('docId');

        if (!docId) {
            return NextResponse.json({ error: 'Missing document ID' }, { status: 400 });
        }

        // Get document to find its URL
        const doc = await db.query.jobDocuments.findFirst({
            where: eq(jobDocuments.id, docId)
        });

        if (!doc) {
            return NextResponse.json({ error: 'Document not found' }, { status: 404 });
        }

        // Initialize Supabase Client for Deletion
        const supabaseUrl = process.env.SUPABASE_URL!;
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
        if (supabaseUrl && supabaseKey) {
            const supabase = createClient(supabaseUrl, supabaseKey);
            try {
                // Extract filename from the URL (Assuming structure: /storage/v1/object/public/convocatorias/[jobId]/[filename.pdf])
                // A simpler way: The unique ID we made was jobId/uuid.pdf. We can extract from URL or assume the end path
                const urlParts = doc.documentUrl.split('/');
                const fileName = urlParts.pop(); // uuid.pdf
                const jobIdStr = urlParts.pop(); // jobId

                if (fileName && jobIdStr) {
                    const pathToRemove = `${jobIdStr}/${fileName}`;
                    await supabase.storage.from('convocatorias').remove([pathToRemove]);
                }
            } catch (cloudError) {
                console.warn('Could not delete from Supabase storage:', cloudError);
            }
        }

        // Delete from database
        await db.delete(jobDocuments).where(eq(jobDocuments.id, docId));

        return NextResponse.json({ message: 'Document deleted successfully' }, { status: 200 });

    } catch (error: any) {
        console.error('Error deleting document:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
