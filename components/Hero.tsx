import React from 'react'
import Header from './Header'
import Image from "next/image"
import HomeSearch from './HomeSearch'
const Hero = () => {
    return (
        <section
            className="relative bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat"
        >
            <Header />

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <div className='w-[250px] h-[150px] lg:w-[600px] lg:h-[300px] relative'>
                    <Image  alt="hero" src='/heroC.png' fill/>
                    </div>

                    <p className="mt-4  max-w-[300px] lg:max-w-lg sm:text-xl/relaxed text-white">
                    Welcome to our exquisite salon, where beauty meets expertise. Step into a world of luxury and indulgence, where we are dedicated to enhancing your natural beauty and leaving you feeling radiant.
                    </p>

                    <div className="mt-8">
                        <HomeSearch />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero