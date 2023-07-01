import Image from 'next/image'
import Navbar from '@/src/components/Navbar' 
import Hero from '@/src/components/Hero' 
import SectionCard from '@/src/components/SectionCard' 
import Contact from '@/src/components/Contact' 
import Skills from '@/src/components/Skills' 
import Footer from '@/src/components/Footer' 

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero/>
      <SectionCard/>
      <Contact/>
      <Skills/>
      <Footer/>
    </main>
  )
}
