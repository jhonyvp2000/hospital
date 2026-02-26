import postgres from 'postgres';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL;
const sql = postgres(connectionString);

async function createAdmin() {
    try {
        console.log("Setting search path...");
        await sql`SET search_path TO public`;

        const dni = "12345678";
        const passwordPlain = "admin123";
        const name = "Jhony Administrador";
        const role = "admin";

        console.log(`Hashing password for ${name}...`);
        const passwordHash = await bcrypt.hash(passwordPlain, 10);

        console.log("Inserting admin user into database...");
        const result = await sql`
            INSERT INTO employees (dni, password_hash, name, role, is_active)
            VALUES (${dni}, ${passwordHash}, ${name}, ${role}, true)
            RETURNING id, dni, name, role;
        `;

        console.log("Administrator created successfully!");
        console.log(result[0]);

    } catch (err) {
        if (err.code === '23505') {
            console.log("User already exists!");
        } else {
            console.error("Failed to create admin:", err);
        }
    } finally {
        await sql.end();
    }
}

createAdmin();
