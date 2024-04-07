import ProductImageSlider from './_components/_imageSlider';
import AddToCart from '../../_components/_buttons/_addToCart';
import { Product, products } from '@/app/_lib/products';

export default async function Page({ params }: { params: { productName: string } }) {
//  const [productData, setData] = useState(null);
  const productName : string = params.productName
  const productData : Product = products[productName]

  return (
    <div className='px-2 py-4 md:py-10'>

      <div className='md:grid md:grid-cols-2 md:gap-4'> {/* this is the top images container which will be the two columns */}

      <div className='md:flex md:justify-center md:mx-16 md:w-3/4 md:items-center'>{/*this here is the left side product slider stuff */}
        <ProductImageSlider productImagePaths={productData.imagePaths}/>
      </div>

    <div className='px-4 md:flex-col justify-center items-center'>{/*this here is the right side product info */}
      <h6 className='text-bold text-4xl'>
        {productData.productFullName}
      </h6> 
      <h6 className="mb-4">
        ${productData.price}
      </h6> 
      <AddToCart price={productData.stripeID} quantity={1} productName={productName}/>
      <p className='text-justify md:w-1/2 md:my-4'>
        {productData.description}
      </p> 
    </div>   
    
   </div>
  </div>
  )
}