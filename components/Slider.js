"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";

const Slider = ({ data }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setIsReady(true); // Trigger re-render to allow refs to be set
    }, []);

    return (
        <div className="w-full relative -mt-20">
            <img src="/assets/Ellipse.svg" className="w-full absolute left-0 -top-2 z-[2]" />

            {isReady && (
                <Swiper
                    slidesPerView={1.75}
                    spaceBetween={80}
                    centeredSlides={true}
                    loop={true}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onSwiper={(swiper) => {
                        // Necessary to rebind after refs are assigned
                        if (swiper.params.navigation) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    }}
                    className="simple-swiper"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="h-[700px] w-full bg-cover bg-center bg-no-repeat flex flex-col justify-end items-center shadow-lg pb-[170px]"
                                style={{ backgroundImage: `url(${item.src})` }}
                            >
                                <div className="flex flex-col items-center gap-4">
                                    <h3 className="text-4xl font-2 text-white font-semibold">{item.title}</h3>
                                    <div
                                        className="text-white font-3 text-xl flex items-center gap-2 cursor-pointer cta"
                                    >
                                        <span>View Project</span>
                                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
                                            <path opacity="0.5" d="M2.58473 6.51755C1.9255 6.51754 1.39109 7.05195 1.39109 7.71118C1.39109 8.37041 1.9255 8.90482 2.58473 8.90482L2.58473 6.51755ZM2.58473 7.71118L2.58473 8.90482L12.7164 8.90482L12.7164 7.71118L12.7164 6.51755L2.58473 6.51755L2.58473 7.71118Z" fill="white" />
                                            <path d="M8.91702 11.5103L12.7164 7.71088L8.91702 3.9115" stroke="white" strokeWidth="2.38727" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            {/* Navigation buttons */}
            <div className="absolute top-1/2 left-1/2 z-20 flex justify-between w-[62%] transform -translate-x-1/2 -translate-y-1/2">
                {/* Left */}
                <svg ref={prevRef} width="31" height="31" viewBox="0 0 31 31" fill="none" className="cursor-pointer">
                    <path opacity="0.5" d="M25.336 15.953C25.6656 15.953 25.9328 15.6858 25.9328 15.3562C25.9328 15.0266 25.6656 14.7594 25.336 14.7594V15.953ZM25.336 15.3562V14.7594H5.17685V15.3562V15.953H25.336V15.3562Z" fill="white" />
                    <path d="M12.7365 7.79639L5.17685 15.3561L12.7365 22.9158" stroke="white" strokeWidth="1.19364" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* Right */}
                <svg ref={nextRef} width="31" height="31" viewBox="0 0 31 31" fill="none" className="cursor-pointer">
                    <path opacity="0.5" d="M5.05133 14.7594C4.72172 14.7594 4.45451 15.0266 4.45451 15.3562C4.45451 15.6858 4.72172 15.953 5.05133 15.953V14.7594ZM5.05133 15.3562V15.953H25.2105V15.3562V14.7594H5.05133V15.3562Z" fill="white" />
                    <path d="M17.6508 7.79639L25.2104 15.3561L17.6508 22.9158" stroke="white" strokeWidth="1.19364" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <img src="/assets/Ellipse.svg" className="w-full absolute left-0 -bottom-2 z-[1] rotate-180" />
        </div>
    );
}

export default Slider;