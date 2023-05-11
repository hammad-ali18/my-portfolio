"use client"
import React from 'react'
import Wrapper from '../shared/Wrapper'
import Testimonal1 from "../../public/Testimonal1.png"
import Testimonal2 from "../../public/Testimonal2.png"
import Testimonal3 from "../../public/Testimonal3.png"
import Vector1 from "../../public/Vector.png"
import Vector2 from "../../public/Vector2.png"
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { RevealList, RevealWrapper } from 'next-reveal'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../shared/styles.css"


// import required modules

import { Pagination } from "swiper";
const Testimonial = () => {
  return (
<section>
    <Wrapper>
        <div className=' mt-40 '>
            <div className='flex justify-center items-center'>
                <RevealList interval={100} delay={100} origin='top' duration={1000} distance='300px' reset={true}>
                <h1 className='text-white text-4xl text-center border-b-4  tracking-tight font-extrabold max-w-[280px] border-primary md:ml-20  pb-3 '>TESTIMONALS</h1></RevealList>
            </div>

<div className='flex flex-col md:flex-row gap-x-4  mt-10 '>
<div className='flex-1 mt-10 items-center'>
    <RevealWrapper rotate={{x:  12,y:40,z:0}} origin='left' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>
     <h3 className='text-white  tracking-tight font-extrabold text-2xl text-center max-w-xs mx-10 border-b-2 border-primary md:pt-28'>What Our Client Says</h3></RevealWrapper>
</div>
<RevealWrapper rotate={{x:  12,y:40,z:0}} origin='right' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>

        <div className=' flex-1 my-20 marker h-72 max-w-5xl'>
   <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
    
       
        <SwiperSlide>

               <div className=' relative'>
                <div className='absolute top-0'>
<svg className='' width="2175" height="2175" viewBox="0 0 2175 2175" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_8_162)">
<circle cx="1087.8" cy="1087.47" r="592.969" fill="url(#paint0_linear_8_162)" fill-opacity="0.7"/>
</g>
<defs>
<filter id="filter0_f_8_162" x="0.693359" y="0.363281" width="2174.22" height="2174.22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="247.07" result="effect1_foregroundBlur_8_162"/>
</filter>
<linearGradient id="paint0_linear_8_162" x1="1087.8" y1="494.504" x2="1087.8" y2="1680.44" gradientUnits="userSpaceOnUse">
<stop stop-color="#0891B2"/>
<stop offset="1" stop-color="#A56A85"/>
</linearGradient>
</defs>
</svg>

                </div>
                <div>
                <div className=' text-white text-7xl'><h1>“</h1>
                </div>
                <div className='text-lg text-white text-center font-mono  tracking-tight font-extrabold'><h3>I love this site so much so implly
want to imagine how just beaut for
Everything is great !</h3></div>
            
            <div className='my-5'> 
                <div className='flex space-x-2 justify-center' >
                    <div>
                      <Image className="inline-block max-w-[20px] h-[10px]  mx-auto" src={Vector1}  alt=""/></div>
                      <div>
                     <Image className="inline-block max-w-[20px] h-[10px]  mx-auto" src={Vector1}  alt=""/> </div>
                     <div>
                      <Image className="inline-block max-w-[20px] h-[10px]  mx-auto" src={Vector1}  alt=""/></div>
                      <div>
                     <Image className="inline-block max-w-[20px] h-[10px]  mx-auto" src={Vector2}  alt=""/></div>
                       <div>
                     <Image className="inline-block max-w-[20px] h-[10px]  mx-auto" src={Vector2}  alt=""/></div>
                </div>
            </div>

                <div className='flex flex-row  ml-20 space-x-5 my-5'>
                    <div>
                        
                        <Image className="object-cover rounded-full  inline-block max-w-[80px] h-[50px]  mx-auto ring-2 ring-white" src={Testimonal2}  alt=""/>
                    </div>
                    <div className='flex flex-col my-3 mx-2 mt-4'>
                        <h3 className='text-white text-md font-semibold'>John Phillip</h3>
                        <span className='text-slate-200 text-sm'>Graphic Designer</span>
                    </div>
                </div>
        </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
               <div className='relative'>
                <div className='absolute top-0'>
                    <svg className='' width="2175" height="2175" viewBox="0 0 2175 2175" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_8_162)">
