import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const paintingsDirectory = path.join(process.cwd(), 'public/paintings');
  const filenames = fs.readdirSync(paintingsDirectory);
  const images = filenames.map((name) => ({
    title: name,
    src: `/paintings/${name}`,
  }));

  return NextResponse.json(images);
}
