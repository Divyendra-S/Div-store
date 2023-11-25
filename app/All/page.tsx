import { client } from "../lib/sanity";
import { simplifiedProduct } from "../interface";

async function getData() {
  const query = `*[_type == "product"] {
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
import { Dropdown } from "@/components/Dropdown";
import DropdownButton from "@/components/DropdownButton";

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  //const data = await getData();
  const data = [
    {
      _id: "09e40916-4bbe-45a6-9ab1-6c5ad7c06134",
      imageUrl:
        "https://cdn.sanity.io/images/g7cgcuwj/production/b1970b5f9bcf65ca5e37fa106b5ec7a27f818278-1080x1080.png",
      price: 20,
      name: "Div/ Cowboy Hat",
      slug: "div-cowboy-hat",
      categoryName: "Cap",
    },
    {
      slug: "div-hoodie",
      categoryName: "Jacket",
      _id: "10257bb8-26f9-4421-a4d6-57039fd600ff",
      imageUrl:
        "https://cdn.sanity.io/images/g7cgcuwj/production/339a7b26422656550983425d8956e736cb141ba6-2000x2000.png",
      price: 20,
      name: "Div/ Hoodie",
    },
    {
      _id: "1bb6231a-2ac1-4f62-8bb7-2cc1bef53137",
      imageUrl:
        "https://cdn.sanity.io/images/g7cgcuwj/production/9111b1c608e9165d6d926632fa7e4ebeb2630f2a-1500x1500.png",
      price: 40,
      name: "Div/ Dog Sweater",
      slug: "div-dog-sweater",
      categoryName: "Jacket",
    },
    {
      categoryName: "Cup",
      _id: "229ef17b-4d6d-4b32-884c-f1403408fd79",
      imageUrl:
        "https://cdn.sanity.io/images/g7cgcuwj/production/c0fa41928fbd435d604ffe7706cf00557b2062fa-1200x1200.png",
      price: 40,
      name: "div/ cup",
      slug: "div-cup",
    },
    {
      name: "Div/ Sticker",
      slug: "div-Sticker",
      categoryName: "Stickers",
      _id: "33e13635-8461-4d56-965d-75ca0d3b316f",
      imageUrl:
        "https://cdn.sanity.io/images/g7cgcuwj/production/6a2c3fc6feca3c67ff00b5a5073b314b9fc6d4a5-900x900.png",
      price: 40,
    },
    {
      _id: "4e4818dd-8305-40ca-a88d-52a69966353c",
      imageUrl:
        "https://cdn.sanity.io/images/g7cgcuwj/production/668fe3002546323ff93dbb8cc7efeefe46f0dbc5-1200x1200.png",
      price: 20,
      name: "Div/ Hat ",
      slug: "div-hat",
      categoryName: "Cap",
    },
    {
      name: "Div/ Webcam Cover",
      slug: "div-webcam-cover",
      categoryName: "Electronics",
      _id: "61775e44-47c5-4618-8075-23d3e6f72f1d",
      imageUrl:
        "https://cdn.sanity.io/images/g7cgcuwj/production/9fc09bb7972892ab0b08d9775d32246bad974717-1000x1000.png",
      price: 10,
    },
    {
      _id: "75ba003f-8653-458e-be82-b08840241c3d",
      imageUrl:
        "https://cdn.sanity.io/images/g7cgcuwj/production/950e57ea7902f96cd1a30677b228b4a30ac4f138-3023x3000.png",
      price: 40,
      name: "Div/ Baggy T-Shirt ",
      slug: "div-store-baggy-t-shirt",
      categoryName: "Shirts",
    },
    {
      _id: "7e246e81-962f-4c3a-9f27-894f1074e7bc",
      imageUrl:
        "https://cdn.sanity.io/images/g7cgcuwj/production/34416bf683a6f3e733fb9d7df7143ea86e663e19-1024x1024.png",
      price: 20,
      name: "Div/ Shoes",
      slug: "div-shoes",
      categoryName: "Footwear",
    },
    {
      categoryName: "Jacket",
      _id: "9edbb717-b184-4bb9-9e5a-6f198c5b6996",
      imageUrl:
        "https://cdn.sanity.io/images/g7cgcuwj/production/ba4cb2278749a7a807757d30f5a5ed9c3e9c6b1a-1000x1000.png",
      price: 60,
      name: "Div/ Bomber Jacket",
      slug: "div-bomber-jacket",
    },
    {
      _id: "a97db2e5-3e43-48ed-9995-3bc88c9ffbee",
      imageUrl:
        "https://cdn.sanity.io/images/g7cgcuwj/production/91177aa4a39933a4585bdec7702b61c27573182a-1000x1000.png",
      price: 40,
      name: "Div/ T-Shirt",
      slug: "div-t-shirt",
      categoryName: "Shirts",
    },
    {
      price: 20,
      name: "Div/ Baby Cap",
      slug: "div-baby-cap",
      categoryName: "kids ",
      _id: "b5414de6-8851-41da-b4f4-c80484dd363e",
      imageUrl:
        "https://cdn.sanity.io/images/g7cgcuwj/production/1229ecc87807ad9528f1ec626068dce54846d7de-1200x1200.png",
    },
    {
      imageUrl:
        "https://cdn.sanity.io/images/g7cgcuwj/production/1062791d2da8d32e50f8539fd4e584c8bf48418b-600x600.png",
      price: 20,
      name: "Div/ Pacifier",
      slug: "div-pacifier",
      categoryName: "kids ",
      _id: "d4010b2f-7098-4df2-ad97-74e11014d389",
    },
    {
      categoryName: "kids ",
      _id: "f486124e-08fe-4ab1-a58e-877f45822dbe",
      imageUrl:
        "https://cdn.sanity.io/images/g7cgcuwj/production/4533ade1b62e4c72cf7b0f8e1bf451acfb482ce2-1200x1200.png",
      price: 40,
      name: "Div/ Baby Onesie",
      slug: "div-baby-onesie",
    },
  ];
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
      name: "Footwear",
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
      name: "Jacket",
      link: "/Jacket",
    },
    {
      name: "Bag",
      link: "/Bag",
    },
    {
      name: "Cap",
      link: "/Cap",
    },
  ];
  return (
    <div className=" min-h-screen ">
      <div className="flex items-center sm:items-start flex-col sm:flex-row min-h-screen">
        <div className=" order-1 hidden sm:flex w-[125px] gap-y-2 text-sm sm:ml-24 pt-4  flex-col text-white  ">
          <div className=" text-neutral-400 text-xs">Collections</div>
          {choices.map((item: any, id: number) => (
            <div key={id}>
              <Link href={item.link}>{item.name}</Link>
            </div>
          ))}
        </div>
        <div className=" w-full px-5 mt-4 sm:hidden"><DropdownButton/></div>
        
        <div className=" order-3 sm:order-2 px-5 lg:mx-8 w-full  mt-3 grid grid-flow-row gap-4 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 ">
          {data.map((item: any, id: number) => (
            <Link
              key={id}
              className=" aspect-square mb-2 "
              href={`/product/${item.slug}`}
            >
              <GridTileImage
                label={{
                  title: `${item.name}`,
                  amount: item.price,
                  position: "bottom",
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
