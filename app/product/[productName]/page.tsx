import ProductImageSlider from './_components/_imageSlider';
import AddToCart from '../../_components/_buttons/_addToCart';
import {promises as fs} from 'fs';

export default async function Page({ params }: { params: { productName: string } }) {
//  const [productData, setData] = useState(null);
  const productName = params.productName
  const bytes = await fs.readFile(process.cwd() + "/app/_lib/products.json")
  const productData = JSON.parse(bytes + '')[productName]

  return (
    <div className='py-10'>

      <div className='grid grid-cols-2 gap-4'> {/* this is the top images container which will be the two columns */}

      <div className='flex justify-center mx-16 w-3/4 items-center'>{/*this here is the left side product slider stuff */}
        <ProductImageSlider productImagePaths={productData.imagePaths}/>
      </div>

    <div className='flex-col justify-center items-center'>{/*this here is the right side product info */}
      <h6 className='text-bold text-4xl'>
        {productData.productFullName}
      </h6> 
      <h6 className="mb-4">
        ${productData.price}
      </h6> 
      <AddToCart price={productData.stripeID} quantity={1} productName={productName}/>
      <p className='text-justify w-1/2 my-4'>
        {productData.description}
      </p> 
    </div>   
    
   </div>
  </div>
  )
}