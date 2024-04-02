"use client"
import React, { useState, useContext, createContext, useEffect} from 'react';
import "../globalicons.css"
import Link  from 'next/link';
import CartContext, { cartContext } from './_cartContextProvider';


const ShoppingCart = () => {
  const [products, setProducts] = useContext(cartContext)
  
  console.log("in cart is ", {products})
  return (
    <div>
      <Link href="/my-cart">
      <span className='material-symbols-outlined text-3xl'>shopping_bag</span>
      </Link>
    </div>
  );
};

export default ShoppingCart;
