
'use client';

import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '@/src/assets/meter1.svg'
import meter2 from '@/src/assets/meter2.svg'
import meter3 from '@/src/assets/meter3.svg'
import meter4 from '@/src/assets/meter4.svg'




export default function Carrusel() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
  <Carousel responsive={responsive} infinite={true} arrows={false} autoPlay={true} autoPlaySpeed={3000} className='skill-slider'>
    <div className='flex justify-center items-center flex-col'>
        <Image src={meter1} alt="img_meter" className='w-[50%] md:w-[40%]'/>
        <h5>Nextjs/React</h5>
    </div>
    <div className='flex justify-center items-center flex-col'>
        <Image src={meter2} alt="img_meter" className='w-[50%] md:w-[40%]'/>
        <h5>JavaScript</h5>
    </div>
    <div className='flex justify-center items-center flex-col'>
        <Image src={meter3} alt="img_meter" className='w-[50%] md:w-[40%]'/>
        <h5>HTML/CSS/Tailwind</h5>
    </div>
    <div className='flex justify-center items-center flex-col'>
        <Image src={meter4} alt="img_meter" className='w-[50%] md:w-[40%]'/>
        <h5>Enthusiasm for learning</h5>
    </div>
  </Carousel>
  )
}




