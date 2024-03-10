
import fs from 'fs';
import path from 'path';

function getImages(productImageDir: string) { 
    const imagePath = `productImages/${productImageDir}`
    const dir = path.resolve('./public', imagePath);
    return fs.readdirSync(dir)
}

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {

  console.log(params)
  return Response.json({"nothing here": "hi"})
}
