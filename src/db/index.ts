import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

const sqlite = new Database(process.env.DATABASE_URL || 'sqlite.db');
export const db = drizzle({ client: sqlite });
