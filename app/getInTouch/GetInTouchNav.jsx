'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import close from '@/public/close.svg';
import mobileMenu from '@/public/mobile-menu.svg';
import Link from 'next/link';

const SignInNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenu = () => setIsOpen(!isOpen);
  const closeMenuOnResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 50);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    window.addEventListener('resize', closeMenuOnResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <header className={`overscroll-none z-[1000] fixed top-0 w-full   ${isScrolled ? 'md:bg-black ' : 'bg-transparent'} transition-colors duration-500`}>
      <div className='md:px-7 lg:px-12  md:py-[20px]  top-0 w-full  py-3.5 px-3 mx-uto gradient  md:bg-none flex justify-between items-center'>
        <div className="flex  justify-between items-center w-full md:basis-[30%]">
          <Image className={`  sm:w-[10%] md:w-[25%] max-w-[15rem] ${isOpen ? ' transition-opacity duration-300 opacity-0' : ''}`} src={logo} alt="Logo" />

          <div className="ml-auto md:hidden relative z-[60]">
            {!isOpen && (
              <Image
                onClick={handleMenu}
                className="cursor-pointer transition-opacity duration-300 opacity-100"
                src={mobileMenu}
                alt="Open menu"
                style={{ display: isOpen ? 'none' : 'block' }}
              />
            )}
            {isOpen && (
              <Image
                onClick={handleMenu}
                width={22}
                className="cursor-pointer transition-opacity duration-300 opacity-100 "
                src={close}
                alt="Close menu"
                style={{ display: isOpen ? 'block' : 'none' }}
              />
            )}
          </div>
        </div>
        <nav className="hidden md:flex gap-8 md:items-center">
          <div className="flex gap-4">
            <Link className="bg-orange text-white border border-orange px-4 py-1.5 rounded-3xl register-hover" href="/">
              Home
            </Link>
            <Link className="border border-orange text-orange px-4 py-2 rounded-3xl sign-in-hover" href="/signIn">Join The Waitlist
            </Link>
          </div>
        </nav>
      </div>


      <div
        className={`fixed inset-0 z-40 bg-black  transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full md:'
        }`}
      >
        <div className={` md:hidden space-y-8 transition-transform duration-500 ease-in-out  ${isOpen ? '  flex relative top-[20dvh] flex-col  gap-16 justify-center items-center  transform translate-x-0 opacity-100 ' : 'transform translate-x-full opacity-0  md:flex md:gap-2 md:basis-[70%] md:max-w-[550px] md:items-center'}`}>

          <Image src={logo} alt="Logo" />
          <div className="flex-grow flex flex-col gap-5 justify-center  md:flex-row md:gap-3 md:justify-end items-center ">
            <Link className=' cursor-pointer text-center w-[70%] mx-auto  bg-orange text-white border px-4 py-1.5 rounded-3xl border-orange md:mx-0 md:w-[30%] register-hover' href="/">Home</Link>
            <Link className='border border-orange text-orange rounded-3xl  py-2 px-4 sign-in-hover' href="/signIn">Join the waitlist</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SignInNav;
