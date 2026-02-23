import { NextResponse } from 'next/server';
import { db } from '@/db';
import { jobPostings, jobDocuments } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../auth/[...nextauth]/route";
import { createClient } from '@supabase/supabase-js';

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id: jobId } = await context.params;

        const job = await db.query.jobPostings.findFirst({
            where: eq(jobPostings.id, jobId)
        });

        if (!job) {
            return NextResponse.json({ error: 'Job not found' }, { status: 404 });
        }

        const documents = await db.select().from(jobDocuments)
            .where(eq(jobDocuments.jobPostingId, jobId))
            .orderBy(desc(jobDocuments.uploadedAt));

        return NextResponse.json({ ...job, documents });

    } catch (error: any) {
        console.error('Error fetching job details:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const { id: jobId } = await context.params;
        const body = await request.json();

        // Allow updating metadata and status
        const updateData: any = { updatedAt: new Date() };
        if (body.title) updateData.title = body.title;
        if (body.code) updateData.code = body.code;
        if (body.regime) updateData.regime = body.regime;
        if (body.department !== undefined) updateData.department = body.department;
        if (body.vacancies) updateData.vacancies = body.vacancies;
        if (body.description) updateData.description = body.description;
        if (body.salary !== undefined) updateData.salary = body.salary;
        if (body.status) updateData.status = body.status;
        if (body.currentStage) updateData.currentStage = body.currentStage;
        if (body.endDate !== undefined) updateData.endDate = body.endDate ? new Date(body.endDate) : null;

        if (Object.keys(updateData).length > 1) { // has more than just updatedAt
            const updatedJob = await db.update(jobPostings)
                .set(updateData)
                .where(eq(jobPostings.id, jobId))
                .returning();

            return NextResponse.json(updatedJob[0]);
        }

        return NextResponse.json({ error: 'No valid update fields' }, { status: 400 });

    } catch (error: any) {
        console.error('Error updating job:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id: jobId } = await context.params;

        // 1. Fetch all documents associated with this job posting to delete from Cloud
        const docs = await db.select().from(jobDocuments).where(eq(jobDocuments.jobPostingId, jobId));

        // 2. Erase from Supabase Cloud Storage
        if (docs.length > 0) {
            const supabaseUrl = process.env.SUPABASE_URL!;
            const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

            if (supabaseUrl && supabaseKey) {
                const supabase = createClient(supabaseUrl, supabaseKey);

                // Build array of file paths: "jobId/filename.pdf"
                const pathsToRemove = docs.map(doc => {
                    const urlParts = doc.documentUrl.split('/');
                    const fileName = urlParts.pop();
                    const folderName = urlParts.pop();
                    return `${folderName}/${fileName}`;
                }).filter(Boolean); // Clean any possible undefined

                try {
                    console.log("Removing from Supabase: ", pathsToRemove);
                    const { data, error } = await supabase.storage.from('convocatorias').remove(pathsToRemove);
                    if (error) {
                        console.error("Supabase bulk delete partial error: ", error);
                    }
                } catch (cloudErr) {
                    console.error("Failed to connect to Supabase to remove documents:", cloudErr);
                }
            }
        }

        // 3. Clear Job Documents from Database
        await db.delete(jobDocuments).where(eq(jobDocuments.jobPostingId, jobId));

        // 4. Finally, clear Job Posting Header from Database
        const deletedJob = await db.delete(jobPostings)
            .where(eq(jobPostings.id, jobId))
            .returning();

        if (deletedJob.length === 0) {
            return NextResponse.json({ error: 'Job not found to delete' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Job posting completely deleted' }, { status: 200 });

    } catch (error: any) {
        console.error('Error deleting entire job:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
