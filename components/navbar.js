import React from 'react'
import Link from 'next/link'

const navbar = () => {
    return (
        <>
            <div className="flex justify-between p-5 px-10 items-center">
                <Link href="/">
                    <h1 className="text-3xl font-bold pl-8 text-black">Bit-Tree</h1>
                </Link>

                <ul className="flex gap-5 text-black/80 font-medium">
                    <li className="cursor-pointer transition duration-300 hover:text-purple-600 hover:scale-105"><Link href="/">Home</Link></li>
                    <li className="cursor-pointer transition duration-300 hover:text-purple-600 hover:scale-105">About</li>
                    <li className="cursor-pointer transition duration-300 hover:text-purple-600 hover:scale-105">Contact</li>
                </ul>
                <div className="flex gap-5 ">
                    <Link href="/login">
                        <button className="bg-black/5 text-black hover:bg-black/10 px-6 py-2 rounded-full border border-black/10 transition">Log in</button>
                    </Link>
                    <Link href="/generate">
                        <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full shadow-lg transition">Sign up</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default navbar