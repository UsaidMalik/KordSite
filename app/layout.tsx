import { Inter } from "next/font/google";
import "./globals.css";
import { menu } from "./menuRoutes"
import Link from "next/link";
import ShoppingCart from "./shoppingCart"
import './globalicons.css'
import type { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Kord Keyboards',
  description: 'kord keyboards',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div>
        <Link href="/">
          <img src="Kord Logo White.png" className="h-50px" />
        </Link>
        </div>
        <div>
          <nav>
            <ul>
              
            {Object.entries(menu).map(([label, path]) => (
                <li key={label} className="text-xl">
                  <Link href={path}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div>
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
