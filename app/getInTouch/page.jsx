'use client'
import React, { useState } from 'react'
import GetInTouchNav from './GetInTouchNav'
import Link from 'next/link'
import Image from 'next/image'
import emailjs from '@emailjs/browser';
import errorPage from '@/public/error-page-bg.svg'
import ClipLoader from "react-spinners/ClipLoader"

const Page = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [messageType, setMessageType] = useState('')
  const [loading, setLoading] = useState(false)
// Teju Adedoyin tj.doyin@gmail.com trying to reach out for more information about waitr, would love to hear more
  const clearMessageAfterDelay = () => {
    setTimeout(() => {
    setErrorMessage('');
    setMessageType('');
    }, 5000); // Clear the message after 3 seconds
};
const sendEmail = async (e) => {
  e.preventDefault();
  setLoading(true)
  const templateParams = {
    from_email: email,
    from_firstname: firstName,
    from_lastname: lastName,
    message: message
  }
  if (!email || !message) {
    setLoading(false)
    setMessageType('error');
    setErrorMessage('Please enter at least your email address and a message')
    clearMessageAfterDelay()
  }else{
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID2,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID2,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY2
    ).then((response) => {
      setLoading(false)
      setMessageType('success');
      setErrorMessage('Thank you for getting in touch!');
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
      
      // clearMessageAfterDelay() 
    }).catch((error) => {
      setLoading(false)
      setMessageType('error');
      setErrorMessage('Something went wrong. Please try again.');
      // clearMessageAfterDelay() 
    });
  }
};

    
  return (
    <div className="">
      <GetInTouchNav/>
      <div className=' relative h-[100dvh] bg-transparent py-[1rem]  ' >
      <div className="absolute inset-0 z-0">
          <Image src={errorPage} alt="Background" className="object-cover w-full h-full"/>
          <div className="absolute inset-0 bg-[#000000] opacity-[83%]"></div>
      </div>
      <div className="relative z-10 text-white  w-[90%] max-w-[30rem] h-[100%] md:w-[50%] lg:max-w-[45rem] md:ml-8 lg:ml-12  mx-auto flex flex-col justify-between  ">
        <div className=" my-auto w-full ">
          <div className="text-white">
            <h3 className=" mb-4  text-[1.2rem] md:text-[40px] font-semibold ">Get In Touch!</h3>
            <div className="text-[12px] md:text-[18px] mb-6">
              <p>
              Please write us on <span className='text-orange'>info@waitr.co</span>, if you have any question or suggestion. You can also connect with <span className='text-orange'><Link href='https://www.linkedin.com/in/alexanderoamen/' target='_blank'>Alex</Link></span> at LinkedIn.
              </p>
            </div>
            
            <form onSubmit={sendEmail} className=" w-full flex flex-col gap-[10px]">
                <div className=" flex  gap-[10px]">
                    <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='First Name'
                    className=" pl-3 w-1/2 py-3 text-[.8rem] border border-white bg-transparent outline-none rounded-[5px] text-white"
                    />
                    <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Last name'
                    className=" pl-3 w-1/2 py-3 text-[.8rem] border border-white bg-transparent outline-none rounded-[5px] text-white"
                    />
                </div>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                className=" pl-3 py-3 text-[.8rem] border border-white bg-transparent outline-none rounded-[5px] text-white"
                />
                <textarea onChange={(e) => setMessage(e.target.value)} value={message} rows={5} placeholder='Tell us' className='pl-3 py-3 bg-transparent border border-white out outline-none rounded-[5px] text-white resize-none'></textarea>
                <button type="submit" className=" w-[25%] lg:w-[20%] h-[3rem] bg-orange text-[.8rem] rounded-[5px] text-[#111111] p-2 font-semibold ">
                {loading ? (
                  <ClipLoader
                      color="#fff"
                      height={5}
                      width={10}
                  />
                  ) : (
                  'Submit'
                  )}
                </button>
            </form>
            <div className="-4 md:mt-0 min-h-[24px] ">
              <p className={`mt-4 md:mt-2 text-[14px]  font-semibold ${messageType==='error' ?'text-[#F21010] ':'text-[#27BD90]'} `}>{errorMessage}</p>
            </div>
          </div>
          <p className=' mt-3 text-[10px]'>By submitting you&apos;re confirming that you agree with our <Link className='underline' href='terms'>Terms and Conditions.</Link></p>
          
        </div> 
      </div>
      
    </div>
      

    </div>
  )
}

export default Page