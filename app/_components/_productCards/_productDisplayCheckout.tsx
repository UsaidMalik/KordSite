import ProductCardCheckout from './_productCardCheckout';
import React, { useState, useEffect } from 'react';

  
const ProductDisplayCheckout = () => {

    const [productNames, setProductNames] = useState<string[]>([]);
    const [productQty, setProductQty] = useState<number[]>([]);

    useEffect(() => {
      // Perform localStorage action
      const products = JSON.parse(localStorage.getItem('products') || "{}");
      const names: string[] = [];
      const qtys: number[] = [];
      for (let key in products){
        names.push(products[key].name);
        qtys.push(products[key].qty)
      }
      setProductNames(names);
      setProductQty(qtys);
    }, [])

    const productCards = productNames.map((productName, idx) => (<ProductCardCheckout productName={productName} qty={productQty[idx]}/>)) 
    
    return (<div>
    {productCards}
  </div>)
}

export default ProductDisplayCheckout
