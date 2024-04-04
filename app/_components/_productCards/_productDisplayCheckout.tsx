import ProductCardCheckout from './_productCardCheckout';
import React, { useState, useEffect } from 'react';

  
const ProductDisplayCheckout = () => {

    const [productNames, setProductNames] = useState<string[]>([]);
    const [productQty, setProductQty] = useState<number[]>([]);
    const [productIds, setProductIds] = useState<string[]>([]);

    useEffect(() => {
      // Perform localStorage action
      const products = JSON.parse(localStorage.getItem('products') || "{}");
      const names: string[] = [];
      const qtys: number[] = [];
      const ids: string[] = []
      for (let key in products){
        names.push(products[key].name);
        qtys.push(products[key].qty)
        ids.push(key)
      }
      setProductIds(ids);
      setProductNames(names);
      setProductQty(qtys);
    }, [])

    const productCards = productNames.map((productName, idx) => (<ProductCardCheckout productName={productName} qty={productQty[idx]} priceID={productIds[idx]}/>)) 
    
    return (<div>
    {productCards}
  </div>)
}

export default ProductDisplayCheckout
