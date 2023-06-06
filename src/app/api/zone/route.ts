import { db } from '@vercel/postgres';
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const client = await db.connect();
    const { searchParams } = new URL(req.url);
    const currZone = searchParams.get('zone');

    const zoneData = await client.sql`SELECT * FROM Zone WHERE zoneID=${currZone}`;
    client.release();

    return new Response(JSON.stringify(zoneData.rows));
}