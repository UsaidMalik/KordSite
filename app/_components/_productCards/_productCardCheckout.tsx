import Link  from 'next/link';
import Image from 'next/image'
import products from "../../_lib/products.json";

interface ProductCardProps {
  productName: string;
  qty: number;
}
  

const ProductCard: React.FC<ProductCardProps> = ({productName, qty}) => {
  const productDetails = products[productName]

  return (
    <div className="flex items-center w-full border border-black p-2">
        <div className="w-1/4 h-1/4 mr-2">
          <Image 
          src={`/productImages/${productDetails.imageDirectoryName}/thumbnail.jpg`}
          alt={productDetails.thumbnailName}
          objectFit="cover"
          height={200}
          width={200}
          />
        </div>

        <div className="w-2/3 text-right">
        <div className="text-lg">
          {productName}
        </div>
        <div className="text-sm">
          {qty}
        </div>
        <div className="text-sm">
          ${productDetails.price}
        </div>

        
      </div>
      
    </div>
  );
};

export default ProductCard;
