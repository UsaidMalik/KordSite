import { Inter } from "next/font/google";
import "./globals.css";
import { menu } from "./menuRoutes"
import Link from "next/link";
import ShoppingCart from "./shoppingCart"
import './globalicons.css'

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <header>
        <Link href="/">
          <img src="favicon.ico"/>
        </Link>
          <nav>
            <ul>
              
            {Object.entries(menu).map(([label, path]) => (
                <li key={label}>
                  <Link href={path}>
                    {label}
                  </Link>
                </li>
              ))}

            </ul>
          </nav>

        <ShoppingCart/> 
        </header> 
        {children}     
        <footer>


        </footer>
        </body>
    </html>
  );
}
