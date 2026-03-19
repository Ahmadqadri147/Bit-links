import React from 'react'

const navbar = () => {
    return (
        <>
            <div className="flex justify-between p-5 px-10">
                <h1 className="text-3xl font-bold pl-8">Linktree</h1>

                <ul className="flex gap-5 pr-80 ">
                    <li className="cursor-pointer transition duration-300 hover:text-purple-300 hover:scale-105">Home</li>
                    <li className="cursor-pointer transition duration-300 hover:text-purple-300 hover:scale-105">About</li>
                    <li className="cursor-pointer transition duration-300 hover:text-purple-300 hover:scale-105">Contact</li>
                    <li className="cursor-pointer transition duration-300 hover:text-purple-300 hover:scale-105">Pricing</li>
                    <li className="cursor-pointer transition duration-300 hover:text-purple-300 hover:scale-105">FAQ</li>
                    <li className="cursor-pointer transition duration-300 hover:text-purple-300 hover:scale-105">Blog</li>
                </ul>
                <div className="flex gap-5 ">
                    <button className="bg-blue-50 hover:bg-blue-100 px-5 py-2 rounded-full">Log in </button>
                    <button className="bg-purple-300 hover:bg-purple-500 px-5 py-2 rounded-full">Sign up</button>
                </div>
            </div>
        </>
    )
}

export default navbar