<circle cx="1087.8" cy="1087.47" r="592.969" fill="url(#paint0_linear_8_162)" fill-opacity="0.7"/>
</g>
<defs>
<filter id="filter0_f_8_162" x="0.693359" y="0.363281" width="2174.22" height="2174.22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="247.07" result="effect1_foregroundBlur_8_162"/>
</filter>
<linearGradient id="paint0_linear_8_162" x1="1087.8" y1="494.504" x2="1087.8" y2="1680.44" gradientUnits="userSpaceOnUse">
<stop stop-color="#0891B2"/>
<stop offset="1" stop-color="#A56A85"/>
</linearGradient>
</defs>
</svg>

                </div>
                <div className=' text-white text-7xl'><h1>“</h1>
                </div>
                <div className='text-lg text-white text-center font-mono  tracking-tight font-extrabold'><h3>OHHHH Thanks god !!!! Finally there is someone making it for me to use on my projects.Love ya </h3></div>
            
            <div className='my-5'> 
                <div className='flex space-x-2 justify-center' >
                    <div>
                      <Image className="inline-block max-w-[20px] h-[10px]  mx-auto" src={Vector1}  alt=""/></div>
                      <div>
                     <Image className="inline-block max-w-[20px] h-[10px]  mx-auto" src={Vector1}  alt=""/> </div>
                     <div>
                      <Image className="inline-block max-w-[20px] h-[10px]  mx-auto" src={Vector1}  alt=""/></div>
                      <div>
                     <Image className="inline-block max-w-[20px] h-[10px]  mx-auto" src={Vector1}  alt=""/></div>
                       <div>
                     <Image className="inline-block max-w-[20px] h-[10px]  mx-auto" src={Vector2}  alt=""/></div>
                </div>
            </div>

                <div className='flex flex-row  ml-20 space-x-5 my-5'>
                    <div>
                        
                        <Image className="object-cover rounded-full  inline-block max-w-[80px] h-[50px]  mx-auto ring-2 ring-white" src={Testimonal3}  alt=""/>
                    </div>
                    <div className='flex flex-col my-3 mx-2 mt-4'>
                        <h3 className='text-white text-md font-semibold'>Emily</h3>
                        <span className='text-slate-200 text-sm'>Software Developer</span>
                    </div>
                </div>
            </div>
        </SwiperSlide>
         <SwiperSlide className=''>
            <div className='relative'>
                <div className='absolute top-0 left-0'> 
                    <svg width="2175" height="2175" viewBox="0 0 2175 2175" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_8_162)">
<circle cx="1087.8" cy="1087.47" r="592.969" fill="url(#paint0_linear_8_162)" fill-opacity="0.7"/>
</g>
<defs>
<filter id="filter0_f_8_162" x="0.693359" y="0.363281" width="2174.22" height="2174.22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="247.07" result="effect1_foregroundBlur_8_162"/>
</filter>
<linearGradient id="paint0_linear_8_162" x1="1087.8" y1="494.504" x2="1087.8" y2="1680.44" gradientUnits="userSpaceOnUse">
<stop stop-color="#0891B2"/>
<stop offset="1" stop-color="#A56A85"/>
</linearGradient>
</defs>
</svg>

                </div>
                <div>
                <div className=' text-white text-7xl'><h1>“</h1>
                </div>
                <div className='text-lg text-white text-center font-mono  tracking-tight font-extrabold'><h3>OHHHH Thanks god !!!! Finally there is someone making it for me to use on my projects.Love ya </h3></div>
            
            <div className='my-5'> 
                <div className='flex space-x-2 justify-center' >
                    <div>
                      <Image className="inline-block max-w-[20px] h-[10px]  mx-auto" src={Vector1}  alt=""/></div>
                      <div>
                     <Image className="inline-block max-w-[20px] h-[10px]  mx-auto" src={Vector1}  alt=""/> </div>
                     <div>
                      <Image className="inline-block max-w-[20px] h-[10px]  mx-auto" src={Vector1}  alt=""/></div>
                      <div>
                     <Image className="inline-block max-w-[20px] h-[10px]  mx-auto" src={Vector1}  alt=""/></div>
                       <div>
                     <Image className="inline-block max-w-[20px] h-[10px]  mx-auto" src={Vector2}  alt=""/></div>
                </div>
            </div>

                <div className='flex flex-row  ml-20 space-x-5 my-5'>
                    <div>
                        
                        <Image className="object-cover rounded-full  inline-block max-w-[80px] h-[50px]  mx-auto ring-2 ring-white" src={Testimonal1}  alt=""/>
                    </div>
                    <div className='flex flex-col my-3 mx-2 mt-4'>
                        <h3 className='text-white text-md font-semibold'>Taylor Josh</h3>
                        <span className='text-slate-200 text-sm'>Lead Designer</span>
                    </div>
                </div>
            </div>
</div>
        </SwiperSlide>
       </Swiper>
  </div>
                         </RevealWrapper>
</div>

  </div>
    </Wrapper>
</section>
  )
}

export default Testimonial
