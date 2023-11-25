"use client";
import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
export default function DropdownButton() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname()
  console.log(pathName);
  return (
    <div className="relative w-full">
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className=" w-full cursor-pointer rounded border border-neutral-600 flex justify-between items-center p-2 text-white "
      >
        <div className="text-sm">{pathName.slice(1)}</div>
        <ChevronDownIcon className="h-4" />
      </div>
      {open && (
        <div className="p-5 mr-5 border border-neutral-600 rounded absolute z-50 sm:hidden  text-neutral-300 bg-neutral-900 mt-2 mb-4 w-full">
          <Dropdown />
        </div>
      )}
    </div>
  );
}
