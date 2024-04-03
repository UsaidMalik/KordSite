import React, { useEffect, useState } from 'react';
import "../globalicons.css"
import Link  from 'next/link';

const ShoppingCart = () => {

  function calcProductQuantity(){
    let quantity = 0;
    const products = JSON.parse(localStorage.getItem("products") || "{}")
    for (let key in products){
      quantity += products[key].qty || 0
    }
    return quantity;
  }

  const [quantity, setQuantitiy] = useState(calcProductQuantity())
  
  useEffect(() => {
    const handleStorageChange = () => {
      const numItems = calcProductQuantity()
      setQuantitiy(numItems);
    };

    // Listen for changes in local storage
    window.addEventListener('buttonClick', handleStorageChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('buttonClick', handleStorageChange);
    };
  }, []);


  
  // Calculate the total number of items in the cart
  return (
    <div>
      <Link href="/my-cart">
        <span className='material-symbols-outlined text-3xl relative'>
          shopping_bag
          {quantity > 0 && (
            <span
              className='absolute text-xs bg-white rounded-full p-1/2 h-auto w-auto p-0 flex items-center justify-center text-black bottom-0 right-0'
            >
              {quantity}
            </span>
          )}
        </span>
      </Link>
    </div>
  );
};

export default ShoppingCart;
