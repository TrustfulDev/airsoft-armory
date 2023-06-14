import { db } from '@vercel/postgres';
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const client = await db.connect();
    const { searchParams } = new URL(req.url);
    const currMember = searchParams.get('member');

    const memberDatat = await client.sql`SELECT * FROM Member WHERE memberID=${currMember}`;
    client.release();

    return new Response(JSON.stringify(memberDatat.rows));
}