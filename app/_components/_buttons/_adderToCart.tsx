"use client"
import React, { useContext } from "react";
import  { cartContext, lineItems } from "./_cartContextProvider";


interface AddToCartProps{
    price: string,
    quantity: number
}
const AdderToCart: React.FC<AddToCartProps>  = ({price, quantity})  => {

    const [products, setProducts] = useContext(cartContext);
    // products is an array of objects {price qty}
    return (
    <div>
        
        <button onClick={() => {

        setProducts((prevProducts: lineItems )=> ({
            ...prevProducts,
            [price]: (prevProducts[price] || 0) + quantity,
        }));
        localStorage.setItem('products', JSON.stringify(products))
        }}> {/*js moment*/}
    Add To Cart
</button>

    </div>
    )
}

export default AdderToCart