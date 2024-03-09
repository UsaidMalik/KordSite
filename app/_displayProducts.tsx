import ProductCard from './_productCard';
import React from 'react';

interface DisplayProductProps{
    rows: Number,
    columns: Number, 
    productThumbnailPaths:  string[]
}
  

const ProductDisplay: React.FC<DisplayProductProps>  = ({rows, columns, productThumbnailPaths}) => {

    const productCards = productThumbnailPaths.map((thumbnailPath) => (<ProductCard key={thumbnailPath} imageLocation={thumbnailPath}/>)) 

    return (<div className={`grid grid-rows-${rows} grid-cols-${columns} gap-4`}>
    {productCards}
  </div>)
}

export default ProductDisplay