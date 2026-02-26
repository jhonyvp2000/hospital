import postgres from 'postgres';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL;
const sql = postgres(connectionString);

async function run() {
    try {
        console.log("Setting default search_path for user jvp_user...");
        await sql`ALTER ROLE jvp_user SET search_path TO public, "$user"`;
        console.log("Search path configured successfully.");
    } catch (err) {
        console.error("Failed:", err);
    } finally {
        await sql.end();
    }
}

run();
