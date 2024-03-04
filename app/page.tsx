import Image from "next/image";
import Link  from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center overflow-hidden h-96">
      
    <div className="w-1/2 relative h-full">
          <Image 
          src="/main-page/2.jpg" 
          alt="Kord Obsidian Sengakuji Keycap"
          objectFit="cover"
          fill={true}
          />
        </div>

        <div className="w-1/2 relative h-full">
          <Image 
          src="/main-page/10.jpg" 
          objectFit="cover"
          alt="Kord Mousepad Image"
          fill={true}
          />
    </div>

    
    <div className="absolute inset-0 flex flex-col items-center  justify-center text-center">
      <p>
        Turn Your Setup Into A Cultural Masterpiece
      </p>
      <Link href="my-cart">DISCOVER</Link>
    </div>

  </div>
  );
}
