'use client';
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { services } from '../const/indice';
import Card from '@/src/components/Card';



export function Carrusel() {

    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
        <Carousel responsive={responsive} infinite={true} arrows={true} autoPlay={true} autoPlaySpeed={3000} className='skill-slider w-full'>
            {
                services.map( item => (
                <Card key={item.id} image={item.image} title={item.title} link={item.link}/>
                ))
            }
        </Carousel>
    )
  }  