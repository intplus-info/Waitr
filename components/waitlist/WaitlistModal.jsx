// components/EmailWaitlistModal.js
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import close from '@/public/waitlist-close.svg';
import phone from '@/public/waitlist-phone.svg';
const EmailWaitlistModal = ({ isOpen, onRequestClose }) => {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('')

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
    const sendEmail = (e) => {
        e.preventDefault();
        if (!email) setMessage('Please enter your email address')
        
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

  if (!showModal) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`fixed inset-0 bg-white bg-opacity-35 transition-opacity duration-500 ${isOpen ? 'opacity-75' : 'opacity-0'}`}></div>
      <div className={`bg-[#F4F3F1] p-6 rounded-lg shadow-lg z-10 w-[80%] pb-8 lg:max-w-[60rem] transform transition-transform duration-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <Image src={close} onClick={handleClose} className='cursor-pointer ml-auto'  alt=''/>
            <div className="flex items-center gap-6 lg:gap-10 lg:w-[80%] lg:mx-auto">
                <Image src={phone}  alt=''/>
                <div className="">
                    <h3 className="text-[#252B42] mb-4 text-[1.2rem] md:text-[30px] font-semibold ">Join our growing Waitlist of restaurants & hotels with a headstart</h3>
                    <form onSubmit={sendEmail}  className="flex h-[50px] ">

                        <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        // autoComplete='email'
                        autocomplete="on"
                        placeholder='Your Email'
                        className=" pl-3 py-3 text-[.8rem] outline-none basis-[80%] rounded-l-[14px]"
                        />

                        <button type="submit" className=" bg-[#171717] basis-[20%] text-[.8rem] text-white p-2 border-r-0 rounded-r-[14px]">Submit</button>
                    </form>
                    <div className="mt-4 min-h-[24px]">
                        {message && <p className={`mt-4 text-[14px] font-semibold ${setMessageType==='error'|| !email ?'text-[#F21010] ':'text-[#27BD90]'} `}>{message}</p>}
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default EmailWaitlistModal;
