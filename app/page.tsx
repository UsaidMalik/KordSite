"use client"
import Image from "next/image";
import Link  from "next/link";
import ProductDisplay from "./_components/_productCards/_displayProducts";
import {useMediaQuery} from 'react-responsive'


export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  
  return (
    <div>
    {!isMobile && <div className="flex justify-center items-center h-96 bg-black">
      
    <div className="w-1/2 relative h-full opacity-50 hover:opacity-100 transition-opacity duration-500 ease-in-out">
      <Link href="/product/Obsidian-Sengakuji">
          <Image 
          src="/main-page/2.jpg" 
          alt="Kord Obsidian Sengakuji Keycap"
          objectFit="cover"
          fill={true}
          className=""
          />
      </Link>
    </div>

     <div className="w-1/2 relative h-full opacity-50 hover:opacity-100 transition-opacity duration-500 ease-in-out">
     <Link href="/product/Arabic-Oasis-Mousepad">
          <Image 
          src="/main-page/10.jpg" 
          objectFit="cover"
          alt="Kord Mousepad Image"
          fill={true}
          />
        </Link>
    </div>

    <div className="absolute w-fit md:inset-10 items-center justify-center text-center m-0 p-0" style={{pointerEvents: "none"}}>
      <p className="text-white text-4xl font-bold drop-shadow-2xl">
        Transform Your Setup Into A Cultural Masterpiece
      </p>
      <br></br>
      <Link href="collections/all" className="px-4 py-2 rounded-full text-lg transition duration-700 ease-in-out bg-white hover:text-gray-800 hover:bg-gray-300 hover:text-base" style={{pointerEvents: "auto"}}>DISCOVER</Link>
    </div>
  </div>}

  {isMobile && 
  <div className="flex justify-center items-center h-96 bg-black">
      
  <div className="w-full relative h-full hover:opacity-100 transition-opacity duration-500 ease-in-out">
    <Link href="/product/Obsidian-Sengakuji">
        <Image 
        src="/main-page/2.jpg" 
        alt="Kord Obsidian Sengakuji Keycap"
        objectFit="cover"
        fill={true}
        className="opacity-50"
        />
    </Link>
    <div className="sticky w-fit top-10 md:inset-10 items-center justify-center text-center m-0 my-16 h-full opacity-100" style={{pointerEvents: "none"}}>
    <p className="text-white text-4xl font-bold drop-shadow-2xl mt-4 mb-32">
      Transform Your Setup Into A Cultural Masterpiece
    </p>
    <br></br>
    <Link href="collections/all" className="px-4 py-2 my-4 rounded-full text-lg transition duration-700 ease-in-out bg-white hover:text-gray-800 hover:bg-gray-300 hover:text-base" style={{pointerEvents: "auto"}}>DISCOVER</Link>
  </div>
  </div>
</div>
  }

    
    <br></br>
      <div className="flex justify-center">
        <hr className="w-3/4 border-t-2 border-gray-600"/>
      </div>
    <br></br>
    <div className="px-8">
      <p className="text-3xl font-bold">
        Featured Items
      </p>
      <br></br>
    <ProductDisplay products={["Obsidian-Sengakuji", "Kilauea-Volcano", "Arabic-Oasis-Mousepad", "Sunset-Oasis-Mousepad"]}/>
    </div>
  </div>
  );
}
