import Image from 'next/image';
import Link from 'next/link';
import { heroPng, conector, panel, bombilla, estacion } from '../assets/indice'

export default function Hero() {
  return (
    <section>
      <div className="px-4 py-5 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div className="relative w-full max-w-lg p-5">
                {/* shadown */}
                <div className="z-[-1] absolute top-[100px] rounded-full md:bg-primary-200 -left-4 w-52 h-52 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute rounded-full md:bg-secundary-200 -bottom-[30px] right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div> 
                {/* target-color   */}
                <div className="relative bg-white">
                  <div className="z-[5] absolute w-[100%] h-[100%] bg-primary-100 bg-opacity-[0.85] rounded-[30px] "></div>
                  <div className="z-[4] absolute w-[95%] h-[95%] bg-secundary-200 bg-opacity-90 rounded-[30px] rotate-[20deg] "></div>
                  <div className="z-[3] absolute w-[100%] h-[100%] bg-tersary-400 rounded-[50px] rotate-[-15deg] "></div>
                  <div className="relative z-[10]">
                    <Image className="z-[10] object-cover object-center mx-auto rounded-[30px] opacity-[0.9] shadow-2xl" alt="hero" src={heroPng}/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* div title */}
          <div className="flex flex-col items-start mt-12 mb-5 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <Link href={`https://wa.me/+5359106524?text=Hola%20Jorge!%20Necesitamos%20de%20tus%20servicios`} className=' pb-4'>
              <span className="text-xs font-bold tracking-widest text-secundary-100 uppercase"> Contáctenos 
              </span>
            </Link>
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl"> <span className=' text-primary-100'>Estrada</span> <br/><span className=' text-tersary-100'> Soluciones Electricas.</span>
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
              {`"Transformando la energía en soluciones sostenibles. En Estrada Soluciones Eléctricas, nos enorgullece potenciar tu hogar o negocio con soluciones eléctricas confiables y eficientes. Descubre cómo podemos iluminar tu vida y ayudarte a construir un futuro energético más sustentable"`}
            </p>
            <div className="flex justify-around flex-wrap w-full mt-2 -mx-4 text-left">
              <div className="w-1/5 p-2 mt-4 sm:w-1/6">
                    <Image src={conector} alt='logo'/>
              </div>
              <div className="w-1/5 p-2 mt-4 sm:w-1/6">
                    <Image src={panel} alt='logo'/>
              </div>
              <div className="w-1/5 p-2 mt-4 sm:w-1/6">
                    <Image src={bombilla} alt='logo'/>
              </div>
              <div className="w-1/5 p-2 mt-4 sm:w-1/6">
                    <Image src={estacion} alt='logo'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
