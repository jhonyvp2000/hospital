import { NextResponse } from 'next/server';
import { db } from '@/db';
import { jobPostings, jobDocuments } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../auth/[...nextauth]/route";

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
        if (body.department) updateData.department = body.department;
        if (body.vacancies) updateData.vacancies = body.vacancies;
        if (body.description) updateData.description = body.description;
        if (body.salary) updateData.salary = body.salary;
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
