import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


export default function Search() {
  return (
    <form  className=' max-w-[550px] w-full lg:w-[550px] mt-5 relative '>
        <input
        type="text"
        name="search"
        placeholder="Search for products..."
        className=' w-full bg-transparent border outline-none px-4 py-2 rounded-lg text-white border-neutral-800 placeholder:text-neutral-400 text-sm'
        />
        <div><MagnifyingGlassIcon className=' right-0 h-4 text-white absolute cursor-pointer top-0 flex items-center mt-3 mr-3'/></div>
    </form>
  )
}
