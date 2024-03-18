"use client"
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import { menu } from "./_lib/menuRoutes"
import Link from "next/link";
import ShoppingCart from "./_components/_shoppingCart"
import './globalicons.css'
import type { Metadata } from "next";
import { Twitter, Instagram } from 'react-feather';
import {socials} from "./_lib/socials"
import CartContext from "./_components/_cartContextProvider";
import MenuItemsLogo from "./_components/_logoMenuItems";
import KordFooter from "./_components/_footer";

const metadata: Metadata = {
  title: 'Kord Keyboards',
  description: 'kord keyboards',
}


const roboto = Roboto_Slab({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>

         <MenuItemsLogo/>
        
        <div className="pr-0 justify-end">
          <CartContext>
            <ShoppingCart/> 
          </CartContext>
        </div>
        </header>

        <main>

          {children}  
        </main>  
          
      <KordFooter/> {/*Incredibly based Kord Footer*/}

        </body>
    </html>
  );
}
