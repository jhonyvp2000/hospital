import { pgTable, text, timestamp, uuid, boolean } from 'drizzle-orm/pg-core';

export const employees = pgTable('employees', {
    id: uuid('id').defaultRandom().primaryKey(),
    dni: text('dni').unique().notNull(), // Used as login username
    passwordHash: text('password_hash').notNull(),
    name: text('name').notNull(),
    role: text('role').default('user').notNull(), // 'user', 'admin', 'doctor', etc.
    isActive: boolean('is_active').default(true).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});
