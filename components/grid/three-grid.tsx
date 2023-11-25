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
  slug,
  name,
  price
}: {
  position: "center" | "bottom";
  item: Image;
  priority?: boolean;
  slug: string;
  price: number;
  name: string;
}) {
  return (
    <div
      className={`${
        position === "center"
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
      }`}
    >
      <Link
        href={`/product/${slug}`}
        className="relative block  w-full h-full aspect-square"
      >
        <GridTileImage
        label={{
          title: `${name}`,
          amount: price,
          position: position,
        }}
          src={urlFor(item).url()}
          alt='product'
          fill
          sizes={
            position === "center"
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
      <ThreeGridItem position = "center" price={40} name="Div/ Store Baggy T-Shirt" slug={'div-store-baggy-t-shirt'} item={date.image1} priority={true}/>
        <ThreeGridItem position = "bottom" price={40} name="Div/ Baby Onesie" slug={'div-baby-onesie'} item={date.image2} priority={true}/>
        <ThreeGridItem position = "bottom" price={40} name="Div/ Mug" slug={'div-mug'} item={date.image3} priority={true}/> 
    </section>
  );
}
