import Link from "next/link";
import React from "react";
import GridTileImage from "./tile";
import { urlFor, client } from "@/app/lib/sanity";

interface ImageAsset {
  _ref: string;
  _type: "reference";
}

interface Image {
  _type: "image";
  asset: ImageAsset;
}

interface HeroImage {
  _updatedAt: string;
  image2: Image;
  image3: Image;
  _createdAt: string;
  _rev: string;
  _type: "heroImage";
  _id: string;
  image1: Image;
}

function ThreeGridItem({
  position,
  item,
  priority,
}: {
  position: "full" | "half";
  item: Image;
  priority?: boolean;
}) {
  return (
    <div
      className={`${
        position === "full"
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
      }`}
    >
      <Link
        href={"/product/div-store-baggy-t-shirt"}
        className="relative block  w-full h-full aspect-square"
      >
        <GridTileImage
          src={urlFor(item).url()}
          alt={item.asset._ref}
          fill
          sizes={
            position === "full"
              ? "(min-width: 768px) 66vw, 100vw"
              : "(min-width: 768px) 33vw, 100vw"
          }
          priority={priority}
        />
      </Link>
    </div>
  );
}

export default async function ThreeGridItems() {
  async function getData() {
    const query = "*[_type == 'heroImage'][0]";

    const data = await client.fetch("*[_type == 'heroImage'][0]" );

    return data as HeroImage;
  }

  const date = (await getData()) as HeroImage;
  console.log(date);

  return (
    <section className="mx-auto mt-4 grid max-w-screen-2xl  gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
      <ThreeGridItem position = "full" item={date.image1} priority={true}/>
        <ThreeGridItem position = "half" item={date.image2} priority={true}/>
        <ThreeGridItem position = "half" item={date.image3} priority={true}/> 
    </section>
  );
}
