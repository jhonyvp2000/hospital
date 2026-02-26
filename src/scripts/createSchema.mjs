import postgres from 'postgres';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL;
const sql = postgres(connectionString);

async function run() {
    try {
        console.log("Creating public schema...");
        await sql`CREATE SCHEMA IF NOT EXISTS public`;
        console.log("Schema created");
    } catch (err) {
        console.error("Failed:", err);
    } finally {
        await sql.end();
    }
}

run();
