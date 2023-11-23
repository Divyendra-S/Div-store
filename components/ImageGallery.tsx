"use client";

import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import { useState } from "react";
import clsx from "clsx";
import { cn } from "@/lib/utils";

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);
  const [color, setColor] = useState("");
  const [color1, setColor1] = useState(false);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };

  return (
    <div className="   sm:mt-12 min-h-full  sm:w-[67%] overflow-hidden flex flex-col items-center ">
          <div className="max-h-[400px] sm:max-h-[550px]">
            <Image
              src={urlFor(bigImage).url()}
              alt={bigImage.asset._ref}
              width={550}
              height={400}
              sizes="(min-width: 768px) 66vw, 100vw"
              priority
            />
          </div>
          <div className=" gap-x-2 mt-12 flex justify-center">
            {images?.map((image: { asset: string }, id:number) => (
              <div key={id} className = {cn(" border  border-neutral-800 hover:border-blue-700 rounded-lg flex gap-x-2",{
                "border-2 border-blue-600" : image.asset === color
              })}>
                <Image
                  src={urlFor(image).url()}
                  alt={image.asset}
                  width={80}
                  height={80}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  onClick={() => {
                    handleSmallImageClick(image);
                    setColor(image.asset);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      
  );
}
