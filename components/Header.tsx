"use client";
import Link from "next/link";
import Logo from "@/icons/logo.svg"
import MenuIcon from "@/icons/menuIcon.svg";
import notificationIcon from "@/icons/notificationIcon.svg";
import userIcon from "@/icons/userIcon.svg";
import Image from 'next/image';
import { HeaderLinks } from '@/Constants';
import { usePathname, useRouter } from "next/navigation";
const Header = () => {
    const currentPath = usePathname();
    const router = useRouter();
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
                        <button onClick={() => router.push('/signin')}>
                            <Image src={userIcon} alt='user' />
                        </button>

                        <button>
                            <Image src={notificationIcon} alt='notification' />
                        </button>
                        <button>
                            <Image src={MenuIcon} alt='menu' />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header