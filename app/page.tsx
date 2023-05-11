import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from './widgets/HeroSection'
import About from './widgets/About'
import MyContribution from './widgets/MyContribution'
import Testimonial from './widgets/Testimonial'
import MeAt from './widgets/MeAt'
import Services from './widgets/Services'
import Contact from './widgets/Contact'


export default function Home() {
  return (
    <main className=' bg-black opacity-90' >
     {/* Header */}

     {/* HeroSection */}
     <HeroSection />
     {/* About */}
     <About/>
     {/* meAT */}
<MeAt/>
{/* Services */}
<Services/>
     {/* My Contribution */}
     <MyContribution />
     {/* Testimonial */}
     <Testimonial />

     {/* Contact us */}
     <Contact />
    </main>
  )
}
