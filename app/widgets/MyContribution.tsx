"use client"
import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import panaweb1 from "../../public/PanaChakra.png"
import panaweb2 from "../../public/PanaTailwind.png"
import Link from 'next/link'
import { RevealList, RevealWrapper } from 'next-reveal'

const MyContribution = () => {
  return (
    <section>
        <Wrapper>
    <div className=' my-40'>
            <RevealWrapper rotate={{x:  12,y:40,z:0}} origin='right' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>
      <div className='flex justify-center items-center  my-16'>
        <h1 className='text-4xl text-white  tracking-tight font-extrabold border-b-4 border-b-primary pb-2'>MY LEARNINGS</h1>
      </div>
      </RevealWrapper>
      {/* My Skills */}
      <RevealWrapper rotate={{x:  12,y:40,z:0}} origin='left' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>
      <div className='flex flex-col md:flex-row  justify-center items-center md:gap-x-52 bg-[#212121]  bg-opacity-90 py-10 mx-10 shadow-2xl '>
        <div className='my-10 '>
          <h1 className='text-slate-600  text-6xl  tracking-tight font-extrabold'>50%</h1> 
          <input type="range" min="0" max="100" value="50" className="range range-info" />
          <h2 className='text-primary text-2xl text-center'>JavaScript</h2>
         
        </div>
        <div className='my-10'>
          <h1 className='text-slate-600  text-6xl  tracking-tight font-extrabold'>30%</h1> 
          <input type="range" min="0" max="100" value="30" className="range range-info" />
          <h2 className='text-primary text-2xl text-center'>HTML</h2>
         
        </div><div className='my-10'>
          <h1 className='text-slate-600  text-6xl  tracking-tight font-extrabold'>10%</h1> 
          <input type="range" min="0" max="100" value="10" className="range range-info" />
          <h2 className='text-primary text-2xl text-center'>CSS</h2>
         
        </div><div className='my-10'>
          <h1 className='text-slate-600  text-6xl  tracking-tight font-extrabold'>10%</h1> 
          <input type="range" min="0" max="100" value="10" className="range range-info" />
          <h2 className='text-primary text-2xl text-center'>TypeScript</h2>
         
        </div>

      </div>
     </RevealWrapper>
    </div>
   
       {/* My Projects */}
     
            <div className='my-20 mx-8'>
               
            <div className='my-10 md:mx-40'> 
          <RevealList interval={100} delay={100} origin='top' duration={1000} distance='300px' reset={true}>
                 <h1 className=' flex justify-center items-center text-4xl text-white  tracking-tight font-extrabold border-b-4 border-primary text-center md:mx-[540px] pb-2'>MY CONTRIBUTION</h1>
                </RevealList>

<div className='flex   justify-center items-center my-16 '>
                <div className=" grid  grid-cols-1   md:grid-cols-2 md:gap-x-20  gap-y-10">
               {/* project images and content */}

               <Link href="https://panaversedao-hq1l.vercel.app/">
               <RevealList interval={100} delay={100} origin='left' duration={1000} distance='300px' reset={true}>
              <div  className='  max-w-md  bg-[#212121]  bg-opacity-90 rounded-2xl shadow-2xl  h-[450px] '>
                
                <div>
                   <Image className='rounded-2xl w-full h-full object-cover' src={panaweb1} alt='panachakra image'  width={300} height={100}></Image>
                </div>
               
                <div className='my-10'>
                    <h3 className='text-white text-center text-xl'>My First Panaverse website made with using ChakraUI Library</h3>
                </div>
   
                <div className='flex justify-center items-center'>
                  <Link href=""><button className='bg-primary rounded-md mb-4 py-2 px-2 text-white text-lg  shadow-2xl '>Visit Us</button></Link>
                </div>
                </div>   
                  </RevealList>

</Link>
          

<Link href="https://panaversedao-hq1l.vercel.app/">
                <RevealList interval={100} delay={100} origin='right' duration={1000} distance='300px' reset={true}>
              <div className=' max-w-md  bg-[#212121]  bg-opacity-90 rounded-2xl shadow-2xl h-[450px] '>

                <div className=''>
                   <Image className='rounded-2xl w-full h-full  object-contain ' src={panaweb2} alt='panachakra image'  width={300} height={300}></Image>
                </div>
               
                <div className='my-10 mt-16'>
                    <h3 className='text-white text-center text-xl'>My First Panaverse website made with using Tailwind Css Library</h3>
                </div>
   
                <div className='flex justify-center items-center'>
                  <Link href=""><button className='bg-primary rounded-md mb-4 py-2 px-2 text-white text-lg  shadow-2xl '>Visit Us</button></Link>
                </div>
                </div>
                </RevealList>
              </Link>
             
            
            
            </div>
</div>

           </div> 
            </div>
</Wrapper>
    </section>
  )
}

export default MyContribution
