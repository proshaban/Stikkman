import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="w-full flex-col items-center relative">
      {/* Header */}
      <div className="flex flex-row items-center justify-between w-full max-width fixed top-12 left-1/2 -translate-x-[50%]">
        <Link href="/">
          <h1 className="text-3xl font-2 font-semibold">StikkmanUX</h1>
        </Link>
        {/* Navlinks */}
        <div className="flex gap-8 items-center text-lg font-1 text-center px-7 py-3">
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
      </div>
   </div>
  );
}
