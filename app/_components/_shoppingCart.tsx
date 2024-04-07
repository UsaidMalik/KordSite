import React, { useEffect, useState } from 'react';
import "../globalicons.css"
import ProductDisplayCheckout from "./_productCards/_productDisplayCheckout"
import CheckoutButton from './_buttons/_checkoutButton';

const ShoppingCart = () => {
  
  function calcProductQuantity(){
    let quantity = 0;
    let products: any = {}
    if (typeof window !== 'undefined') {
     products = JSON.parse(localStorage.getItem("products") || "{}")
    }
    for (let key in products){
      quantity += products[key].qty || 0
    }
    return quantity;
  }

  const [drawerFlag, setDrawerFlag] = useState(false);
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
        <span className='material-symbols-outlined text-3xl relative'
          onClick={() => setDrawerFlag(!drawerFlag)} >
          shopping_bag
          {quantity > 0 && (
            <span
              className='absolute text-xs bg-white rounded-full p-1/2 h-auto w-auto p-0 flex items-center justify-center text-black bottom-0 right-0'
            >
              {quantity}
            </span>
          )}
        </span>

        {drawerFlag && ( 
        <div className="fixed top-0 right-0 w-screen md:w-96 h-screen 
        bg-black text-white overflow-y-scroll z-50 p-4 
        transition-all duration-1000 ease-in-out">
          <div className='top-0 m-0'>

          <span className='material-symbols-outlined text-3xl cursor-pointer 
          transform transition-transform duration-200 hover:scale-90 hover:text-gray-500' 
              onClick={() => setDrawerFlag(false)} >
              close
            </span>
          {quantity && (
          <div>
          <ProductDisplayCheckout/>
          <CheckoutButton />
          </div>) || !quantity && (<div className='text-white text-center'>
            <p className='font-bold text-2xl text-center'>Cart's Empty!</p>
            <br></br>
            <p className='text-center'>Keep shopping around until you find something you love</p></div>)}
            
          </div>
        </div>
      )}

    </div>
  );
};

export default ShoppingCart;
