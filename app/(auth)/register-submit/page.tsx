"use client";
import Image from "next/image";
import Logo from "@/icons/logoB.svg";
import AddImageIcon from "@/icons/addImage.svg";
import ImageIcon from "@/icons/imageIcon.svg";
import { useForm } from "react-hook-form";
import { registerSubmitType } from "@/types";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, storage } from "@/firebaseConfig";
import { useRouter } from "next/navigation";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
const page = () => {
    const router = useRouter();
    const [userUid, setUserUid] = useState("");
    const [downloadUrl, setDownloadUrl] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const { register, handleSubmit } = useForm<registerSubmitType>();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                setUserUid(uid);
            } else {
                router.refresh();
                router.push('/');
            }
        });
    }, [auth])
    const onSubmit = async (data: registerSubmitType) => {
        setIsLoading(true);
        await uploadImage(data.image[0])
        try {
            const docRef = doc(db,"users",userUid);
            await updateDoc(docRef,{
                address: data.address,
                city: data.city,
                image: {
                    downloadUrl : downloadUrl,
                    imageName : data.image[0].name
                }
            })
            router.refresh();
            router.replace("/");
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }

    }
    const uploadImage = async (image: File) => {
        try {
            const imageRef = ref(storage, `users/${userUid}/${image.name}`);
            await uploadBytes(imageRef, image)
            getDownloadURL(imageRef).then((url: string) => {
                setDownloadUrl(url);
            })
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    }
    return (

        <section className='relative flex flex-col'>
            <div className='fixed top-5 left-5 lg:left-28 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]'>
                <Image alt="logo" src={Logo} fill />
            </div>
            <div className="relative flex flex-wrap mt-[100px] lg:mt-0 lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg ">
                        <h1 className="text-2xl font-bold sm:text-3xl">Register As Cafe/Restaurant</h1>
                        <p className="mt-4 text-gray-500">Register Now!</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        <div>
                            <label htmlFor="address" className="sr-only">Address</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Address"
                                    {...register("address")}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="city" className="sr-only">city</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="City"
                                    {...register("city")}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="input-image" className="sr-only">select image</label>
                            <div className="relative  flex flex-col justify-start rounded-sm w-full h-[200px] border-2 border-gray-200">
                                <p className="text-gray-500 m-3">Attach Your Display Picture</p>
                                <div className="flex items-center justify-evenly">
                                    <label htmlFor="input-image" className="w-[190px] h-[120px] border-solid border-gray-200 rounded-sm border-2 cursor-pointer flex flex-col items-center justify-center">
                                        <Image alt="add image" src={AddImageIcon} width={34} height={34} />
                                        <p className="text-gray-500 m-2">Add Image</p>
                                        <input
                                            type="file"
                                            id="input-image"
                                            accept="image/*"
                                            className="hidden"
                                            required
                                            {...register("image")}  
                                        />
                                    </label>
                                    <div className="w-[190px] h-[120px] border-solid border-gray-200 rounded-sm border-2 flex items-center justify-center">
                                        <Image alt="image" src={ImageIcon} width={34} height={34} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="inline-block rounded-lg px-5 py-3 mt-4 mb-4 text-sm font-medium text-black w-full border-[#FFBB15] border-2"
                            disabled={isLoading}
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <Image alt="login" src="/cuate.png" fill objectFit='cover' />
                </div>
            </div>
        </section>
    )
}

export default page