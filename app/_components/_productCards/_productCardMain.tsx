import Link  from 'next/link';
import Image from 'next/image'
import products from "../../_lib/products.json";

interface ProductCardProps {
  productName: string;
}
  

const ProductCard: React.FC<ProductCardProps> = ({productName}) => {
  const productDetails = products[productName]
  return (
    <div className='relative h-96 w-96'>
        <div className="relative h-3/4 w-3/4">
          <Link href="/product/[productName]" as={`/product/${productName}`}>
          <Image 
          src={`/productImages/${productDetails.imageDirectoryName}/thumbnail.jpg`}
          alt={productDetails.productName}
          objectFit="cover"
          layout="fill"
          className="transition-all duration-500
           ease-in-out transform hover:scale-95 hover:opacity-75"
          />
          </Link>
        </div>

        <div className="text-lg">
          {productDetails.thumbnailName}
        </div>
        <div className="text-sm">
          {`$${productDetails.price}`}
        </div>
    </div>
  );
};

export default ProductCard;
