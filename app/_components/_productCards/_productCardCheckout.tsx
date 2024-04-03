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
    <div>
        <div className="relative">
          <Link href="/product/[productName]" as={`/product/${productDetails.imageDirectoryName}`}>
          <Image 
          src={`/productImages/${productDetails.imageDirectoryName}/thumbnail.jpg`}
          alt="Kord Obsidian Sengakuji Keycap"
          objectFit="cover"
          className="transition-all duration-500
           ease-in-out transform hover:scale-95 hover:opacity-75"
          height={300}
          width={300}
          />
          </Link>
        </div>

        <div className="text-lg">
          Quantity: {qty}
        </div>
    </div>
  );
};

export default ProductCard;
