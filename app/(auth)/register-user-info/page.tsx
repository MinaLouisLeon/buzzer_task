"use client";
import { FormEvent, useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/firebaseConfig";
import Image from "next/image";
import Logo from "@/icons/logoB.svg"
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerFormType } from '@/types';
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from 'next/navigation';
const page = () => {
    const router = useRouter();
    const [userUid, setUserUid] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    console.log(email)
    const { register, handleSubmit } = useForm<registerFormType>();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                if (user.phoneNumber) {
                    setPhoneNumber(user.phoneNumber);
                }
                if (user.email) {
                    setEmail(user.email);
                    console.log(user.email)
                }
                console.log(user)
                setUserUid(uid);
                // ...
            } else {
                router.refresh();
                router.push('/');
            }
        });
    }, [auth])

    const onSubmit: SubmitHandler<registerFormType> = async (data) => {
        setIsLoading(true);
        try {
            await setDoc(doc(db, "users", userUid), data);
            router.push('/register-submit');
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section className='relative flex flex-col'>
            <div className='fixed top-5 left-5 lg:left-28 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]'>
                <Image alt="logo" src={Logo} fill />
            </div>
            <div className="relative flex flex-wrap mt-[100px] lg:mt-0 lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg ">
                        <h1 className="text-2xl font-bold sm:text-3xl">Register As Cafe/Restaurant</h1>
                        <p className="mt-4 text-gray-500">Register Now!</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        <div>
                            <label htmlFor="type" className="sr-only">Type</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Type"
                                    required
                                    {...register("type")}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="fullname" className="sr-only">Full Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Full Name"
                                    required
                                    {...register("fullName")}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Email"
                                    required
                                    {...register("email")}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone-number" className="sr-only">Phone Number</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Phone Number"
                                    required
                                    {...register("phoneNumber")}
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Full Name</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Password"
                                    required
                                    {...register("password")}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="inline-block rounded-lg px-5 py-3 mt-4 mb-4 text-sm font-medium text-black w-full border-[#FFBB15] border-2"
                            disabled={isLoading}
                        >
                            Next
                        </button>
                    </form>

                </div>
                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <Image alt="login" src="/register.png" fill objectFit='cover' />
                </div>
            </div>
        </section>
    )
}

export default page