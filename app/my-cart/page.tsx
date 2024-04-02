"use client"
import CartContext, { cartContext } from "../_components/_cartContextProvider";
import { useContext } from "react";
import CheckoutButton from "../_components/_checkoutButton";

const Page = () => {
  return (
    <div>
      <CartContext>
        <CheckoutButton/>
      </CartContext>
    </div>
  );
};

export default Page;
