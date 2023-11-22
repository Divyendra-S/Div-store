import React from "react";
import { client, urlFor } from "@/app/lib/sanity";
import { fullProduct } from "@/app/interface";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
          _id,
            images,
            price,
            name,
            description,
            "slug": slug.current,
            "categoryName": category->name,
            price_id
        }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);
  console.log(data);

  return (
    <div className=" bg-neutral-900 min-h-screen w-full pl-1 flex pt-3 flex-col sm:flex-row  sm:justify-center ">
      <div className=" w-full flex flex-col  items-center ">
        <div className=" bg-black w-[90%]  rounded-lg relative border  border-neutral-800 min-h-[81vh] sm:h-[81vh] flex flex-col sm:flex-row ">
          <ImageGallery images={data.images} />
          <div className="flex flex-col ">
            <div className=" text-white text-5xl mt-16 font-medium ">
              {data?.name}
            </div>
            {/* <div className=" text-white text-clip font-light">{data?.description}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
