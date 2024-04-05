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
  const [quantity, setQuantity] = useState(qty)

  const removeProduct = () => {
    setVisible(false);
    const products = JSON.parse(localStorage.getItem("products") || "{}");
    delete products[priceID];
    localStorage.setItem("products", JSON.stringify(products));
    window.dispatchEvent(new Event('buttonClick')) // adding in the window event to see button clikc
  }

  const adjustQuantity = (adjustment : number, quantity : number) => {
    let newQuantity = quantity + adjustment
    if (newQuantity < 1) newQuantity = 1;
    setQuantity(newQuantity);
    const products = JSON.parse(localStorage.getItem("products") || "{}");
    products[priceID].quantity = newQuantity;
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
          {productDetails.thumbnailName}
        </div>
        <div className='text-m'>
        {quantity > 1 ? (
          <span className='material-symbols-outlined mx-2 text-sm cursor-pointer' onClick={() => adjustQuantity(-1, quantity)}>remove</span>
        ) : (
          <span className='material-symbols-outlined mx-2 text-sm text-gray-500'>remove</span>
        )}
          {quantity}
          <span className='material-symbols-outlined ml-2 text-sm cursor-pointer'
            onClick={() => adjustQuantity(1, quantity)}>add</span>
        </div>
        <div className="text-xs ">
          ${Number(productDetails.price * quantity).toFixed(2)}
        </div>


      </div>
      
    </div>
  );
};

export default ProductCard;
