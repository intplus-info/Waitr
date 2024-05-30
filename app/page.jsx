import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import heroImage from '@/public/hero-image.svg'
import bottomBg from '@/public/bottom-bg.svg'
import scanRestaurant from '@/public/restaurant-qr.svg'
import scanGuest from '@/public/guest-qr.svg'
import verticalLine from '@/public/divider.svg'
import horizontalLine from '@/public/horizontal-line.svg'
import laptop from '@/public/laptop.svg'
import phone from '@/public/phone.svg'
import pot from '@/public/pot.svg'
import rating from '@/public/rating-icon.svg'
import phoneIcon from '@/public/phone-icon.svg'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import chart from '@/public/chart.svg'
import customizeMenu from '@/public/customize-menu.svg'
import instantUpdate from '@/public/instant-update.svg'
import Link from 'next/link'
const Home = () => {
  return (
    <div className="overflow-x-hidden">
       <Navbar />
      <div className='' >
        <section className=' nav h-[50lvh] lg:h-[100dvh] '>
          {/* <Image className='w-full  ' src={heroImage} alt=''/> */}
          <div className="lg:pl-7 lg:gap-5 flex flex-col ml-5 lg:ml-8 gap-5 w-[15rem] lg:w-[40rem] h-[85%] lg:h-[90%]  justify-end">
            <h2 className=' text-2xl font-semibold leading-none text-white mt-auto lg:text-[4rem] '>Improve your customer&apos;s experience with a QR menu</h2>
            <Link href="/notFound" className='button get-started  text-center montserrat register-hover'>Get Started</Link>
          </div>
        </section>
      
        <section >
          <div className="section lg:mt-[6rem] ">
            <h1 className='text-2xl lg:text-5xl text-black font-semibold text-center mb-7 '>Bring your restaurant <span className='block'>business online</span></h1>
            <p className='text-center max-w-[35rem] lg:text-xl lg:max-w-[50rem] mx-auto'>Tap into digital demand and enable contactless & frictionless ordering experiences in your branding in no time. Prove return on investment with digital ordering by experiencing more direct sales, lower margins & increased retention.</p>
          </div>
        </section>
        <section className='my-[5rem] lg:my-[9rem] width-config'>
          <div className="section lg:flex  lg:gap-12 lg:items-center">
            <Image src={customizeMenu} className='lg:max-w-[45%] mb-[2rem] lg:mb-0 img' alt=''/>
            <div className=" ">
              <h2 className=' text-2xl font-semibold lg:text-3xl lg:font-bold mb-[1rem]  text-black'>Customize your Menu</h2>
              <p className='mb-[2rem] lg:text-xl text-black lg:max-w-[50rem]'>Adding your logo and customizing your menu allows your Free Digital Menu not only visually appealing but also a dynamic and ever-evolving representation of your culinary offerings. Your menu becomes an interactive and engaging tool to entice and satisfy your customers.</p>
              <Link href="/get-started" className='button get-started register-hover'>Get Started</Link>
            </div>
          </div>
        </section>
        <section className='my-[3rem] lg:my-[4rem] width-config'>
          <div className="section lg:flex lg:flex-row-reverse  lg:gap-12 lg:items-center">
            <Image src={instantUpdate} className='mb-[2rem] lg:mb-0 img lg:max-w-[45%]' alt=''/>
            <div className="">
              <h2 className='text-2xl font-semibold mb-[1rem] lg:text-3xl lg:font-bold text-black'>Instant Update</h2>
              <p className='mb-[2rem] text-black lg:text-xl lg:max-w-[50rem]'>Edit your Free Digital Menu at anytime. Our dynamic QR Code allows for real-time price changes, menu item availability or substitutions. So your customers will always have access to an accurate and current digital menu.</p>
              <Link href='/get-started' className='button get-started register-hover'>Get Started</Link>
            </div>
          </div>
        </section>
        <div className="lg:flex lg:gap-5 width-config">
          <div className=" lg:basis-[70%]">
            <section className='mt-[6rem] mb-[2rem]'>
              <div className="section ">
                <h1 className='text-2xl text-black font-semibold text-center mb-7 lg:text-3xl lg:font-bold '>How does Waitr work?</h1>
                <p className='text-center text-black  lg:text-xl lg:max-w-[50rem] lg:mx-auto'>Revolutionize your restaurant experience: discover the sase of Writro&apos;s online menu service for ordering and payment</p>
              </div>
            </section>
            <section className=' mt-[5rem] mb-[8rem] '>
              <div className=' pt-5 pl-5 lg:pt-[2rem] section bg-light-pink lg:px-8      text-black rounded-xl restaurant relative'>
                <h2 className='text-2xl font-bold mb-4 '>Restaurants</h2>
                <p className='mb-9  lg:text-lg'>Download the QR code for your restaurant<span className='block'> conveniently from the restaurant portal.</span></p>
                <div className='pb-[5rem] lg:pb-12  lg:flex lg:justify-between '>
                  <div className="flex gap-4 mb-2 lg:flex-col">
                    <div className="images flex flex-col items-center gap-2 lg:flex-row">
                      <Image className='' src={scanRestaurant} alt=''/>
                      <Image className='lg:hidden' src={verticalLine} alt=''/>
                      <Image className='hidden lg:block lg:w-[60%]'  src={horizontalLine} alt=''/>
                    </div>
                    <p className='font-semibold max-w-[14rem] relative top-[-5px]  '>Place the QR code on each table.</p>
                  </div>
                  <div className="flex gap-4 mb-2 lg:flex-col">
                    <div className="images flex flex-col items-center gap-2 lg:flex-row">
                      <Image className='' src={pot} alt=''/>
                      <Image className='lg:hidden' src={verticalLine} alt=''/>
                      <Image className=' hidden lg:block lg:w-[60%]'  src={horizontalLine} alt=''/>
                    </div>
                    <p className='font-semibold max-w-[14rem] relative top-[-5px] '>Receive and prepare orders efficiently.</p>
                  </div>
                  <div className=" flex gap-4 mb-2 lg:flex-col">
                    <div className="images">
                      <Image className='' src={chart} alt=''/>
                    </div>
                    <p className='font-semibold max-w-[14rem] relative top-[-5px] '>Keep track of your business operations.</p>
                  </div>
                </div>
                <div className="absolute lg:top-[-4rem] lg:bottom-[0] bottom-[-5.5rem] right-[1rem]">
                  <Image className='  ' src={laptop} alt=''/>
                </div>
              </div>
            </section>
          </div>
          <section className='mt-[5rem] lg:mt-5 mb-[10rem] '>
            <div className='guests pt-5 pl-5  section bg-light-pink  text-black rounded-xl restaurant relative'>
              <h2 className='text-2xl font-bold mb-4'>Guests</h2>
              <p className='mb-9 max-w-[20rem] lg:text-lg'>Guests can access your QR menu without downloading any app.</p>
              <div className='pb-[5rem]'>
                <div className="flex gap-4 mb-2">
                  <div className="images flex flex-col items-center gap-2">
                    <Image className='' src={scanGuest} alt=''/>
                    <Image className='' src={verticalLine} alt=''/>
                    
                  </div>
                  <p className='font-semibold max-w-[12rem] relative top-[-5px]'>Scan the QR code to place your order</p>
                </div>
                <div className="flex gap-4 mb-2">
                  <div className="images flex flex-col items-center gap-2">
                    <Image className='' src={phoneIcon} alt=''/>
                    <Image className='' src={verticalLine} alt=''/>
                  </div>
                  <p className='font-semibold max-w-[12rem] relative top-[-5px]'>Pay for your order or split the bill</p>
                </div>
                <div className="flex gap-4 mb-2">
                  <div className="images flex flex-col items-center gap-2">
                    <Image className='' src={rating} alt=''/>
                  </div>
                  <p className='font-semibold max-w-[12rem] relative top-[-5px]'>Writing a service review after enjoying your meal.</p>
                </div>
              </div>
              <div className="absolute bottom-[-6.5rem] right-[-1rem]">
                <Image className=' w-[80%] ' src={phone} alt=''/>
              </div>
            </div>
          </section>
        </div>
      
        <section class="">
          <div class="relative w-full  py-14 px-6 mx-auto text-center">
            {/* <!-- Background Image --> */}
            <div class="absolute inset-0 z-0">
              <Image src={bottomBg} alt="Background" className="object-cover w-full h-full filter blur-sm"/>
              <div class="absolute inset-0 bg-orange opacity-50"></div>
            </div>
      
      
            <div class="relative z-10 text-white  w-[90%] h-[100%] max-w-[300px] mx-auto flex flex-col justify-center gap-7  items-center">
              <p class="text-2xl font-bold text-center ">Take your restaurant to the next level with QR menu solution</p>
              <Link className=' rounded-3xl cursor-pointer bg-white text-black py-2 px-4 register-hover hover:text-white hover:border-white' href="/register">Register, it&apos;s FREE</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Home