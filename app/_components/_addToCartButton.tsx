"use client"
import React, { useContext } from "react";
import CartContext from "./_cartContextProvider";
import AdderToCart from "./_adderToCart"

interface AddToCartProps{
    price: string,
    quantity: number
}
const AddToCart: React.FC<AddToCartProps>  = ({price, quantity})  => {
    
    return (

    <div>
        <CartContext>
            <AdderToCart price={price} quantity={quantity}/>
        </CartContext>
    </div>
    )
}

export default AddToCart