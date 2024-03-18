import { Roboto_Slab } from "next/font/google";
import { menu } from "../_lib/menuRoutes"
import Link from "next/link";

const roboto = Roboto_Slab({
    subsets: ['latin'],
  })

export default function MenuItemsLogo() {
    
    return <div> 
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
    
}