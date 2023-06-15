import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const client = await db.connect();
 
  try {
    await client.sql``;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const members = await client.sql`SELECT * FROM Lesson;`;
  return response.status(200).json(members.rows);
}