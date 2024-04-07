import {promises as fs} from "fs"
import ProductDisplay from "../../_components/_productCards/_displayProducts";
import { collections } from "@/app/_lib/collections";

export default async function Page({ params }: { params: { collectionName: string } }) {
        //  const [productData, setData] = useState(null);
    const collectionName = params.collectionName
    const collection = collections[collectionName]
          
  return (
    <div className="px-12 mx- md:px-32 py-10">
    <div className="mb-10 p-0">
      <p className="font-bold text-3xl mb-4">{collection.name}</p>
      <p className="w-4/5 md:w-3/4 md:text-grey text-justify text-xl md:text-base">{collection.description}</p>
    </div>

    <div className="flex justify-center">
        <hr className="border-gray-400 my-8 rounded-full"/> {/* This is the small grey line break */}
    </div>

    <div className="w-auto">
        <ProductDisplay rows={1} columns={4} products={collection.products}/>
    </div>
</div>
  );
}
