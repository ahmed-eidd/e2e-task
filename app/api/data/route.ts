import { promises as fs } from 'fs';

export const dynamic = 'force-static';

export async function GET() {
  const path = process.cwd() + '/data.json';
  const file = await fs.readFile(path, 'utf8');
  const data = JSON.parse(file);

  console.log(data, 'from route');
  return Response.json({ data });
}
