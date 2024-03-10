"use client"
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import ProductImageSlider from './_imageSlider';

export default function Page() {
  const [productData, setData] = useState(null);
  const pathname = usePathname()
 
  useEffect(() => {
    fetch(`http://localhost:3000${pathname}/api`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json(); // Parse the response data as JSON
      })
      .then((myData) => {
        console.log(myData.productData)
        setData(myData.productData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Dependency array

  return (
    <div className='py-10'>

      <div className='grid grid-cols-2 gap-4'> {/* this is the top images container which will be the two columns */}

      <div className='flex justify-center mx-16'>{/*this here is the left side product slider stuff */}
      {productData && <ProductImageSlider productImagePaths={productData.imagePaths}/>}
      </div>


      
    <div className='flex-col justify-center w-1/2'>{/*this here is the right side product info */}
      <h6 className='text-bold text-4xl'>
        {productData && productData.productFullName}
      </h6> 
      <h6>
        ${productData && productData.price}
      </h6> 
      <p>
        {productData && productData.description}
      </p> 
   </div>

   </div>

    </div>

  )
}