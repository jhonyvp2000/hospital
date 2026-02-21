import { NextResponse } from 'next/server';
import postgres from 'postgres';

export async function GET() {
    try {
        const dbUrl = process.env.DATABASE_URL || "postgresql://jvp_user:V3l4p4r3d3s@178.156.220.22:6432/control";
        const sql = postgres(dbUrl, { ssl: 'require' });

        await sql`
            ALTER TABLE job_postings 
            ADD COLUMN IF NOT EXISTS current_stage text DEFAULT 'PREPARATORIA' NOT NULL;
        `;

        await sql.end();
        return NextResponse.json({ success: true, message: "Added current_stage successfully" });
    } catch (error: any) {
        console.error("Migration error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
