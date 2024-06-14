// components/EmailWaitlistModal.js
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import close from '@/public/waitlist-close.svg';
import phone from '@/public/waitlist-phone.svg';
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
    <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`fixed inset-0 bg-white bg-opacity-35 transition-opacity duration-500 ${isOpen ? 'opacity-75' : 'opacity-0'}`}></div>
      <div className={`bg-[#F4F3F1] px-3 pt-6 pb-[4rem] md:p-6 rounded-lg shadow-lg z-10 w-[95%]  md:w-[80%] md:pb-8 lg:max-w-[60rem] transform transition-transform duration-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <Image src={close} onClick={handleClose} className='cursor-pointer ml-auto mb-4 md:mb-0'  alt=''/>
        <div className="flex  items-center gap-6 lg:gap-10  lg:w-[80%] lg:mx-auto">
            <Image src={phone}  alt='' className='hidden md:block'/>
            <div className="">
              <h3 className="text-[#252B42] text-center md:text-left md:mb-4 text-[1.2rem] md:text-[30px] font-semibold ">Join our growing Waitlist of restaurants & hotels with a headstart</h3>
              <div className=" flex flex-col-reverse md:flex-col  ">
                {submitted? <p className='text-[#27BD90] font-medium'>Thank you for joining the waitlist!</p>:
                    <form onSubmit={sendEmail}  className="flex h-[50px] flex-col md:flex-row gap-4 md:gap0 ">
                        <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder='Your Email'
                        className=" pl-3 py-3 text-[.8rem] outline-none md:basis-[80%] rounded-[12px] md:rounded-l-[14px]"
                        />
                        <button type="submit" disabled={loading}  className=" bg-[#171717] w-[30%] mx-auto rounded-[12px] md:basis-[20%] text-[.8rem] text-white p-2 md:border-r-0 md:rounded-r-[14px]">
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
                <div className="min-h-[24px]">
                    {message && <p className={`mt-4 text-[14px] font-semibold ${setMessageType==='error'|| !email ?'text-[#F21010] ':'text-[#27BD90]'} `}>{message}</p>}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EmailWaitlistModal;
