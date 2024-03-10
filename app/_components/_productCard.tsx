import "../styles/globalicons.css"
import Link  from 'next/link';
import Image from 'next/image'
import products from "../../data/products.json";

interface ProductCardProps {
  productName: string;
}
  

const ProductCard: React.FC<ProductCardProps> = async ({productName}) => {
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
          {productName}
        </div>
        <div className="text-sm">
          {`$${productDetails.price}`}
        </div>
    </div>
  );
};

export default ProductCard;
