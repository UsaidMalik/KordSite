"use client"
import CartContext, { cartContext } from "../_components/_buttons/_cartContextProvider";
import { useContext } from "react";
import CheckoutButton from "../_components/_buttons/_checkoutButton";

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
