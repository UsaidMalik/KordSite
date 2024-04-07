"use client"
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import ShoppingCart from "./_components/_shoppingCart"
import './globalicons.css'
import type { Metadata } from "next";
import MenuItemsLogo from "./_components/_logoMenuItems";
import KordFooter from "./_components/_footer";
import {useMediaQuery} from 'react-responsive'
import Link from "next/link";

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
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <html lang="en">
      <body>
        <header className="p-4 md:p-32">
        {!isMobile && <MenuItemsLogo/>
        }

        {
          isMobile && <div>
            <span className="material-symbols-outlined">menu</span>
            <Link href="/">
              <img alt="Kord Keyboards Logo White" src="/Kord Logo White.png" className="justify-center ml-28 w-3/4"/>
            </Link>
          </div>
        }


        <div className="pr-0 justify-end m-0">{/* Client componenet */}

          <ShoppingCart/> 

        </div>
        </header>

        <main>

          {children}  
        </main>  
      <KordFooter/> {/*Incredibly based Kord Footer, which is also a server compoenent */}

        </body>
    </html>
  );
}
