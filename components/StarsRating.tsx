import StarGicon from "@/icons/starG.svg";
import StarYicon from "@/icons/starY.svg";
import Image from "next/image";
const StarsRating = ({ rating }: { rating: number }) => {
    let ratingArr = [1, 2, 3, 4, 5];
    return (
        <div className="w-[160px] h-[24px] flex flex-row justify-center items-center">
            {ratingArr.map((item) => {
                return (
                    <>
                        {
                            item <= rating ?
                                <Image alt="star" src={StarYicon} width={24} height={24} />
                                :
                                <Image alt="star" src={StarGicon} width={24} height={24} />
                        }
                    </>
                )
            })}
        </div>
    )
}

export default StarsRating