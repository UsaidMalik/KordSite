import { useState } from "react";
import { createContext } from "react";

export type lineItems = {[price:string]: number};
type ContextType = [lineItems, 
React.Dispatch<React.SetStateAction<lineItems>>];

// Create the context with the default value as undefined
export const cartContext = createContext<ContextType | undefined>(undefined);


export default function CartContext({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [products, setProducts] = useState<lineItems>({})
    console.log("just got updates", products)
    return (
        <cartContext.Provider value={[products, setProducts]}>
            {children}
        </cartContext.Provider>  
    )


}