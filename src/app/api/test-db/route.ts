import { NextResponse } from 'next/server';
import { db } from '@/db';
import { users } from '@/db/schema';

export async function GET() {
    try {
        // Simple query to verify connection
        const allUsers = await db.select().from(users);

        return NextResponse.json({
            status: 'success',
            message: 'Database connection successful!',
            data: allUsers,
            provider: 'Hetzner Postgres + Drizzle'
        });

    } catch (error) {
        console.error("Database connection error:", error);
        return NextResponse.json({
            status: 'error',
            message: 'Failed to query database',
            error: String(error)
        }, { status: 500 });
    }
}
