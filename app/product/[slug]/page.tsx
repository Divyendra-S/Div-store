import React from "react";
import { client, urlFor } from "@/app/lib/sanity";
import { fullProduct } from "@/app/interface";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import { cn } from "@/lib/utils";
import OptionButton from "@/components/option-button";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
          _id,
            images,
            price,
            name,
            description,
            "slug": slug.current,
            "categoryName": category->name,
            price_id,
            quantity
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
  const colors = [
    { color: "White", id: 1 },
    { color: "Black", id: 2 },
    { color: "Blue", id: 3 },
  ];
  return (
    <div className=" bg-neutral-900 min-h-screen w-full pl-1 flex pt-3 flex-col sm:flex-row  sm:justify-center ">
      <div className=" w-full flex flex-col  items-center ">
        <div className=" bg-black w-[90%] sm:p-4 sm:pr-6 overflow-hidden  rounded-lg relative border  border-neutral-800 min-h-[81vh]  flex flex-col sm:flex-row ">
          <ImageGallery images={data.images} />
          <div className="flex flex-col text-white ">
            <div className=" text-white text-3xl ml-5 sm:ml-0 sm:text-start  sm:text-5xl mt-16 font-medium ">
              {data?.name}
            </div>
            <div className=" mt-5 ml-5 sm:ml-0 text-sm bg-blue-600 text-center w-[105px] rounded-full py-2 ">
              {`$${data?.price}.00 USD`}
            </div>
            <div className="bg-neutral-700 h-[1px] mt-6  sm:mr-2 mx-5 sm:mx-0"></div>
            <div className="ml-5 mr-4 sm:ml-0 mt-3">
              <OptionButton
                currency="USD"
                description={data?.description}
                image={data?.images[0]}
                name={data?.name}
                price={data?.price}
                key={data?._id}
                price_id={data?.price_id}
                quantity={data?.quantity}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
