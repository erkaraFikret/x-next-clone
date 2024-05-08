"use client"

import { HiHome, HiDotsHorizontal } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";


const Sidebar = () => {
    const { data: session } = useSession()
    return (
        <div className="flex flex-col justify-between h-screen p-3">
            <div className="flex flex-col gap-4 p-3">
                <Link href="/">
                    <FaXTwitter className="w-16 h-16 p-3 cursor-pointer hover:bg-gray-100 rounded-full transition duration-200" />
                </Link>
                <Link href="/" className="flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-full transition duration-200 gap-2 w-fit">
                    <HiHome className="w-7 h-7 " />
                    <span className="font-bold hidden xl:inline">Home</span>
                </Link>
                {session ?
                    (<button
                        className='bg-blue-400 text-white rounded-full  hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline font-semibold'
                        onClick={() => signOut()}
                    >
                        Sign Out
                    </button>)
                    :
                    (<button
                        onClick={() => signIn()}
                        className="bg-blue-400 w-48 h-9 text-white font-semibold rounded-full hover:brightness-95 transition duration-200 shadow-md hidden xl:inline">
                        Sign In
                    </button>)}
            </div>
            {session && (
                <div
                    className="text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition duration-200">
                    <img src={session.user.image} alt="user-img" className="h-10 w-10 rounded-full xl:mr-2" />
                    <div className="hidden xl:inline">
                        <h4 className="font-bold">{session.user.name}</h4>
                        <p className="text-gray-500">@{session.user.username}</p>
                    </div>
                    <HiDotsHorizontal className=" h-7 xl:ml-8 hidden xl:inline"/>
                </div>
            )}

        </div>
    )
}

export default Sidebar