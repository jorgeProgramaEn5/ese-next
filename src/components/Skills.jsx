import React from 'react'
import Carrusel from '@/src/components/Carrusel' 
import Image from 'next/image'
import meter1 from '@/src/assets/meter1.svg'



export default function 
() {
  return (
    // <section>
    //  <div className="px-4 py-5 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
     
    //  <div>
    //     <h2>Skills</h2>
    //     <p>
    //       I'm a front-end developer with experience in various tools and technologies. 
    //       My specialization lies in Next.js, React, and Figma technologies, although 
    //       I also have experience in other essential tools such as HTML, CSS, JavaScript, 
    //       Git, Bootstrap, and Tailwind.

    //       <span>
    //         I handle these tools with ease and use them to create attractive, responsive, 
    //         and functional websites and applications. As a developer, my goal is always to 
    //         provide high-quality solutions that exceed the expectations of my clients and 
    //         end-users.
    //       </span>
    //     </p>
    //   </div>

    //   <div>
    //     <Carrusel/>
    //   </div>

    //  </div>
    // </section>
    <section>
        <div className="mx-auto flex w-[70%] flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">
            
            {/* <div>
            <Carrusel/>
            </div> */}

            {/* <img className="aspect-video w-80 rounded-t-2xl object-cover object-center" src="/assets/images/placeholders/neon-1.jpg"/> */}
            <div className="p-6">
                <small className="text-gray-900 text-xs">Category</small>
                <h1 className="text-2xl font-medium text-gray-700 pb-2">Your Heading</h1>
                <p className="text text-gray-500 leading-6">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
            </div>
        </div>
</section>
  )
}
