import Image from "next/image";
import React from "react";
import clsx from "clsx";
import Label from "../label";
import { title } from "process";

export default function GridTileImage({
  
  active,
  label,
  ...props
}: {
  
  active?: boolean;
  label?: { title: string; amount: number; position: "bottom" | "center" };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        "w-full h-full border border-neutral-800 hover:border-blue-600 bg-black group flex overflow-hidden rounded-lg justify-center",
        {
          relative: label,
        }
      )}
    >
      {props.src ? (
        <Image
          className=" transition ease-in-out duration-200 group-hover:scale-105 relative h-full w-full"
          {...props}
        />
      ) : null}
      {label ? <Label label={label} /> : null}
    </div>
  );
}
