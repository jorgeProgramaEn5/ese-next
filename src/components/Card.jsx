'use client';
import { Card } from 'flowbite-react';
// import image1 from '@/src/assets/image1.jpg'
import Image from 'next/image'

export default function CardWithDecorativeImage({title, image}) {
  return (
    <Card className=' mx-4 sm:mx-2'>
      <div className='h-full'>
        <Image alt="electric" src={image} className='top-0'/>
        <h5 className=" min-h-[120px] md:min-h-[176px] lg:min-h-[120px] text-xl font-bold tracking-tight text-tersary-100 dark:text-white pt-2">
          {title}
        </h5>
      </div>
    </Card>
  )
}


