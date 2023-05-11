'use client'
import React from 'react'
import Wrapper from '../shared/Wrapper'
import Button from '../shared/Button'
import Logo from "../../public/hammad_pic-removebg.png"
import Image from 'next/image'
import { RevealWrapper } from  'next-reveal'
import { RevealList } from  'next-reveal'


const HeroSection = () => {
    const content ="Hi,\n I am Muhammad Hammad Ali"
  return (
    <section className=''>
        <Wrapper>
          
            <div className='flex flex-col justify-center items-center md:flex-row py-20 -ml-16 md:ml-8 '>
                <div className='flex-1 w-6/12  md:ml-32  '>
                   <RevealList interval={100} delay={100} origin='top' duration={1000} distance='300px' reset={true}>
                    <h1 className=' text-4xl  text-white font-extrabold whitespace-pre-line py-1'>{content}</h1>
                    <span className= "text-slate-400 text-lg">Front-End Developer</span>
                    <div className='flex my-6 space-x-4'>
                      <div> <Button >Download Resume </Button></div> 
                        <div> <button className=' bg-slate-500 text-lg text-white py-4 px-4 shadow-xl' >More Information </button></div> 

                    </div>
                    </RevealList>
                </div>
                <div className='flex-1 mt-10 -ml-10 w-6/12  h-6/12 justify-center items-center '>
                  <div className="border w-[17rem] h-[19rem] bg-black rounded-full md:w-[34rem] md:h-[38rem] relative z-10   "  >
                    
                    <Image className='absolute right-8 md:right-20 -z-10 md:w-[25rem] md:h-[33rem] w-[13rem] h-[16rem]' src={Logo} alt ="portfolio image" />
                   
                  </div>
                  
                </div>
            </div>

         
        </Wrapper>
    </section>
  )
}

export default HeroSection
