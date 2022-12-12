import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import "swiper/css/autoplay"
import "swiper/css/pagination";
import "swiper/css";
import './slider_style.css';
import banner1 from "../../../assests/images/home/banner/banner1.png";
import banner2 from "../../../assests/images/home/banner/banner2.png";
import banner3 from "../../../assests/images/home/banner/banner3.png";
import banner4 from "../../../assests/images/home/banner/banner4.png";
import banner1_mb from "../../../assests/images/home/banner/banner1_mb.png";
import banner2_mb from "../../../assests/images/home/banner/banner2_mb.png";
import banner3_mb from "../../../assests/images/home/banner/banner3_mb.png";
import banner4_mb from "../../../assests/images/home/banner/banner4_mb.png";
import "./style.css"

const Banner = () => {
    return (
        <div className="w-full h-auto bg-white">
            <Swiper
                pagination={true}
                autoplay={{
                    delay: 3000,
                }}
                modules={[Autoplay, Pagination]} 
            >
                <SwiperSlide className="md:hidden">
                <img
                    src={banner1_mb}
                    alt=""
                    className="w-full h-auto"
                />
                </SwiperSlide> 
                <SwiperSlide className="md:hidden">
                <img
                    src={banner2_mb}
                    alt=""
                    className="w-full h-auto"
                />
                </SwiperSlide>
                <SwiperSlide className="md:hidden">
                <img
                    src={banner3_mb}
                    alt=""
                    className="w-full h-auto"
                />
                </SwiperSlide>
                <SwiperSlide className="md:hidden">
                <img
                    src={banner4_mb}
                    alt=""
                    className="w-full h-auto"
                />
                </SwiperSlide>
                
                <SwiperSlide className="hidden md:flex">
                <img
                    src={banner1}
                    alt=""
                    className="w-full h-auto"
                />
                </SwiperSlide>
                <SwiperSlide className="hidden md:flex">
                <img
                    src={banner2}
                    alt=""
                    className="w-full h-auto"
                />
                </SwiperSlide>
                <SwiperSlide className="hidden md:flex">
                <img
                    src={banner3}
                    alt=""
                    className="w-full h-auto"
                />
                </SwiperSlide>
                <SwiperSlide className="hidden md:flex">
                <img
                    src={banner4}
                    alt=""
                    className="w-full h-auto"
                />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner
