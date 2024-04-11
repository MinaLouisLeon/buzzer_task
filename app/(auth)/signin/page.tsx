import Image from 'next/image'
import Logo from "@/icons/logoB.svg"
import SigninForm from './_componenets/SigninForm'

const page = () => {

    return (
        <section className='relative flex flex-col'>
            <div className='fixed top-5 left-5 lg:left-28 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]'>
                <Image alt="logo" src={Logo} fill />
            </div>
            <SigninForm />
        </section>
    )
}

export default page