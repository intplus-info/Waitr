import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import facebook from '@/public/facebook-icon.svg'
import linkedIn from '@/public/linkedIn-icon.svg'
import twitter from '@/public/twitter-icon.svg'
import instagram from '@/public/instagram-icon.svg'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='width-config'>
      <div className="section  lg:w-full  text-black">
        <div className="mb-[2rem] md:flex md:justify-between md:basis-[30%]">
          <Image className='mb-4' src={logo} alt=''/>
          <div className=" flex justify-between items-center md:basis-[58%]">
            <p className='text-[13px]'>Call: (+234) 703 957 4358</p>
            <div className="socials flex gap-2">
              <Image className='cursor-pointer' src={facebook} alt=''/>
              <Image className='cursor-pointer' src={linkedIn} alt=''/>
              <Image className='cursor-pointer' src={twitter} alt=''/>
              <Image className='cursor-pointer' src={instagram} alt=''/>
            </div>
          </div>
        </div>
        <div className="horizontalLine my-6 bg-black h-[1px]"></div>
        <div className=" flex flex-col-reverse gap-3 items-center md:flex-row md:justify-center">
          <p className='text-[13px]'>2023 Waitr. All rights reserved.</p>
          <div className="width-[100%] links flex justify-between items-center gap-3">
            <Link className='footer-links' href="/privacy-policy">Privacy Policy</Link>
            <Link className='footer-links' href="/terms">Terms of Service</Link>
            <Link className='footer-links' href="/cookies-settings">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer