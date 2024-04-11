import { gallaryLinks } from "@/Constants";
import Image from "next/image";
import React from 'react'

const Gallary = () => {
    return (
        <>
            {gallaryLinks.map((item) => {
                return (
                    <div className="relative w-[300px] h-[400px] rounded-lg" key={item}>
                        <Image alt="item" src={item} fill className="rounded-lg" />
                    </div>
                )
            })}
        </>
    )
}

export default Gallary