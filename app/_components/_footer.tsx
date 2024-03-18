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
    
    return <footer className="p-4 h-24">

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
}