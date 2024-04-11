
import Image from "next/image";
import SearchIcon from "@/icons/searchIcon.svg";
const HomeSearch = () => {
    return (
        <div className="flex flex-row items-center justify-between mt-8  rounded-full h-[60px] md:w-[582px] bg-gradient-to-r from-[#5d5d5e] to-[#493F3F]">
            <input className=" border-none outline-none h-[40px] p-2 bg-transparent ml-4 text-[24px] text-white placeholder:text-white placeholder:text-[24px]" placeholder="Search" />
            <button className=" rounded-full bg-[#FFBB15]  lg:w-[40px] lg:h-[40px] flex items-center justify-center text-center mr-4">
                <Image alt="search" src={SearchIcon} width={20} />
            </button>
        </div>
    )
}

export default HomeSearch