import { db } from '@vercel/postgres';

export async function GET() {
    const client = await db.connect();

    const lessons = await client.sql`SELECT * FROM Lesson;`;
    client.release();
    return new Response(JSON.stringify(lessons.rows));
}