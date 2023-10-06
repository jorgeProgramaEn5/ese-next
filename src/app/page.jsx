import Navbar from '@/src/components/Navbar' 
import Hero from '@/src/components/Hero' 
import SectionCard from '@/src/components/SectionCard' 
import Contact from '@/src/components/Contact' 
import Footer from '@/src/components/Footer' 

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero/>
      <SectionCard/>
      <Contact/>
      <Footer/>
    </main>
  )
}
