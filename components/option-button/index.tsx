"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { fullProduct } from "@/app/interface";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/app/lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
  quantity: number;
}

interface iAppProps {
  description: any;
}

export default function OptionButton({
  currency,
  description,
  image,
  name,
  price,
  price_id,
  quantity,
}: ProductCart) {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [option, setOption] = useState(0);
  const [soption, setOptionss] = useState(0);
  const { addItem, handleCartClick } = useShoppingCart();
  const colors = [
    { color: "White", id: 1 },
    { color: "Black", id: 2 },
    { color: "Blue", id: 3, disable: true },
  ];
  const sizes = [
    { size: "s", id: 1 },
    { size: "m", id: 2 },
    { size: "l", id: 3 },
    { size: "xs", id: 4, disable: true },
    { size: "xl", id: 5 },
    { size: "xxl", id: 6 },
  ];
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
    quantity: quantity,
  };
  return (
    <div className="flex flex-col">
      <h1 className=" mt-5 text-sm">COLOR</h1>
      <div>
        {colors?.map((item) => (
          <button
            key={item.id}
            className={cn(
              " rounded-full mr-2 min-w-[48px] text-sm font-medium bg-neutral-900 transition duration-100 hover:scale-110 hover:bg-neutral-800 leading-tight text-white border-2 border-neutral-700 px-2 py-1 mt-3 ",
              {
                "border-blue-600": option === item.id,
                "cursor-not-allowed  opacity-60 hover:opacity-60": item.disable,
              }
            )}
            onClick={() => {
              if (!item.disable) {
                setOption(item.id);
                setClicked1(true);
              }
            }}
          >
            {item.color}{" "}
          </button>
        ))}
        {/* <div className="mb-6 text-sm leading-tight dark:text-white/[60%]">{data?.description}</div>  */}
      </div>
      <h1 className=" mt-7 text-sm">SIZES</h1>
      <div>
        {sizes?.map((item) => (
          <button
            key={item.id}
            className={cn(
              " rounded-full mr-2 min-w-[48px] text-sm font-medium bg-neutral-900 transition duration-100 hover:scale-110 hover:bg-neutral-800 leading-tight text-white border-2 border-neutral-700 px-2 py-1 mt-3 ",
              {
                "border-blue-600": soption === item.id,
                "cursor-not-allowed opacity-60 hover:opacity-60": item.disable,
              }
            )}
            onClick={() => {
              if (!item.disable) {
                setOptionss(item.id);
                setClicked2(true);
              }
            }}
          >
            {item.size}
          </button>
        ))}
        {/* <div className="mb-6 text-sm leading-tight dark:text-white/[60%]">{data?.description}</div>  */}
      </div>
      <div className="mb-6 text-sm mx-5 sm:mx-0 overflow-hidden mr-5  line-clamp-2 w-96 mt-10 leading-tight dark:text-white/[60%]">
        {description}
      </div>
      <div
        onClick={() => {
          addItem(product);
          handleCartClick();
        }}
        className={cn(
          "rounded-full mx-5 sm:mx-0 bg-blue-600 cursor-pointer hover:bg-blue-700 text-center p-3  ",
          {
            "cursor-not-allowed opacity-60 hover:opacity-60": !clicked1,
            "cursor-not-allowed opacity-60 hover:opacity-60 rounded-full":
              !clicked2,
          }
        )}
      >
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
