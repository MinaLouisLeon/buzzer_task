import { ResturantDataType } from "@/types";
import Image from "next/image";
import StarsRating from "./StarsRating";
import LocationIcon from "@/icons/locationIcon.svg";
const Resutrant = ({ ResturantData }: { ResturantData: ResturantDataType }) => {
    return (
        <div className='w-[300px] h-[500px] border-solid border-2 border-gray-300 rounded-md flex flex-col items-center gap-4'>
            <div className=" relative w-[300px] h-[300px] rounded-t-md rounded-b-[200px]">
                <Image alt={ResturantData.name} src={ResturantData.imageUrl} fill className="rounded-b-[200px] rounded-t-md" />
            </div>
            <StarsRating rating={ResturantData.stars} />
            <h3 className="font-semibold text-[26px] leading-[30px]">
                {ResturantData.name}
            </h3>
            <p className="text-red-500 font-normal text-[20px] leading-[24px]">
                {ResturantData.type}
            </p>
            <div className="flex flex-row items-center justify-center">
                <Image src={LocationIcon} width={30} height={30} alt="location icon" />
                <p className="text-[18px] ">{ResturantData.location}</p>
            </div>
        </div>
    )
}

export default Resutrant