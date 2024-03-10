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
    <div>
      {productData && <ProductImageSlider productImagePaths={productData.imagePaths}/>}
    </div>

  )
}