import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import { menu } from "./_lib/menuRoutes"
import Link from "next/link";
import ShoppingCart from "./_components/_shoppingCart"
import './globalicons.css'
import type { Metadata } from "next";
import { Twitter, Instagram } from 'react-feather';
import {socials} from "./_lib/socials"

export const metadata: Metadata = {
  title: 'Kord Keyboards',
  description: 'kord keyboards',
}


const roboto = Roboto_Slab({
  subsets: ['latin'],
})

function SocialIcon(name: string){
  switch (name){
    case "Instagram":
      return <Instagram/>
    case "Twitter":
      return <Twitter/>
    case "Tik Tok":
      return <img className="w-6" src="/TikTok.png" alt="Tik Tok Logo"/>
  }
}

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
          <img alt="Kord Keyboards Logo White" src="/Kord Logo White.png" className="w-24"/>
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

        <main>

          {children}  
        </main>  
          

    <footer className="p-4 h-24">

      <div className={`flex justify-between w-full ${roboto.className} pl-16`}>

        <ul className="flex space-x-4">
          {Object.entries(socials).map(([label, path]) => (
            <li key={label} className={`${roboto.className}`}>
              <Link href={path} target="_blank">
                {SocialIcon(label)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-sm pr-16">
          © 2024, Kord Powered by The Kommunity
        </div>

      </div>

    </footer>

        </body>
    </html>
  );
}
