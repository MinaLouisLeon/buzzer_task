import Link from "next/link";
import Image from "next/image";
import TwitterIcon from "@/icons/twitter.svg";
import FacebookIcon from "@/icons/facebook.svg";
import YoutubeIcon from "@/icons/youtube.svg";
import InstagramIcon from "@/icons/instagram.svg";
import LinkedinIcon from "@/icons/linkedin.svg";
const SocialMedia = () => {
  return (
    <>
        <Link href={"#"} className="w-[60px] h-[60px] rounded-full bg-gradient-to-r from-[#6D6461] to-[#463C3B] flex justify-center items-center">
            <Image alt="twitter" src={TwitterIcon} width={30} height={30} />
        </Link>
        <Link href={"#"} className="w-[60px] h-[60px] rounded-full bg-gradient-to-r from-[#6D6461] to-[#463C3B] flex justify-center items-center">
            <Image alt="facebook" src={FacebookIcon} width={30} height={30} />
        </Link>
        <Link href={"#"} className="w-[60px] h-[60px] rounded-full bg-gradient-to-r from-[#6D6461] to-[#463C3B] flex justify-center items-center">
            <Image alt="youtube" src={YoutubeIcon} width={30} height={30} />
        </Link>
        <Link href={"#"} className="w-[60px] h-[60px] rounded-full bg-gradient-to-r from-[#6D6461] to-[#463C3B] flex justify-center items-center">
            <Image alt="instagram" src={InstagramIcon} width={30} height={30} />
        </Link>
        <Link href={"#"} className="w-[60px] h-[60px] rounded-full bg-gradient-to-r from-[#6D6461] to-[#463C3B] flex justify-center items-center">
            <Image alt="linkedin" src={LinkedinIcon} width={30} height={30} />
        </Link>
    </>
  )
}

export default SocialMedia