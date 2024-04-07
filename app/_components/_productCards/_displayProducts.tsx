import ProductCard from './_productCardMain';
import React from 'react';

interface DisplayProductProps{
    products:  string[]
}
  

const ProductDisplay: React.FC<DisplayProductProps>  = ({ products}) => {
  
    const productCards = products.map((productName) => (<ProductCard key={productName} productName={productName}/>)) 

    return (<div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4`}>
    {productCards}
  </div>)
}

export default ProductDisplay