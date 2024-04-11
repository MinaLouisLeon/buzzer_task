import Image from "next/image";
import Hero from "@/components/Hero";
import HeaderUnderline from "@/icons/headerUnderline.svg";
import FoodMenuIcon from "@/icons/foodMenuIcon.svg";
import FoodIcon from "@/icons/foodIcon.svg";
import WifiIcon from "@/icons/wifiIcon.svg";
import OffersIcon from "@/icons/offersIcon.svg";
import { ResturantData } from "@/Constants";
import Resutrant from "@/components/Resutrant";
import Gallary from "@/components/Gallary";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Hero />

      <section className="relative mx-auto max-w-screen-xl flex flex-col items-center justify-center lg:flex-row">
        <div className="relative w-[300px] h-[300px] mt-2 lg:w-[1400px] lg:h-[550px] lg:mt-0">
          <Image alt="Welcome TO Our Luxury Restaurant" src="/Frame1.png" fill />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="my-4 font-semibold leading-[40px] text-[35px]">Welcome TO Our <br /> Luxury Restaurant</h2>
          <Image alt="underline" src={HeaderUnderline} width={210} height={22} />
          <p className="text-center text-gray-400 mx-6 my-2 lg:mt-8">Welcome to our exquisite salon, where beauty meets expertise. Step into a world of luxury and indulgence, where we are dedicated to enhancing your natural beauty and leaving you feeling radiant.</p>
          <button className="bg-white border-[#FFBB15] rounded-md border-2 border-solid px-4 py-2 mt-2 lg:mt-8">View All</button>
        </div>
      </section>

      <section className="relative mx-auto max-w-screen-xl flex flex-col justify-center items-center">
        <h2 className="my-4 mt-8 font-semibold leading-[40px] text-[35px]">Our Restaurants</h2>
        <Image alt="underline" src={HeaderUnderline} width={210} height={22} />
        <div className="grid gap-4 mt-4 lg:mt-8 grid-cols-1 lg:grid-cols-4 lg:gap-12">
          {ResturantData.map((item) => {
            return (
              <Resutrant ResturantData={item} key={item.id} />
            )
          })}
        </div>
        <button className="bg-white border-[#FFBB15] rounded-md border-2 border-solid px-4 py-2 mt-2 lg:mt-8">View All</button>
      </section>

      <section className="relative flex flex-col justify-center items-center mt-8">

        <div className="hidden lg:block">
          <div className="absolute left-0 top-10 w-[200px] h-[450px]">
            <Image alt="burger" src={'/burgerL.png'} fill />
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="absolute right-0 top-10 w-[200px] h-[450px]">
            <Image alt="burger" src={'/burgerR.png'} fill />
          </div>
        </div>
        <h2 className="my-4 mt-8 font-semibold leading-[40px] text-[35px]">Our Restaurants</h2>
        <Image alt="underline" src={HeaderUnderline} width={210} height={22} />
        <div className="flex flex-col justify-center items-center mt-8 gap-8 lg:flex-row">
          <div className="flex flex-col justify-center items-center border-2 border-gray-300 rounded-md p-8 w-[300px] h-[300px] gap-8 cursor-pointer">
            <div className="relative w-[100px] h-[100px]">
              <Image alt="special menu" src={FoodMenuIcon} fill />
            </div>
            <h2 className="font-semibold text-[24px]">Special Menu</h2>
          </div>
          <div className="flex flex-col justify-center items-center border-2 border-gray-300 rounded-md p-8 w-[300px] h-[300px] gap-8 cursor-pointer">
            <div className="relative w-[100px] h-[100px]">
              <Image alt="special menu" src={FoodIcon} fill />
            </div>
            <h2 className="font-semibold text-[24px]">Tasty Food</h2>
          </div>
          <div className="flex flex-col justify-center items-center border-2 border-gray-300 rounded-md p-8 w-[300px] h-[300px] gap-8 cursor-pointer">
            <div className="relative w-[100px] h-[100px]">
              <Image alt="special menu" src={WifiIcon} fill />
            </div>
            <h2 className="font-semibold text-[24px]">Free Wi-Fi</h2>
          </div>
          <div className="flex flex-col justify-center items-center border-2 border-gray-300 rounded-md p-8 w-[300px] h-[300px] gap-8 cursor-pointer">
            <div className="relative w-[100px] h-[100px]">
              <Image alt="special menu" src={OffersIcon} fill />
            </div>
            <h2 className="font-semibold text-[24px]">Special Offer</h2>
          </div>
        </div>

      </section>

      <section className="relative mx-auto max-w-screen-xl flex flex-col justify-center items-center mt-8">
        <h2 className="my-4 mt-8 font-semibold leading-[40px] text-[35px]">Our Restaurants</h2>
        <Image alt="underline" src={HeaderUnderline} width={210} height={22} />


        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative mt-12 w-[80%] lg:w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-md bg-gray-50 focus:ring-[#FFBB15] focus:border-[#FFBB15] outline-none focus:outline-none " placeholder="Search " />
          <button type="submit" className="text-white absolute end-0 bottom-0 bg-[#FFBB15] h-full w-[30%] lg:w-[10%] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2">Search</button>
        </div>
        <div className="mt-8">
          <iframe className="hidden lg:block rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.336634882835!2d31.299663916107534!3d30.059556316673063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1712852795649!5m2!1sar!2seg" width="1300" height="500"  allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <iframe className="block lg:hidden rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.336634882835!2d31.299663916107534!3d30.059556316673063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1712852795649!5m2!1sar!2seg" width="300" height="300"  allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="grid gap-4 mt-4 lg:mt-8 grid-cols-1 lg:grid-cols-4 lg:gap-12">
          {ResturantData.map((item) => {
            return (
              <Resutrant ResturantData={item} key={item.id} />
            )
          })}
        </div>
      </section>

      <section className="relative mx-auto max-w-screen-xl flex flex-col justify-center items-center mt-8">
      <h2 className="my-4 mt-8 font-semibold leading-[40px] text-[35px]">Gallery</h2>
        <Image alt="underline" src={HeaderUnderline} width={210} height={22} />
        <div className="grid gap-4 mt-4 lg:mt-8 grid-cols-1 lg:grid-cols-4 lg:gap-12 mb-12">
          <Gallary />
        </div>
      </section>
        <Footer />
    </main>
  )
}
