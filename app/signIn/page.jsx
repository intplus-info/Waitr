'use client'
import React, { useState } from 'react'
import SignInNav from './SignInNav'
import Link from 'next/link'
import Image from 'next/image'
import errorPage from '@/public/error-page-bg.svg'
import emailjs from '@emailjs/browser';
import ClipLoader from "react-spinners/ClipLoader"
const Page = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const clearMessageAfterDelay = () => {
    setTimeout(() => {
    setMessage('');
    setMessageType('');
    }, 5000); 
  }
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsValidEmail(validateEmail(emailValue));
    setMessage('')
  }
  
  const sendEmail = (e) => {
    
    e.preventDefault()
    setLoading(true)
    const templateParams = {
      from_email: email
    }
    if (!email) {
      setMessageType('error');
      setMessage('Please enter your email address')
      setLoading(false)
      // clearMessageAfterDelay()
    }else{
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_ALERT_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY 
        ).then((response) => {
        setLoading(false)
        setSubmitted(true)
        setEmail('');

        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_CONFIRMATION_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ).then((response) => {
          setLoading(false)
          setMessageType('success');
          setMessage('A confirmation email has been sent!');
          setEmail('');
          
          // clearMessageAfterDelay() 
        }).catch((error) => {
          setLoading(false)
          setMessageType('error');
          setMessage('Something went wrong. Please try again.');
          // clearMessageAfterDelay() 
        });
        //   clearMessageAfterDelay()
        }).catch((err) => {
          setLoading(false)
        setMessageType('error');
        setMessage('Something went wrong. Please try again.');
        clearMessageAfterDelay()
      });
    }
    //service id  template id tj.doyin@gmail.com digbadoyin@gmail.com
   
  };
    
  return (
    <div className="">
      <SignInNav/>
      <div className=' relative h-[100vh] bg-transparent py-[1rem]  ' >
      <div class="absolute inset-0 z-0">
          <Image src={errorPage} alt="Background" className="object-cover w-full h-full"/>
          <div class="absolute inset-0 bg-[#000000] opacity-[83%]"></div>
      </div>
      <div className="relative z-10 text-white  w-[90%] h-[100%] md:w-[70%] lg:max-w-[45%] md:ml-8 lg:ml-12  mx-auto flex flex-col justify-between  ">
        <div className="h-[50%] flex flex-col justify-end gap-12 my-auto ">
          <div className="text-white">
            <h3 className=" mb-4  text-[1.2rem] md:text-[40px] font-semibold ">Join The Waitr </h3>
            <div className="text-[12px] md:text-[18px] mb-4 md:mb-6">
              <p className=''>Join the Waitr waitlist and enjoy: </p>
              <ul className=' list-disc pl-6'>
                <li>3 months FREE access to our cutting-edge menu and order management system.</li>
                <li>A seamless, Scan-to-Order system that elevates your guests&apos; experience.</li>
              </ul>
              <p>
                Don&apos;t miss out on this exclusive opportunity to transform your restaurant or hotel with Waitr.
              </p>
            </div>
            <div className=" flex flex-col-reverse md:flex-col  ">
              {submitted? <p className='text-[#27BD90] font-medium'>Thank you for joining the waitlist!</p>:
                <form onSubmit={sendEmail}  className="flex flex-col gap-2 h-[50px] md:flex-row md:w-[70%] lg:w-[60%]">
                  <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  autocomplete="on"
                  placeholder='Enter your email'
                  className=" pl-3 py-3 text-[14px] font-semibold basis-[85%] outline-none rounded-[5px] text-[#505050]"
                  />
                  <button type="submit" disabled={loading} className={` w-[25%] text-[14px] font-semibold lg:w-[20%] transition-colors duration-300 ${isValidEmail? 'bg-orange text-black':'bg-[#676767] text-[#F7F7F7] '}  text-[.8rem] rounded-[5px] p-2 `}>
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
              }
              <div className=" md:mt-0 min-h-[24px]">
                {message && <p className={`md:mt-2 text-[14px]  font-semibold ${messageType==='error' ?'text-[#F21010] ':'text-[#27BD90]'}  `}>{message}</p>}
              </div>
            </div>
          </div>
          <p className='text-[10px]'>By submitting you&apos;re confirming that you agree with our <Link className='underline' href='terms'>Terms and Conditions.</Link></p>
          
        </div> 
      </div>
      
    </div>
      

    </div>
  )
}

export default Page