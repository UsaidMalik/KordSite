"use client"
import CheckoutButton from "../_components/_buttons/_checkoutButton";
import ProductDisplayCheckout from "../_components/_productCards/_productDisplayCheckout";

const Page = () => {
  return (<div className="p-4">
      <ProductDisplayCheckout columns={4}/>
      <CheckoutButton/>
    </div>
  );
};

export default Page;
