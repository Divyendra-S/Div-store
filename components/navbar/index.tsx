'use client'
import React from "react";
import Search from "./search";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useShoppingCart } from "use-shopping-cart";
import Link from "next/link";


export default function Navbar() {
  const { handleCartClick, cartCount} = useShoppingCart()
  const options = [
    {
      id: 1,
      name: "All",
      link : "/All",
    },
    {
      id : 2,
      name : "Shirts",
      link: "/Shirts",
    },
    {
      id: 3,
      name: "Stickers",
      link: "/Stickers",
    }
  ]

  
  return (
    <div className="flex bg-neutral-900 justify-between pr-5">
      <div className="flex bg-neutral-900 p-4 pt-7">
        <Link href={`/`} className=" text-white font-medium text-xs sm:text-sm ml-5 md:hidden lg:block">DIV/STORE.</Link>
        {options?.map((option)=>(
          <Link href={`${option.link}`} key={option.id} className=" flex ml-6 text-xs text-neutral-400 sm:text-sm">{option?.name}</Link>
        ))}
      </div>
      <div className="hidden justify-center md:flex sm:w-1/3 mr-64"><Search/></div>
      <div onClick={()=>{handleCartClick()}} className="mt-4 border relative w-11 h-11 p-3 rounded-lg flex items-center border-neutral-700"><div className=" h-4   w-4 rounded-md   mb-10 ml-4 text-white flex items-center text-xs justify-center p-2  text-center bg-blue-600 absolute"
        
        
      >{cartCount}</div><ShoppingCartIcon className="h-4 w-4 text-white "/></div>

    </div>
  );
}
