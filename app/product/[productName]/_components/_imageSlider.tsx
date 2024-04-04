"use client";
import { useState } from "react";
import Image from "next/image";
import "./component-styles/slider-icons.css"

interface ProductImageSliderProps{
  productImagePaths: string[]
}

{/*This is a client componenet but the paths i should get from a server componenet*/}
const ProductImageSlider : React.FC<ProductImageSliderProps> = ({productImagePaths}) => {
    const [currentIdx, setCurrentIdx] = useState(0);

    const nextImage = () => {
        setCurrentIdx((currentIdx + 1) % productImagePaths.length);
    };
    
    const prevImage = () => {
        setCurrentIdx((currentIdx - 1 + productImagePaths.length) % productImagePaths.length);
      };
    
      const selectImage = (idx : number) => {
        setCurrentIdx(idx);
      };

   return (
   
   <div className="relative m-2 w-auto h-auto pb-10 mx-0">
   <div className="relative w-auto">
     <Image 
       src={`/${productImagePaths[currentIdx]}`} 
       alt={`Image of A Product`}
       className="m-0 p-0 w-full"
       width={1280}
       height={1280}
     >
     </Image>
     <button onClick={prevImage} className="absolute left-0 ml-1 top-1/2 prev w-8 h-8">&#10094;</button>
     <button onClick={nextImage} className="absolute right-0 mr-1 top-1/2 next w-8 h-8">&#10095;</button>

   </div>
   <div className="flex justify-center absolute bottom-0 left-1/2
   transform -translate-x-1/2">
     {productImagePaths.map((imgPath, idx) => (
       <Image 
         key={idx} 
         src={`/${imgPath}`}
         width={30}
         height={30}
         alt="Image of product"
         onClick={() => selectImage(idx)} 
         className="mx-1 hover:opacity-50 cursor-pointer transition-opacity duration-500 ease-in-out"
       />
     ))}
   </div>
 </div>)
}

export default ProductImageSlider

