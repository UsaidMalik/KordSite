import getImages from "@/app/getImages"

export async function GET(
    request: Request,
    { params }: { params: { productName: string } }
) {

  const imagePaths = getImages(params.productName) 
  return Response.json({ imagePaths })
}
