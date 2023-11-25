import { client } from "@/app/lib/sanity";
import Image from "next/image";
import React from "react";
import GridTileImage from "./grid/tile";
import Label from "./label";
import Link from "next/link";

export default async function Carousel() {
  async function getData() {
    const query = `*[_type == "product"] | order(_createdAt desc) {
              _id,
                price,
              name,
                "slug": slug.current,
                "categoryName": category->name,
                "imageUrl": images[0].asset->url
            }`;

    const data = await client.fetch(query);

    return data;
  }
  const data = await getData();
  console.log("dataa", data);
  const carouselProducts = [...data, ...data, ...data, ...data];
  return (
    <div className="min-w-screen overflow-x-auto pb-6 pt-1">
      <div className="h-[350px]   carousel flex gap-x-2">
        {carouselProducts.map((data: any, id: number) => (
          <div
            className=" relative h-[300px] w-[300px] overflow-hidden flex-shrink-0 sm:w-[450px] flex items-center justify-center border border-neutral-700 bg-black rounded-lg"
            key={id}
          ><Link href={`/product/${data.slug}`}>
            <Image
              src={data.imageUrl}
              alt="product"
              width={300}
              height={300}
              sizes="(min-width: 768px) 66vw, 100vw"
            /></Link>
            <Label label={{title: `${data.name}`,
                  amount: data.price,
                  position: "bottom",}} />
          </div>
        ))}
      </div>
    </div>
    // <div className=" min-w-screen overflow-x-auto pb-6 pt-1">
    // <div className=" h-[350px] carousel flex  gap-x-2">
    //   {carouselProducts.map((data: any, id: number) => (
    //     <div
    //       className=" carousel-item h-[300px] flex-shrink-0 sm:w-[450px] flex items-center justify-center border border-neutral-700 bg-black rounded-lg"
    //       key={id}
    //     >
    //       <Image
    //         src={data.imageUrl}
    //         alt="product"
    //         width={300}
    //         height={300}
    //         sizes="(min-width: 768px) 66vw, 100vw"
    //       />
    //     </div>
    //   ))}
    // </div>
    // </div>
  );
}
