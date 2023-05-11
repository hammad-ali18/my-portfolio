'use client'
import React from 'react'
import { useRef } from 'react';

import Wrapper from '../shared/Wrapper'


import { RevealList } from 'next-reveal'


const About = () => {
    
  return (
   <section id='About'>
    <Wrapper>
        <div>
            {/* about */}
              <RevealList interval={100} delay={100} origin='top' duration={1000} distance='300px' reset={true}>
            <div className='my-10 md:mx-40'> 
            
           <div className='flex flex-col justify-center  items-center'>
          <h1 className=' text-4xl   tracking-tight font-extrabold text-white mb-4 border-b-4 border-primary'>About</h1>
          </div>
          <p className='text-lg  text-left pl-5 text-white md:text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maiores, corporis illum eum dolor voluptatum nulla quisquam commodi odio laborum eligendi accusamus rem. Ad architecto dolorem libero fugiat, fuga deserunt rerum ea, consectetur, facilis reiciendis eum quasi! Itaque quo non id nisi dolorum doloremque sequi excepturi aliquam illum dolores commodi cum perferendis libero ipsum, alias dicta rerum, nemo in obcaecati. Eius quos a ipsum, officia veritatis cum! Non nam distinctio id ipsam beatae eum molestiae, ullam enim quae corporis, sunt excepturi! Cupiditate nemo quasi, eveniet fuga a molestiae aspernatur? Odit ea voluptate in impedit delectus eum dignissimos deserunt similique ducimus.</p>
            </div>
            </RevealList>
            {/* yrs of experience, project and companies wordked with */}
            <div className='flex justify-center items-center md:space-x-20  my-8'> 
              <RevealList interval={100} delay={100} origin='left' duration={1000} distance='300px' reset={true}>
             <div className='border-r-2 p-4 border-slate-800 '>
                <h2 className=' text-3xl font-extrabold text-primary text-center'>1+</h2>
                <p className='text-[14px] mt-2  text-white text-center'>Years of Experties</p>
             </div>
             </RevealList>
             <div className='border-r-2 p-4 border-slate-800'>
                 <h2 className=' text-3xl font-extrabold text-primary text-center '>2+</h2>
                <p className='text-[14px]  mt-2 text-white text-center'>Projects Completed</p>
             </div>
               <RevealList interval={100} delay={100} origin='right' duration={1000} distance='300px' reset={true}>
             <div className=''>
                 <h2 className=' text-3xl font-extrabold text-primary text-center '>2+</h2>
                <p  className='text-[14px] mt-2  text-white text-center'>Worked with Companies</p>
                </div> 
                  </RevealList>
          </div>
          
           {/* fullname,email,twitter,phone */}

             {/* Services */}

            
        </div>
    </Wrapper>
   </section>
  )
}

export default About
