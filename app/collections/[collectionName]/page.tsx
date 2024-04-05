import {promises as fs} from "fs"
import ProductDisplay from "../../_components/_productCards/_displayProducts";


export default async function Page({ params }: { params: { collectionName: string } }) {
        //  const [productData, setData] = useState(null);
    const collectionName = params.collectionName
    const bytes = await fs.readFile(process.cwd() + "/app/_lib/collections.JSON")
    const collection = JSON.parse(bytes + '')[collectionName]
          
  return (
    <div className="px-32 py-10">
    <div className="mb-10 p-0">
      <p className="font-bold text-3xl mb-4">{collection.name}</p>
      <p className="w-3/4 text-grey text-justify">{collection.description}</p>
    </div>

    <div className="flex justify-center">
        <hr className="border-gray-400 my-8 rounded-full"/> {/* This is the small grey line break */}
    </div>

    <div className="">
        <ProductDisplay rows={1} columns={4} products={collection.products}/>
    </div>
</div>
  );
}
