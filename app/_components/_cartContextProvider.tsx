import { Children, useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

type ContextType = [number[], 
React.Dispatch<React.SetStateAction<number[]>>];

// Create the context with the default value as undefined
export const cartContext = createContext<ContextType | undefined>(undefined);


export default function CartContext({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [products, setProducts] = useState<number[]>([])
    return (
        <cartContext.Provider value={[products, setProducts]}>
            {children}
        </cartContext.Provider>  
    )


}