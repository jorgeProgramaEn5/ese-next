'use client';
import React from 'react'
import { Carrusel } from '@/src/components/Carrusel';
import { services } from '../const/indice';

export default function SectionCard() {
  return (
    <section>
      <div className='mx-auto max-w-7xl flex flex-col items-center'>
      <h1 className="mb-4 text-3xl font-bold leading-none tracking-tighter text-neutral-600 md:text-6xl lg:text-4xl"> <span className=' text-primary-100'>Nuestros</span><span className=' text-tersary-100'> Servicios</span></h1>
        {/* <div className=' grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-20'>
          {
            services.map( item => (
              <Card key={item.id} image={item.image} title={item.title} link={item.link}/>
            ))
          }
        </div> */}
          <div className='flex w-full min-h-[390px]'>
            <Carrusel/>
          </div>
      </div>

        
    </section>
  )
}
