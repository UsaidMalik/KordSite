"use client"
import React, { useContext } from "react";
import CartContext from "./_cartContextProvider";
import AdderToCart from "./_adderToCart"

interface AddToCartProps{
    quantity: number
}
const AddToCart: React.FC<AddToCartProps>  = ({quantity})  => {
    
    return (

    <div>
        <CartContext>
            <AdderToCart/>
        </CartContext>
    </div>
    )
}

export default AddToCart