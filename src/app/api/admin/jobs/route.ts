import { NextResponse } from 'next/server';
import { db } from '@/db';
import { jobPostings, employees } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../api/auth/[...nextauth]/route";
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const url = new URL(request.url);
        const searchParams = url.searchParams;

        // Fetch jobs ordered by newest
        const jobs = await db.select({
            id: jobPostings.id,
            title: jobPostings.title,
            code: jobPostings.code,
            regime: jobPostings.regime,
            department: jobPostings.department,
            vacancies: jobPostings.vacancies,
            status: jobPostings.status,
            publicationDate: jobPostings.publicationDate,
            endDate: jobPostings.endDate,
            createdBy: jobPostings.createdBy,
        }).from(jobPostings).orderBy(desc(jobPostings.createdAt));

        return NextResponse.json(jobs);
    } catch (error: any) {
        console.error('Error fetching jobs:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session || !session.user || !(session.user as any).dni) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Get employee ID based on DNI in session
        const employee = await db.query.employees.findFirst({
            where: eq(employees.dni, (session.user as any).dni)
        });

        if (!employee) {
            return NextResponse.json({ error: 'User mapping not found' }, { status: 403 });
        }

        const body = await request.json();
        const { title, code, regime, department, vacancies, description, salary, status } = body;

        // Basic validation
        if (!title || !code || !regime || !vacancies || !description) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newJob = await db.insert(jobPostings).values({
            title,
            code,
            regime,
            department,
            vacancies,
            description,
            salary,
            status: status || 'DRAFT',
            createdBy: employee.id
        }).returning();

        return NextResponse.json(newJob[0], { status: 201 });

    } catch (error: any) {
        console.error('Error creating job:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
