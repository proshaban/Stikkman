"use client"
import Link from "next/link";
import { useState } from "react";
const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    return (
        <div className="flex flex-row items-center justify-between w-full max-width fixed pt-6 md:pt-12 px-6 left-1/2 -translate-x-[50%] text-white z-[1000]">
            <Link href="/">
                <h1 className="text-2xl md:text-3xl font-2 font-semibold">StikkmanUX</h1>
            </Link>
            {/* Navlinks */}
            <div className="hidden md:flex gap-8 items-center text-lg font-1 text-center pr-7  py-3">
                <Link href="/">
                    Projects
                </Link>
                <Link href="/">
                    Careers
                </Link>
                <Link href="/">
                    Services
                </Link>
                <Link href="/">
                    Contact US
                </Link>
            </div>
            {/* Nav Button */}
            <div className="cursor-pointer z-2" onClick={() => setNavOpen(!navOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 40 20" fill="none">
                    <rect width="40" height="4" rx="1" fill="currentColor" />
                    <rect y="8" width="40" height="4" rx="1" fill="currentColor" />
                    <rect y="16" width="40" height="4" rx="1" fill="currentColor" />
                </svg>
            </div>
            {/* mobile nav */}
            <div className={`flex md:hidden h-[100vh] w-screen fixed top-0  ${navOpen ? "right-[0%]" : "right-[-200%]"}  transition-all duration-200`}>
                <div onClick={() => setNavOpen(!navOpen)} className="bg-[#ffffff52] flex-1 flex"> </div>
                <div className="w-3/5 h-full bg-[var(--color-1)] flex flex-col justify-center items-start ">
                    <Link href="/" className="p-4 text-2xl">
                        Projects
                    </Link>
                    <Link href="/" className="p-4 text-2xl">
                        Careers
                    </Link>
                    <Link href="/" className="p-4 text-2xl">
                        Services
                    </Link>
                    <Link href="/" className="p-4 text-2xl">
                        Contact US
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header