
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import Image from 'next/image'
import MenuIcon from "@/icons/menuIcon.svg";
import Logo from "@/icons/logo.svg";
import MenuItemIcon from "@/icons/menuItemIcon.svg";
import { sideMenuItems } from '@/Constants';
import { redirect } from 'next/navigation';
const SideMenu = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <button>
                    <Image src={MenuIcon} alt='menu' />
                </button>
            </PopoverTrigger>
            <PopoverContent className=' bg-gradient-to-b from-[#740706] to-[#330202] '>
                <div className="w-full flex flex-col justify-center items-center border-b border-gray-300">
                    <div className='relative w-[110px] h-[110px] mb-8'>
                        <Image src={Logo} alt="logo" fill />
                    </div>
                </div>
                <div className='flex flex-col items-start justify-start border-gray-300 mt-4 gap-4'>
                    {sideMenuItems.map((item) => (
                        <button className='flex flex-row items-center justify-between w-full' key={item}>
                            <p className='text-white cursor-pointer`'>{item}</p>
                            <Image src={MenuItemIcon} alt="menu item icon" width={20} height={20} />
                        </button>
                    ))}
                </div>
                <button className='text-white px-4 py-2 mt-8 w-full border-2 rounded-md border-gray-300' onClick={() => redirect("/signin")}>Login</button>
                <button className='text-white px-4 py-2 mt-6 w-full border-2 rounded-md border-gray-300'>Register As Supplier</button>
            </PopoverContent>
        </Popover>
    )
}

export default SideMenu