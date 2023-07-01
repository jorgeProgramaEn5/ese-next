'use client';

import { Card } from 'flowbite-react';
import image1 from '@/src/assets/image1.jpg'
import Image from 'next/image'

export default function CardWithDecorativeImage() {
  return (
    <Card
    //   imgAlt="Meaningful alt text for an image that is not purely decorative"
    //   imgSrc="@/src/assets/image1.jpg"
    >
        <Image alt="hero" src={image1} className='top-0'/>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
  )
}


