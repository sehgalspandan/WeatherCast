"use client";

import React from 'react'
import {useRouter} from 'next/navigation'

// import {ArrowPathIcon} from "@heroicons/react/solid"
function Navigation() {
    const router = useRouter();

    function reload() {
    }

    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                        <span className="ml-3 text-xl w-fit">WeatherCast</span>
                    </a>
                    <nav className="mx-auto flex flex-wrap  items-center text-base justify-center">

                        <a href='https://github.com/sehgalspandan' className="mr-5 hover:text-gray-900">About Me</a>
                        <a href='https://github.com/sehgalspandan/WeatherCast' className="mr-5 hover:text-gray-900">About App</a>
                        <a href='mailto:spandansehgal@gmail.com' className="mr-5 hover:text-gray-900">Contact Us</a>
                    </nav>
                    <button onClick={router.refresh} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        Reload 🔄️


                    </button>
                </div>
            </header>

        </>
    )
}

export default Navigation   
