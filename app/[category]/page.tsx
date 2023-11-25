import { client } from "../lib/sanity";
import { simplifiedProduct } from "../interface";
import Image from "next/image";

async function getData(cateogry: string) {
  const query = `*[_type == "product" && category->name == "${cateogry}"] {
          _id,
            "imageUrl": images[0].asset->url,
            price,
            name,
            "slug": slug.current,
            "categoryName": category->name
        }`;

  const data = await client.fetch(query);

  return data;
}

import React from "react";
import Link from "next/link";
import GridTileImage from "@/components/grid/tile";
import DropdownButton from "@/components/DropdownButton";

export default async function Category({
    params,
  }: {
    params: { category: string };
  }) {
  const data = await getData(params.category);
  console.log("data", data);
  const choices = [
    {
        name: "All",
        link: "/All",
    },
    {
        name: "Shirts",
        link: "/Shirts",
    },
    {
        name: "Stickers",
        link: "/Stickers",
    },
    {
        name: "Electronics",
        link: "/Electronics",
    },
    {
        name:"Footwear",
        link: "/Footwear",
    },
    {
        name: "kids",
        link: "/kids",
    },
    {
        name: "Cup",
        link: "/Cup",
    },
    {
        name:"Jacket",
        link:"/Jacket"
    },
    {
        name:"Bag",
        link: "/Bag"
    },
    {
        name: "Cap",
        link: "/Cap"
    }
  ]
  return (
    <div className=" min-h-screen">
      <div className="flex flex-col sm:flex-row min-h-screen">
        <div className=" order-1 hidden sm:flex w-[125px] gap-y-2 text-sm sm:ml-24 pt-4  flex-col text-white  ">
            <div className=" text-neutral-400 text-xs">Collections</div>{choices.map((item:any,id:number)=>(
                <div key={id}><Link href={item.link} >{item.name}</Link></div>
            ))}
        </div>
        <div className=" w-full px-5 mt-4 sm:hidden"><DropdownButton/></div>
        <div className=" order-3 sm:order-2 px-5 lg:mx-8 w-full  mt-3 grid  grid-flow-row sm:grid-rows-6 gap-4 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 ">
          {data.map((item: any, id: number) => (
            <Link
              key={id}
              className=" aspect-square mb-2  "
              href={`/product/${item.slug}`}
            >
              <GridTileImage
                label={{
                  title: `${item.name}`,
                  amount: item.price,
                  position: "bottom"
                }}
                alt="product"
                src={item.imageUrl}
                sizes="(min-width: 768px) 33vw, 100vw"
                width={400}
                height={400}
              />
            </Link>
          ))}
        </div>
        <div className=" order-2 sm:order-3 w-[125px]"></div>
      </div>
    </div>
  );
}
