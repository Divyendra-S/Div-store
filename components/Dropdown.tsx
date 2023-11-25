import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export function Dropdown() {
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
    <div className=" bg-neutral-900  text-sm">
      <div className="flex flex-col w-full gap-y-3">
        {choices.map((item: any, id:number) => (
          <div key={id} className=" w-full ">
            <Link className=" w-full  " href={item.link}><ul className="w-full">{item.name}</ul></Link>
          </div>
        ))}
      </div>
    </div>
    // <Select >
    //   <SelectTrigger className="w-full mx-3 text-neutral-300 outline-none border border-neutral-600 bg-neutral-900">
    //     <SelectValue placeholder="Select a fruit" />
    //   </SelectTrigger>
    //   <SelectContent className="text-neutral-300  bg-neutral-900 border border-neutral-600" style={{ pointerEvents: 'auto' }}>
    //     <SelectGroup className="block">
    //       <SelectLabel>Fruits</SelectLabel>
    //       <Link href={`/All`}><SelectItem value="All">All</SelectItem></Link>
    //       <SelectItem value="banana">Banana</SelectItem>
    //       <SelectItem value="blueberry">Blueberry</SelectItem>
    //       <SelectItem value="grapes">Grapes</SelectItem>
    //       <SelectItem value="pineapple">Pineapple</SelectItem>
    //     </SelectGroup>
    //   </SelectContent>
    // </Select>
  );
}
