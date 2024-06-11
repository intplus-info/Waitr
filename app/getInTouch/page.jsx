'use client'
import React, { useState } from 'react'
import GetInTouchNav from './GetInTouchNav'
import Link from 'next/link'
import Image from 'next/image'
import errorPage from '@/public/error-page-bg.svg'

const page = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('')

  const clearMessageAfterDelay = () => {
    setTimeout(() => {
    setMessage('');
    setMessageType('');
    }, 5000); // Clear the message after 3 seconds
};
const sendEmail = (e) => {
    e.preventDefault();
    if (!email) {
      setMessageType('error');
      setMessage('Please enter your email address')
      clearMessageAfterDelay()
    }
    
    emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        { email },
        'YOUR_USER_ID'
        ).then((response) => {
        setMessage('Thank you for joining the waitlist!');
        setMessageType('success')
        setEmail('');
        //   clearMessageAfterDelay()
        }).catch((err) => {
        setMessageType('error');
        setMessage('Something went wrong. Please try again.');
        clearMessageAfterDelay()
    });
};
    
  return (
    <div className="">
      <GetInTouchNav/>
      <div className=' relative h-[100dvh] bg-transparent py-[1rem]  ' >
      <div class="absolute inset-0 z-0">
          <Image src={errorPage} alt="Background" className="object-cover w-full h-full"/>
          <div class="absolute inset-0 bg-[#000000] opacity-[83%]"></div>
      </div>
      <div className="relative z-10 text-white  w-[90%] max-w-[30rem] h-[100%] md:w-[50%] lg:max-w-[45rem] md:ml-8 lg:ml-12  mx-auto flex flex-col justify-between  ">
        <div className=" my-auto w-full ">
          <div className="text-white">
            <h3 className=" mb-4  text-[1.2rem] md:text-[40px] font-semibold ">Get In Touch!</h3>
            <div className="text-[12px] md:text-[18px] mb-6">
              <p>
              Please write us on <span className='text-orange'>info@waitr.co</span>, if you have any question or suggestion. You can also connect with <span className='text-orange'>Alexander Oamen</span> at LinkedIn.
              </p>
            </div>
            <form onSubmit={sendEmail}  className=" w-full flex flex-col gap-[10px]">
                <div className=" flex  gap-[10px]">
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autocomplete="on"
                    placeholder='First Name'
                    className=" pl-3 w-1/2 py-3 text-[.8rem] border border-white bg-transparent outline-none rounded-[5px] text-[#505050]"
                    />
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autocomplete="on"
                    placeholder='Last name'
                    className=" pl-3 w-1/2 py-3 text-[.8rem] border border-white bg-transparent outline-none rounded-[5px] text-[#505050]"
                    />
                </div>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autocomplete="on"
                placeholder='Enter your email'
                className=" pl-3 py-3 text-[.8rem] border border-white bg-transparent outline-none rounded-[5px] text-[#505050]"
                />
                <textarea name="" id="" rows={5} placeholder='Tell us' className='pl-3 py-3 bg-transparent border border-white out outline-none rounded-[5px] resize-none'></textarea>
                <button type="submit" className=" w-[25%] lg:w-[20%] bg-orange text-[.8rem] rounded-[5px] text-[#111111] p-2 font-semibold ">Submit</button>
            </form>
            <div className="mt-4 md:mt-0 min-h-[24px] ">
              {message && <p className={`mt-4 md:mt-2 text-[14px]  font-semibold ${setMessageType==='error'|| !email ?'text-[#F21010] ':'text-[#27BD90]'} `}>{message}</p>}
            </div>
          </div>
          <p className='text-[10px]'>By submitting you&apos;re confirming that you agree with our <Link className='underline' href='terms'>Terms and Conditions.</Link></p>
          
        </div> 
      </div>
      
    </div>
      

    </div>
  )
}

export default page