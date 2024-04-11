import { HeaderLinkType, ResturantDataType } from "./types";

const HeaderLinks:HeaderLinkType[] = [
    {
        id:1,
        name:"Home",
        path:"/"
    },{
        id:2,
        name:"Products",
        path:"/products"
    },{
        id:3,
        name:"About Us",
        path:"/about"
    },{
        id:4,
        name:"Contact Us",
        path:"/contact"
    }
]

const ResturantData:ResturantDataType[] = [
    {
        id:1,
        name:"The Sky",
        type:"Restaurant",
        location:"Main Market Riyadh, KSA",
        imageUrl: "/Resturant1.png",
        stars:4
    },{
        id:2,
        name:"AI Nakheel",
        type:"Cafe",
        location:"Main Market Riyadh, KSA",
        imageUrl: "/Resturant2.png",
        stars:3
    },{
        id:3,
        name:"Le Cie",
        type:"Cafe",
        location:"Main Market Riyadh, KSA",
        imageUrl: "/Resturant3.png",
        stars:3
    },{
        id:4,
        name:"Holiday Inn",
        type:"Restaurant",
        location:"Main Market Riyadh, KSA",
        imageUrl: "/Resturant4.png",
        stars:5
    }
]

const gallaryLinks:string[] = [
    '/G1.jpg','/G2.png','/G3.png','/G4.jpg'
]

const sideMenuItems:string[] = [
    "Offers","Featured Products","Suppliers","Articles","Image Gallery","FAQs","Settings","About Us","Mission & Vision","Contact Us","Privacy Policy","Terms & Conditions"
]

export {HeaderLinks,ResturantData,gallaryLinks,sideMenuItems}