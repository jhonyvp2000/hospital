import { NextResponse } from 'next/server';
import { db } from '@/db';
import { jobDocuments, jobPostings } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../auth/[...nextauth]/route";
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

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

        // Validate file type (PDF only for now as requested)
        if (file.type !== 'application/pdf') {
            return NextResponse.json({ error: 'Only PDF files are allowed' }, { status: 400 });
        }

        // Prepare the upload directory
        const uploadDir = join(process.cwd(), 'public', 'uploads', 'convocatorias', jobId);
        await mkdir(uploadDir, { recursive: true });

        // Generate a unique filename while preserving extension
        const uniqueFilename = `${uuidv4()}.pdf`;
        const filePath = join(uploadDir, uniqueFilename);
        const publicUrl = `/uploads/convocatorias/${jobId}/${uniqueFilename}`; // URL accessible from browser

        // Write the file to disk
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        await writeFile(filePath, buffer);

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

        // Try to delete the physical file
        try {
            const { unlink } = await import('fs/promises');
            const filePath = join(process.cwd(), 'public', doc.documentUrl);
            await unlink(filePath);
        } catch (fsError) {
            console.warn('Physical file could not be deleted or was already missing:', fsError);
            // We continue to delete the DB record even if physical file is missing
        }

        // Delete from database
        await db.delete(jobDocuments).where(eq(jobDocuments.id, docId));

        return NextResponse.json({ message: 'Document deleted successfully' }, { status: 200 });

    } catch (error: any) {
        console.error('Error deleting document:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
