'use client'
import React, { useState } from 'react'
import SignInNav from './SignInNav'
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
      <SignInNav/>
      <div className=' relative h-[100dvh] bg-transparent py-[1rem]  ' >
      <div class="absolute inset-0 z-0">
          <Image src={errorPage} alt="Background" className="object-cover w-full h-full"/>
          <div class="absolute inset-0 bg-[#000000] opacity-[83%]"></div>
      </div>
      <div className="relative z-10 text-white  w-[90%] h-[100%] md:w-[70%] lg:max-w-[45%] md:ml-8 lg:ml-12  mx-auto flex flex-col justify-between  ">
        <div className="h-[60%] lg:h-[50%] my-auto ">
          <div className="text-white">
            <h3 className=" mb-4  text-[1.2rem] md:text-[40px] font-semibold ">Join The Waitr Waitlist</h3>
            <div className="text-[12px] md:text-[18px] mb-6">
              <p className=''>Join the Waitr waitlist and enjoy: </p>
              <ul className=' list-disc pl-6'>
                <li>6 months FREE access to our cutting-edge menu and order management system.</li>
                <li>A seamless, Scan-to-Order system that elevates your guests&apos; experience.</li>
              </ul>
              <p>
                Don&apos;t miss out on this exclusive opportunity to transform your restaurant or hotel with Waitr.
              </p>
            </div>
            <form onSubmit={sendEmail}  className="flex flex-col gap-2  md:flex-row md:w-[70%] lg:w-[60%]">
              <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autocomplete="on"
              placeholder='Enter your email'
              className=" pl-3 py-3 text-[.8rem] basis-[85%] outline-none rounded-[5px] text-[#505050]"
              />
              <button type="submit" className=" w-[25%] lg:w-[20%] bg-[#676767] text-[.8rem] rounded-[5px] text-[#F7F7F7] p-2 ">Submit</button>
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