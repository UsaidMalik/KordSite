"use client"
import React, { useState } from 'react';
import "./globalicons.css"
import Link  from 'next/link';

const ShoppingCart = () => {
  
  return (
    <div>
      <Link href="my-cart">
      <span className='material-symbols-outlined text-3xl'>shopping_bag</span>
      </Link>
    </div>
  );
};

export default ShoppingCart;
