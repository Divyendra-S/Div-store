import Link from "next/link";

export default function Footer() {
  const details = [
    "Home",
    "About",
    "Terms & Conditions",
    "Shipping & Return Policy",
    "Privacy Policy",
    "FAQ",
  ];
  return (
    <div>
    <div className=" lg:px-48  bg-neutral-900">
      <div className=" bg-neutral-600 h-[1px] "></div>
      <div className="flex flex-col pl-8 md:pl-0 sm:flex-row mt-12 md:justify-between">
        <div className="flex flex-col  md:flex-row md:gap-x-12">
        <div className=" mb-4">
        <Link href={`/`} className=" mt-2 ml-2  text-white font-medium text-sm sm:text-sm sm:ml-5 md:mb-0 mb-8">DIV/STORE.</Link>
        </div>
          <div className="flex flex-col" >{details.map((item)=>(<div className='block p-2 text-lg underline-offset-4 text-neutral-400 hover:underline hover:text-neutral-300 md:inline-block md:text-sm'>{item}</div>))}</div>
        </div>
        <div className="md:ml-auto mt-4 sm:mt-0 ml-1 ">
          <a
            className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white"
            aria-label="Deploy on Vercel"
            href="https://vercel.com/templates/next.js/nextjs-commerce"
          >
            <span className="px-3">▲</span>
            <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
            <span className="px-3">Deploy</span>
          </a>
        </div>
      </div>
    </div>
    <div className=" mt-12 bg-neutral-600 h-[1px] "></div>
    <div className=" py-6 text-sm">
        <div className="mx-auto text-neutral-400 flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy;  All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p>Designed in California</p>
          <p className="md:ml-auto">
            <a href="https://vercel.com" className="text-black dark:text-white">
              Crafted by ▲ Vercel
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
