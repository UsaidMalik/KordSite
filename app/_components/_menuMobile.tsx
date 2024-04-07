import React, { useState } from 'react';
import "../globalicons.css"
import { Roboto_Slab } from "next/font/google";
import { menu } from "../_lib/menuRoutes"
import Link from "next/link";

const roboto = Roboto_Slab({
    subsets: ['latin'],
  })


const MenuMobile = () => {

  const [drawerFlag, setDrawerFlag] = useState(false);
  
  // Calculate the total number of items in the cart
  return (
    <div>
        <span className='material-symbols-outlined text-3xl relative'
          onClick={() => setDrawerFlag(!drawerFlag)} >
          menu
        </span>

        {drawerFlag && ( 
        <div className="fixed top-0 left-0 w-screen h-screen 
        bg-black text-white overflow-y-scroll z-50 p-4 
        transition-all duration-1000 ease-in-out">
          <div className='top-0 m-0'>

          <span className='material-symbols-outlined text-3xl cursor-pointer 
          transform transition-transform duration-200 hover:scale-90 hover:text-gray-500' 
              onClick={() => setDrawerFlag(false)} >
              close
            </span>
            {Object.entries(menu).map(([label, path]) => (
                  <div key={label} className={`w-100 text-2xl my-5 px-5 font-semibold ${roboto.className}`}
                  onClick={() => setDrawerFlag(false)}>
                    <Link href={path}>
                      {label}
                    </Link>
                  </div>
              ))}
            
          </div>

          </div>)}
            
    </div>
  );
};

export default MenuMobile;
