"use client"
import React from 'react'
import Logo from "@/icons/logo.svg";
import PhoneIcon from "@/icons/phoneIcon.svg";
import Image from "next/image";
import EmailIcon from "@/icons/EmailIcon.svg";
import Link from 'next/link';
import SocialMedia from './SocialMedia';
const Footer = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <footer className='footerBackgroud min-h-[700px]'>
            <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 '>
                <div className='flex flex-col justify-center items-center pt-8'>
                    {/* logo account legals subscribe  */}
                    <div className='flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-start mt-16 lg:gap-x-32 border-b-2 border-solid border-gray-300'>
                        {/* contact */}
                        <div className="flex flex-col items-start justify-start min-w-[300px]">
                            <Image alt="logo" src={Logo} width={80} height={80} />
                            <p className='text-white text-[18px] leading-[28px] max-w-[300px] mt-16'>These guys have been absolutely outstanding. When I needed them they came through in a big way! I know that if you buy this theme.</p>
                            <h2 className='mt-16 text-white font-semibold text-[24px] leading-[34px]'>CONTACT INFO</h2>
                            <p className='mt-8 text-white flex gap-2'>
                                <span>
                                    <Image alt="phone" src={PhoneIcon} width={24} height={24} />
                                </span>{" "}+91 1234567891
                            </p>
                            <p className='mt-4 text-white flex gap-2 mb-6'>
                                <span>
                                    <Image alt="email" src={EmailIcon} width={24} height={24} />
                                </span>{" "}munasbas007@gmail.com
                            </p>
                        </div>
                        {/* account */}
                        <div className='flex flex-col items-start justify-start min-w-[300px] mt-16 lg:mt-0'>
                            <h2 className='font-semibold text-white text-[24px] leading-[34px] mt-4'>
                                ACCOUNT
                            </h2>
                            <Link href="/" prefetch={false} className='test-[20px] leading-[28px] text-white mt-16'>Home</Link>
                            <Link href="#" prefetch={false} className='test-[20px] leading-[28px] text-white mt-4'>About us</Link>
                            <Link href="#" prefetch={false} className='test-[20px] leading-[28px] text-white mt-4'>Contact Us</Link>

                        </div>
                        <div className='flex flex-col items-start justify-start min-w-[300px] mt-16 lg:mt-0'>
                            <h2 className='font-semibold text-white text-[24px] leading-[34px] mt-4'>
                                LEGALS
                            </h2>
                            <Link href="#" prefetch={false} className='test-[20px] leading-[28px] text-white mt-16'>Privacy Policy</Link>
                            <Link href="#" prefetch={false} className='test-[20px] leading-[28px] text-white mt-4'>Terms & Condition</Link>

                        </div>
                        <div className='flex flex-col items-start justify-start min-w-[300px] mt-16 lg:mt-0 mb-6'>
                            <h2 className='font-semibold text-white text-[24px] leading-[34px] mt-4'>
                                SUBSCRIBE
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email-address-icon" className=" sr-only">Your Email</label>
                                <div className="relative mt-16">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="email-address-icon" className="lg:w-[305px] lg:h-[70px] rounded-lg focus:ring-[#FFBB15] focus:border-[#FFBB15] block w-full ps-10 p-2.5  outline-none focus:outline-none text-white placeholder:text-white bg-gradient-to-r from-[#6D6461] to-[#463C3B]" placeholder="Enter Email" />
                                </div>
                                <button type='submit' className=' text-white bg-transparent border-2 border-[#FFBB15] rounded-lg mt-16 px-6 py-2 '>
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* social media */}
                    <div className='flex flex-col lg:flex-row justify-center items-center' >
                        <div className='lg:flex-1 flex flex-row gap-2 mt-6 mb-6'>
                            <SocialMedia />
                        </div>
                        <p className='text-white text-center mb-4 lg:absolute lg:right-36'>@2023 For Salone All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer