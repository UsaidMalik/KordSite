import Image from 'next/image'
import products from "../../_lib/products.json";
import {useState} from "react"

interface ProductCardProps {
  productName: string;
  qty: number;
  priceID: string,
}
  

const ProductCard: React.FC<ProductCardProps> = ({productName, qty, priceID}) => {
  const productDetails = products[productName]
  const [visibile, setVisible] = useState(true)
  const removeProduct = () => {
    setVisible(false);
    const products = JSON.parse(localStorage.getItem("products") || "{}");
    delete products[priceID];
    localStorage.setItem("products", JSON.stringify(products));
    window.dispatchEvent(new Event('buttonClick')) // adding in the window event to see button clikc
  }

  return (
  visibile && <div className="flex items-center w-full border border-black p-2">
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
        <span className='material-symbols-outlined text-xl cursor-pointer 
          transform transition-transform duration-200 hover:scale-90 hover:text-gray-500' 
              onClick={removeProduct} >
              close
            </span>
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
