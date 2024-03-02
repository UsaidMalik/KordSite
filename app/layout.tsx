import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import { menu } from "./menuRoutes"
import Link from "next/link";
import ShoppingCart from "./shoppingCart"
import './globalicons.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
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
          <div> 
        <Link href="/">
          <img src="Kord Logo White.png" className="h-50px" />
        </Link>
  
          <nav className="pl-16">
            <ul>
              
            {Object.entries(menu).map(([label, path]) => (
                <li key={label} className={`${roboto.className}`}>
                  <Link href={path}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="pr-0 justify-end">
        <ShoppingCart/> 
        </div>
        </header> 
        {children}     
        <footer>


        </footer>
        </body>
    </html>
  );
}
