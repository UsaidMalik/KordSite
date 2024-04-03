import ProductCardCheckout from './_productCardCheckout';
import React, { useState, useEffect } from 'react';

interface DisplayProductProps{
    columns: number,     
    products: any,
}
  
const ProductDisplay: React.FC<DisplayProductProps>  = ({columns}) => {

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
    const rows = Math.floor(productNames.length / columns);
    
    return (<div className={`grid grid-rows-${rows} grid-cols-${columns} gap-4`}>
    {productCards}
  </div>)
}

export default ProductDisplay
