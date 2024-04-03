import ProductCard from './_productCardMain';
import React from 'react';

interface DisplayProductProps{
    rows: Number,
    columns: Number, 
    products:  string[]
    
}
  

const ProductDisplay: React.FC<DisplayProductProps>  = ({rows, columns, products}) => {
  
    const productCards = products.map((productName) => (<ProductCard key={productName} productName={productName}/>)) 

    return (<div className={`grid grid-rows-[${rows}] grid-cols-4 gap-4`}>
    {productCards}
  </div>)
}

export default ProductDisplay