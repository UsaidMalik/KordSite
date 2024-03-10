
import { useState, useEffect } from "react";
import Image from "next/image";
import products from "@/app/products";

interface ProductImageSliderProps{
  productName: string
}

const ProductImageSlider : React.FC<ProductImageSliderProps> = ({productName}) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const productImagePaths = []

    const nextImage = () => {
        setCurrentIdx((currentIdx + 1) % productImagePaths.length);
    };
    
    const prevImage = () => {
        setCurrentIdx((currentIdx - 1 + productImagePaths.length) % productImagePaths.length);
      };
    
      const selectImage = (idx : number) => {
        setCurrentIdx(idx);
      };

   return (<div className="relative">
   <div className="flex justify-center items-center">
     <button onClick={prevImage} className="absolute left-0 ml-2">Prev</button>
     <Image 
       src={productImagePaths[currentIdx]} 
       layout="fill" 
       alt={`Image of A Product`}
       objectFit="contain" 
       className="cursor-zoom-in"
     />
     <button onClick={nextImage} className="absolute right-0 mr-2">Next</button>
   </div>
   <div className="flex justify-center mt-4">
     {productImagePaths.map((_, idx) => (
       <button 
         key={idx} 
         onClick={() => selectImage(idx)} 
         className={`h-4 w-4 mx-1 rounded-full ${currentIdx === idx ? 'bg-gray-800' : 'bg-gray-300'}`}
       />
     ))}
   </div>
 </div>)
}

export default ProductImageSlider

