import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function ShoppingCartModal() {
  return (
    <Sheet defaultOpen >
      
      <SheetContent className='bg-black border-l border-neutral-800'>
        <SheetHeader>
          
          
        </SheetHeader>
        
        <SheetFooter>
          <SheetClose className='text-white' >
           <div>close</div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
