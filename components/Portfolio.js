import { useState } from "react";
import Slider from "./slider";

const porfolioData = [
    {
        title: "Web UX",
        data: [
            { src: "/assets/image-1.jpg", title: "Garuda Aerospace | Web UX", link: "/" },
            { src: "/assets/image-2.jpg", title: "Big Brand Theory | Web UX", link: "/" },
            { src: "/assets/image-3.jpg", title: "Sukoon Villa | Web UX", link: "/" },
            { src: "/assets/image-4.jpg", title: "Garuda Aerospace | Web UX", link: "/" },
            { src: "/assets/image-5.jpg", title: "Big Brand Theory | Web UX", link: "/" },
        ],
    },
    {
        title: "Development",
        data: [
            { src: "/assets/image-6.jpg", title: "Big Brand Theory | Web UX", link: "/" },
            { src: "/assets/image-7.jpg", title: "Sukoon Villa | Web UX", link: "/" },
            { src: "/assets/image-8.jpg", title: "Garuda Aerospace | Web UX", link: "/" },
            { src: "/assets/image-9.jpg", title: "Big Brand Theory | Web UX", link: "/" },
            { src: "/assets/image-10.jpg", title: "Big Brand Theory | Web UX", link: "/" },
        ],
    },
];

const Porfolio = () => {
    const [selectedTitle, setSelectedTitle] = useState(porfolioData[0].title);
    const [data, setData] = useState(porfolioData[0].data);

    const handleSelect = (title) => {
        const selected = porfolioData.find((item) => item.title === title);
        if (selected) {
            setSelectedTitle(title);
            setData(selected.data);
        }
    };

    return (
        <div className="w-full py-[200px] flex flex-col items-center">
            {/* section heading */}
            <h2 className="text-5xl text-center text-white font-2 z-3 mb-6">
                <span>Our</span>{" "}
                <span className="italic text-[var(--color-2)] font-light">Projects</span>
            </h2>

            <div className="relative inline-block group text-left z-3">
                {/* Trigger Button */}
                <div className="inline-flex items-center justify-between gap-2 px-4 py-2 text-white rounded-full bg-transparent cursor-pointer group-hover:bg-white/10 transition font-2">
                    <span>{selectedTitle}</span>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>

                {/* Dropdown Options */}
                <div className="absolute hidden group-hover:block w-44 rounded-md shadow-lg bg-black ring-1 ring-white/10 z-50 text-center left-[-25%]">
                    {porfolioData.map((item) => (
                        <div
                            key={item.title}
                            className="cursor-pointer px-4 py-2 text-white hover:bg-white/10"
                            onClick={() => handleSelect(item.title)}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>

            {/* Slider */}
             <Slider data={data} />
            {/* Button */}
            <div className="button-fill flex items-center gap-2 py-3 px-6 border-2 border-[var(--color-3)] text-base cursor-pointer z-3 rounded-full text-[var(--color-3)] mt-6">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10"
                >
                    <path
                        d="M5 10H10M10 10H15M10 10V15M10 10V5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <span className="relative z-10">All Projects</span>
            </div>
        </div>
    );
}

export default Porfolio;