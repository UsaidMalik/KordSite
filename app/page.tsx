import Image from "next/image";
import Link  from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center overflow-hidden h-96 bg-black">
      
    <div className="w-1/2 relative h-full opacity-50 hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <Image 
          src="/main-page/2.jpg" 
          alt="Kord Obsidian Sengakuji Keycap"
          objectFit="cover"
          fill={true}
          className=""
          />
    </div>

     <div className="w-1/2 relative h-full opacity-50 hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <Image 
          src="/main-page/10.jpg" 
          objectFit="cover"
          alt="Kord Mousepad Image"
          fill={true}
          />
    </div>

    
    <div className="absolute inset-10 flex flex-col items-center justify-center text-center" style={{pointerEvents: "none"}}>
      <p className="text-white text-4xl font-bold drop-shadow-2xl">
        Transform Your Setup Into A Cultural Masterpiece
      </p>
      <br>
      </br>
      <Link href="my-cart" className="px-4 py-2 rounded-full text-lg transition duration-700 ease-in-out bg-white hover:text-gray-800 hover:bg-gray-300 hover:text-base" style={{pointerEvents: "auto"}}>DISCOVER</Link>
    </div>

  </div>
  );
}
