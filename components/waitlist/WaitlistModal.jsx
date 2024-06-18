// components/EmailWaitlistModal.js
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import close from '@/public/waitlist-close.svg';
import qrImage from '@/public/waitlist-scan.svg';
import ClipLoader from "react-spinners/ClipLoader"

const EmailWaitlistModal = ({ isOpen, onRequestClose }) => {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [isValidEmail, setIsValidEmail] = useState(false)
    useEffect(() => {
        if (isOpen) {
        setShowModal(true);
        }
    }, [isOpen]);

    const handleClose = () => {
        onRequestClose();
        setTimeout(() => setShowModal(false), 500); // Duration of the fade-out transition
    };
    const clearMessageAfterDelay = () => {
        setTimeout(() => {
        setMessage('');
        setMessageType('');
        }, 5000); // Clear the message after 3 seconds
    };
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
          clearMessageAfterDelay()
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

  if (!showModal) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-[1002] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`fixed inset-0  bg-[#000000CC] bg-opacity-80 transition-opacity duration-500 ${isOpen ? 'opacity-75' : 'opacity-0'}`}></div>
      <div className={`bg-[#F4FF1] relative h-[90dvh] shadow-lg  w-[75%]  md:w-[80%]  lg:max-w-[60rem] transform transition-transform duration-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <Image src={close} onClick={handleClose} className='absolute right-0 cursor-pointer ml-auto '  alt=''/>
        <div className="flex flex-col  items-center  lg:w-[80%] lg:mx-auto">
            <Image src={qrImage} alt='' className=' w-full basis-[50%]'/>
            <div className="bg-white h-[30rem] basis-[70%] py-5 min-h-[18rem]">
              <div className="w-[90%] mx-auto">
                <h3 className="text-black  mb-4 text-[30px] font-semibold ">Join the Waitlist</h3>
                <p className='text-[.9rem] mb-4'>Get an head start for you restaurants & hotels with our Scan-To-Order QR Code system</p>
                <div className=" flex flex-col-reverse md:flex-col  ">
                  {submitted? <p className='text-[#27BD90] font-medium'>Thank you for joining the waitlist!</p>:
                      <form onSubmit={sendEmail}  className="flex h-[50px] flex-col  gap- ">
                          <input
                          type="email"
                          value={email}
                          onChange={handleEmailChange}
                          placeholder='enter your email here'
                          className=" border-b border-b-[#00000040] pb-2 text-[#00000040] font-semibold text-[.8rem] outline-none md:basis-[80%] "
                          />
                          <div className="min-h-[24px]">
                            {message && <p className={`text-[14px] font-semibold ${setMessageType==='error'|| !email ?'text-[#F21010] ':'text-[#27BD90]'} `}>{message}</p>}
                          </div>
                          <button type="submit" disabled={loading}  className=" bg-[#171717] text-[.8rem] text-white min-h-12">
                          {loading ? (
                              <ClipLoader
                                  color="#fff"
                                  height={1}
                                  width={10}
                              />
                              ) : (
                              'Submit'
                              )}
                          </button>
                      </form>
                  }
                  
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EmailWaitlistModal;
