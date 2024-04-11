"use client";
import Link from "next/link";
import Logo from "@/icons/logo.svg"

import notificationIcon from "@/icons/notificationIcon.svg";
import userIcon from "@/icons/userIcon.svg";
import Image from 'next/image';
import { HeaderLinks } from '@/Constants';
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarImage } from "./ui/avatar";
import MenuIcon from "@/icons/menuIcon.svg";
import MenuItemIcon from "@/icons/menuItemIcon.svg";
import { sideMenuItems } from '@/Constants';
const Header = () => {
    const currentPath = usePathname();
    const router = useRouter();
    const [userUid, setUserUid] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [avatarUrl, setAvatarUrl] = useState<string>('');
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                const displayName = user.displayName;
                const photoURL = user.photoURL;
                console.log(user)
                setUserUid(uid);
                //@ts-ignore
                setUserName(displayName);
                //@ts-ignore
                setAvatarUrl(photoURL);
                // ...
            } else {
                setUserUid('');
                setUserName('');
                setAvatarUrl('');
                router.refresh();
                router.push('/');
            }
        });
    }, [auth])
    return (
        <header className="bg-transparent">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link className="block mt-4" href="/" prefetch={false} >
                            <span className="sr-only">Home</span>
                            <Image src={Logo} alt='logo' aria-hidden="true" />
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                {HeaderLinks.map((link) => (
                                    <Link className={`text-white transition hover:text-gray-300 ${link.path === currentPath ? "underline underline-offset-4 text-[#FFBB15] hover:text-[#FFBB15]" : ""}`}
                                        key={link.id} href={link.path}>{link.name}</Link>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4 justify-center">
                        <Popover>
                            <PopoverTrigger asChild>
                                <button>
                                    <Image src={userIcon} alt='user' />
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className=" bg-gradient-to-b from-[#740706] to-[#330202]">
                                <div>
                                    {userUid ?
                                        <div className="flex flex-col justify-start items-center">
                                            <p className="font-bold">{userName}</p>
                                            <div className="flex flex-row justify-between items-center">
                                                <Avatar>
                                                    <AvatarImage src={avatarUrl} alt="user image" />
                                                </Avatar>
                                                <button className="w-full text-white" onClick={() => signOut(auth)}>Logout</button>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <button className="w-full text-white" onClick={() => router.push('/signin')}>Login</button>
                                        </div>
                                    }
                                </div>
                            </PopoverContent>
                        </Popover>
                        <button>
                            <Image src={notificationIcon} alt='notification' />
                        </button>
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
                                <button className='text-white px-4 py-2 mt-8 w-full border-2 rounded-md border-gray-300' onClick={() => {
                                    if (userUid != "") {
                                        signOut(auth);
                                        router.refresh();
                                        router.push('/');
                                    }else{
                                        router.push('/signin');
                                    }
                                }}>
                                   {userUid != "" ? "Logout" : "Login"}
                                </button>
                                <button className='text-white px-4 py-2 mt-6 w-full border-2 rounded-md border-gray-300'>Register As Supplier</button>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header