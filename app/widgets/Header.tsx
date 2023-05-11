'use client'

import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import Wrapper from '../shared/Wrapper';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-scroll/modules';
const Header = () => {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   <section className='bg-black sticky top-0 '>
  <Wrapper>
    <div className='flex flex-col md:flex-row md:justify-between md:mx-20 px-5 py-5'>
      <div className=''>
        <h1 className='text-3xl font-bold text-white'>My Portfolio</h1>
      </div>

      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } md:flex md:space-x-6 text-white text-lg md:pt-1 md:max-h-[80vh]`}
      >
        <div className='flex flex-col md:flex-row md:justify-start md:items-start gap-y-12 md:gap-x-10 min-h-[80vh] justify-center items-center md:min-h-[4vh] w-full md:flex'>
          <Link  className=' cursor-pointer  hover:border-b-2  duration-300 ease-in-out hover:text-xl' to="About" spy={true} smooth={true} offset={-40} duration={500}  ><h3>About Me</h3>
        </Link>
         <Link className='cursor-pointer  hover:border-b-2  duration-300 ease-in-out hover:text-xl' to="Service" spy={true} smooth={true} offset={-40} duration={500}><h3>Services</h3>
        </Link>
         
      
             <Link className='cursor-pointer  hover:border-b-2  duration-300 ease-in-out hover:text-xl' to="Contact" spy={true} smooth={true} offset={50} duration={500} ><h3>Contact</h3>
        </Link>
        </div>
      </div>

      <div className='absolute right-5 md:hidden '>
        <button
          className='block text-gray-400 hover:text-gray-100 focus:outline-none focus:text-white'
          onClick={toggleMenu}
        >
          <HiMenu className='w-6 h-6 md:w-10 md:h-10 cursor-pointer' />
        </button>
      </div>
    </div>
  </Wrapper>
</section>

  );
};

export default Header;
