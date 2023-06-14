import { db } from '@vercel/postgres';

export async function GET() {
    const client = await db.connect();

    const membersData = await client.sql`SELECT memberID, pic, name, tag FROM Member`;
    client.release();

    return new Response(JSON.stringify(membersData.rows));
}