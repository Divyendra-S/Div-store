"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";

export default function ShoppingCartModal() {
  const [count, setCount] = useState(0);
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    totalPrice,
    incrementItem,
    decrementItem,
    removeItem,
  } = useShoppingCart();
  console.log(cartCount);
  const UpdateQuantity = (item: any) => {
    let quantity = item.quantity;
    return quantity;
  };

  return (
    <Sheet
      open={shouldDisplayCart}
      onOpenChange={() => {
        handleCartClick();
      }}
    >
      <SheetContent className="bg-black border-l border-neutral-800">
        <SheetHeader></SheetHeader>
        <div className=" flex justify-between items-center">
          <div className="text-white font-medium text-xl">My Cart</div>
          <div
            onClick={() => {
              handleCartClick();
            }}
            className="text-white flex border  border-neutral-700 rounded-xl p-2 "
          >
            <XMarkIcon className=" h-6" />
          </div>
        </div>
        <div className=" min-h-full flex flex-col justify-between">
          <div>
            {cartCount === 0 ? (
              <div>you have no Items</div>
            ) : (
              <div className=" mt-14">
                {Object.values(cartDetails ?? {}).map((item) => (
                  <div key={item.id} className=" mr-4">
                    <div className="mb-4 mt-4">
                      <div className="flex justify-between">
                        <div className=" flex  ">
                          <div className=" relative bg-neutral-900 w-[65px] rounded-lg   border border-neutral-700  ">
                            <div
                              onClick={() => {
                                removeItem(item.id);
                              }}
                              className=" absolute -mt-2 bg-neutral-600 ml-[55px] rounded-full"
                            >
                              <XMarkIcon className="hover:text-accent-3 mx-[1px] h-4 w-4  text-black" />
                            </div>
                            <Image
                              src={item.image as string}
                              alt="cart Image"
                              width={80}
                              height={80}
                              sizes="(min-width: 768px) 33vw, 100vw"
                            />
                          </div>
                          <div className="ml-4 w-[110px] text-white">
                            {item.name}
                          </div>
                        </div>
                        <div className=" text-white text-sm">
                          <div>${item.price}.00 USD</div>
                          <div className=" flex gap-x-3 mt-2 items-center bg-neutral-900 rounded-full p-2">
                            <PlusIcon
                              onClick={() => {
                                incrementItem(item.id);
                              }}
                              className="h-4 w-4 dark:text-neutral-500"
                            />
                            {item.quantity}
                            <MinusIcon
                              onClick={() => {
                                decrementItem(item.id);
                              }}
                              className="h-4 w-4 dark:text-neutral-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-neutral-700 h-[1px]"></div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <div className="flex justify-between mt-4 mb-1 text-white">
              <span className="text-sm text-neutral-400">Taxes</span>
              <span>$0.00</span>
            </div>
            <div className=" bg-neutral-700 h-[1px]"></div>
            <div className="flex justify-between mt-4 mb-1 text-white">
              <span className="text-sm text-neutral-400">Shipping</span>
              <span>$0.00</span>
            </div>
            <div className=" bg-neutral-700 h-[1px]"></div>
            <div className="flex justify-between mt-4 mb-1 text-white">
              <span className="text-sm text-neutral-400">Total</span>
              <span>${totalPrice}.00 USD</span>
            </div>
            <div className=" bg-neutral-700 h-[1px] mb-4"></div>
            <button className="rounded-full mx-5 sm:mx-0  bg-blue-700 cursor-pointer hover:bg-blue-800 text-center text-white w-full p-2 mb-8 ">
              Checkout
            </button>
          </div>
        </div>

        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
