import CheckoutButton from "../_components/_buttons/_checkoutButton";
import ProductDisplay from "../_components/_displayProducts";

const Page = () => {

  return (
    <div>
      <ProductDisplay rows={1} columns={4} products={["Obsidian-Sengakuji"]} />
      <CheckoutButton/>
    </div>
  );
};

export default Page;
