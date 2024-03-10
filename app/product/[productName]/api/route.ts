import { promises as fs } from 'fs';

export async function GET(
    request: Request,
    { params }: { params: { productName: string } }
) {

  const bytes = await fs.readFile(process.cwd() +  "/app/_lib/products.JSON", "utf8");
  const data = JSON.parse(bytes);
  const productData = data[params.productName.replace("-", " ")]

  return Response.json({ productData })
}
