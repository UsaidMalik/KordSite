import ProductCard from './_productCard';
import React from 'react';

interface DisplayProductProps{
    rows: Number,
    columns: Number, 
    products:  string[]
}
  

const ProductDisplay: React.FC<DisplayProductProps>  = ({rows, columns, products}) => {
  
    const productCards = products.map((productName) => (<ProductCard key={productName} productName={productName}/>)) 

    return (<div className={`grid grid-rows-${rows} grid-cols-${columns} gap-4`}>
    {productCards}
  </div>)
}

export default ProductDisplay