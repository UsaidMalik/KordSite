"use client"
import React, { useState } from "react";

interface AddToCartProps{
    price: string,
    quantity: number
    productName: string,
}
const AddToCart: React.FC<AddToCartProps>  = ({price, quantity, productName})  => {

    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products") || "{}"))
    // products is an array of objects {price qty}
    return (
    <div className="justify-center">
        
        <button className="border-black border-2 text-black hover:bg-black
        w-1/2 text-xl hover:text-white transition-all duration-300 transform hover:scale-95" onClick={() => {

        setProducts((prevProducts)=> {
            const newProducts = {
                ...prevProducts,
                [price]: {qty: (Number(prevProducts[price]?.qty) || 0) + quantity, name: productName},
            };
            localStorage.setItem('products', JSON.stringify(newProducts));
            window.dispatchEvent(new Event('buttonClick')) // adding in the window event to see button clikc
            return newProducts;
        });
        }}> {/*js moment*/}
    Add To Cart
</button>

    </div>
    )
}

export default AddToCart
