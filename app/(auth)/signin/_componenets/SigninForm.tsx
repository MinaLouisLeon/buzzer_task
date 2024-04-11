"use client";
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import { signInWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth, db } from "@/firebaseConfig";
import Image from 'next/image';
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";

const SigninForm = () => {
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [confirmationResult, setConfirmationResult] = useState<any>(null);
    const [otpSent, setOtpSent] = useState<boolean>(false);
    const [bothSelected, setBothSelected] = useState<boolean>(false);
    const [otp, setOtp] = useState<string>("");
    const [isLoading,setIsLoading] = useState(false);
    const router = useRouter();
    useEffect(() => {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
            'size': 'invisible',
            'callback': () => { }
        });
    }, [auth])
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (phoneNumber !== "" && email != "") {
            setBothSelected(true);
            setPhoneNumber("");
            setEmail("");
        } else if (phoneNumber != "") {
            handleSignInWithPhoneNumber();
        } else if (email != "") {
            handleSignInWithEmail();
        }
    }
    const handleSignInWithEmail = () => {

    }
    const handleSignInWithPhoneNumber = async () => {
        setIsLoading(true);
        const formattedPhoneNumber = phoneNumber.includes('+') ? phoneNumber : `+2${phoneNumber}`;
        try {
            const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNumber, window.recaptchaVerifier);
            setConfirmationResult(confirmation);
            setOtpSent(true);
            setIsLoading(false);
        } catch (error) {
            console.error(error)
        }
    }
    const handleOtpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            confirmationResult.confirm(otp).then((result: any) => {
                const user = result.user;
                handleCheckUserInfo(user.uid);
                console.log(user)
            })
        } catch (error) {
            console.error(error);
        }
    }
    const handleCheckUserInfo = async (userUid: string) => {
        const docRef = doc(db, "users", userUid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setIsLoading(false);
            router.replace('/');
        } else {
            setIsLoading(false);
            router.replace('/register-user-info');
        }
    }
    return (
        <>
            <div className="relative flex flex-wrap mt-[100px] lg:mt-0 lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg ">
                        <h1 className="text-2xl font-bold sm:text-3xl">{otpSent ? "Enter Login Code" : "Welcome!"}</h1>
                        {otpSent && <p className="mt-4 text-gray-500">Sign in with Email or Phone Number</p>}
                    </div>
                    {otpSent &&
                        <form onSubmit={handleOtpSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                            <div>
                                <label htmlFor="phoneNumber" className="sr-only">Phone Number</label>

                                <div className="relative">
                                    <input
                                        disabled
                                        type="tel"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        value={phoneNumber.substring(0, phoneNumber.length - 3).replaceAll(/[0-9]/g, "*") + phoneNumber.substring(phoneNumber.length - 3)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="sr-only">Phone Number</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Login Code"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button
                                id='sign-in-button'
                                type="submit"
                                className="inline-block rounded-lg px-5 py-3 mt-4 mb-4 text-sm font-medium text-black w-full border-[#FFBB15] border-2"
                                disabled={isLoading}
                            >
                                Next
                            </button>
                        </form>
                    }
                    {!otpSent &&
                        <form onSubmit={onSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>

                                <div className="relative">
                                    <input
                                        type="email"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-4 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <h2 className='text-center text-gray-500' >or</h2>
                            <div>
                                <label htmlFor="phoneNumber" className="sr-only">Phone Number</label>

                                <div className="relative">
                                    <input
                                        type="tel"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter Phone Number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button
                                id='sign-in-button'
                                type="submit"
                                className="inline-block rounded-lg px-5 py-3 mt-4 mb-4 text-sm font-medium text-black w-full border-[#FFBB15] border-2"
                                disabled={isLoading}
                            >
                                Next
                            </button>
                            <div className=" text-center mt-4">
                                <p className="text-sm text-gray-500 ">
                                    Don’t have an Account?
                                    <Link className="text-red-500" href="#">{" "}Register</Link>
                                </p>
                            </div>
                        </form>
                    }

                </div>
                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <Image alt="login" src={otpSent ? "/pana.png" : "/login.png"} fill objectFit='cover' />
                </div>
            </div>
        </>
    )
}

export default SigninForm