import React from "react";
import { cn } from "@/lib/utils";
import clsx from "clsx";
interface l {
  label: { title: string; amount: number; position: "bottom" | "center" };
}
export default function Label(label: l) {
  return (
    <div className={cn('absolute bottom-14 left-4 flex w-full  ', {
        'lg:px-20 lg:pb-[35%]': label.label.position === 'center'
      })}>
    <div className={cn(`flex  absolute bg-black/70 backdrop-blur-md    px-4 pb-4 text-xs z-30 gap-x-4 text-white rounded-full border border-neutral-800 p-1 font-semibold justify-center items-center `)}>
      <div className=" ml-2">{label.label.title}</div>
      <div className=" bg-blue-600 rounded-full p-2 flex justify-center items-center text-xs">${label.label.amount}.00 USD</div>
    </div>
    </div>
  );
}
