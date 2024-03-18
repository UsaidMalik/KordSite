"use client"
import React, { useContext } from "react";
import  { cartContext } from "./_cartContextProvider";


const AdderToCart = ()  => {

    const [products, setProducts] = useContext(cartContext);
    return (
    <div>
        <button onClick={() => {setProducts(6)}}>
            Im a bitton
        </button>
    </div>
    )
}

export default AdderToCart