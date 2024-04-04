import {promises as fs} from "fs"
import ProductDisplay from "../../_components/_productCards/_displayProducts";


export default async function Page({ params }: { params: { collectionName: string } }) {
        //  const [productData, setData] = useState(null);
    const collectionName = params.collectionName
    const bytes = await fs.readFile(process.cwd() + "/app/_lib/collections.JSON")
    const collection = JSON.parse(bytes + '')[collectionName]
          
  return (
    <div>
   
    <ProductDisplay rows={1} columns={4} products={collection}/>
    </div>
  );
}
