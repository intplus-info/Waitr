import React from 'react'
import logo from '@/public/logo.svg'
import errorPage from '@/public/error-page-bg.svg'
import Image from 'next/image'
import Link from 'next/link'
const notFound = () => {
  return (
    <div className=' relative  bg-transparent h-[100dvh] py-[1rem]  ' >
      <div class="absolute inset-0 z-0">
            <Image src={errorPage} alt="Background" className="object-cover w-full h-full"/>
            <div class="absolute inset-0 bg-[#000000] opacity-[83%]"></div>
          </div>
      <div className="relative z-10 text-white  w-[90%] h-[100%]  mx-auto flex flex-col justify-between  ">
        <Image className='self-start'  src={logo} alt="" />
        <div className="flex flex-col  gap-5 z-[1000] justify-center items-center text-white">
          <h1 className='text-[6rem] font-extrabold'>404</h1>
          <p className='text-lg text-center'>Our team is working hard to resolve the issue. </p>
          <Link className=' register-hover  bg-orange text-white rounded-xl px-6 py-4' href='/'>Return To Homepage</Link>
        </div>
        <p className='self-start  text-white font-medium'>Copyrights Int+  | All Rights Reserved</p>
        
      </div>
      
    </div>
  )
}

export default notFound