"use client"
import Link from "next/link";
import Porfolio from "../../components/Portfolio";


export default function Home() {
  return (
    <div className="w-full flex-col items-center relative bg-[var(--color-1)]">
      {/* Header */}
      <div className="flex flex-row items-center justify-between w-full max-width fixed top-12 left-1/2 -translate-x-[50%] text-white z-[1000]">
        <Link href="/">
          <h1 className="text-3xl font-2 font-semibold">StikkmanUX</h1>
        </Link>
        {/* Navlinks */}
        <div className="flex gap-8 items-center text-lg font-1 text-center pr-7  py-3">
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
        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 40 20" fill="none">
            <rect width="40" height="4" rx="1" fill="currentColor" />
            <rect y="8" width="40" height="4" rx="1" fill="currentColor" />
            <rect y="16" width="40" height="4" rx="1" fill="currentColor" />
          </svg>
        </div>
      </div>
      {/* Testimonial section */}
      <Porfolio />
    </div>
  );
}
