import { Roboto_Slab } from "next/font/google";
import Link from "next/link";
import type { Metadata } from "next";
import { Twitter, Instagram } from 'react-feather';
import {socials} from "../_lib/socials"

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

export default function KordFooter(){
    
    return <footer className="p-2 md:p-4 md:h-24">

<div className={`flex justify-between w-full ${roboto.className} pl-16`}>

  <ul className="flex space-x-2 md:space-x-4">
    {Object.entries(socials).map(([label, path]) => (
      <li key={label} className={`${roboto.className}`}>
        <Link href={path} target="_blank">
          {SocialIcon(label)}
        </Link>
      </li>
    ))}
  </ul>
  <div className="text-xs pr-4 md:text-sm md:pr-16 text-right">
   <p> © 2024, Kord Powered by The Kommunity</p>
   <p>Email: support@kord.fun</p> 
  </div>

</div>

</footer>
}