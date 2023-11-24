import Image from 'next/image'
import ThreeGridItems from '@/components/grid/three-grid'
import Carousel from '@/components/carousel'


export default async function Home() {
 
 
  return (
   <div className=' bg-neutral-900 min-h-screen'>
    <ThreeGridItems/>
    <Carousel/>
   </div>
  )
}
