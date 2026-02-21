import postgres from 'postgres';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

async function run() {
    console.log("Connecting to:", process.env.DATABASE_URL?.split('@')[1]); // Log domain safe info

    if (!process.env.DATABASE_URL) {
        throw new Error("Missing DATABASE_URL");
    }

    const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' });

    try {
        console.log("Altering job_postings to add current_stage...");
        await sql`
            ALTER TABLE job_postings 
            ADD COLUMN IF NOT EXISTS current_stage text DEFAULT 'PREPARATORIA' NOT NULL;
        `;
        console.log("Schema alter successful!");
    } catch (error) {
        console.error("Migration failed", error);
    } finally {
        await sql.end();
        console.log("Connection closed.");
    }
}

run();
