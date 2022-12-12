import React, { useEffect, useState } from 'react'
import style from './Footer.css'
import logo from '../../assests/images/global/logo.png'
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as BgFacebook } from "../../assests/images/svg/facebook_bg.svg"
import { ReactComponent as BgYoutube } from "../../assests/images/svg/youtube_bg.svg"
import { ReactComponent as BgInstagram } from "../../assests/images/svg/instagram_bg.svg"
import { ReactComponent as IconFacebook } from "../../assests/images/svg/facebook_icon.svg"
import { ReactComponent as IconYoutube } from "../../assests/images/svg/youtube_icon.svg"
import { ReactComponent as IconInstagram } from "../../assests/images/svg/instagram_icon.svg"

export default function Footer({ props }) {
    const location = useLocation();
    const [pathname, setPathname] = useState('/')


    useEffect(() => {
        setPathname(location.pathname);
    }, [location])

    return (
        <footer className={
            `w-screen bg-grey h-82 sm:h-96
            ${(pathname === '/') ? 'bg-white' : 'bg-grey'}`
        }>
            <div className="flex flex-row flex-wrap sm:flex-nowrap sm:pl-[50px] p-2">
                <div className="basis-full sm:basis-4/12 sm:mt-[50px] h-28 ">
                    <div className='mx-auto w-min'>
                        <Link to="/">
                            <img src={logo} alt="logo" className=" w-48 sm:w-60" onClick={() => { }}
                                style={{ cursor: 'pointer' }}
                            />
                        </Link>
                        <div className=" flex flex-row mx-auto sm:mt-4 justify-between w-[132px]">
                            <a className="basis-1/3 h-max w-max"
                                href="https://www.facebook.com/">
                                <BgFacebook className="absolute" />
                                <IconFacebook className="relative top-[7px] left-[11.25px]" />
                            </a>
                            <a className="basis-1/3"
                                href="https://www.instagram.com/">
                                <BgInstagram className="absolute" />
                                <IconInstagram className="relative top-[6.5px] left-[7.25px]" />
                            </a>
                            <a className="basis-1/3"
                                href="https://www.youtube.com/">
                                <BgYoutube className="absolute" />
                                <IconYoutube className="relative top-[8.5px] left-[7.75px]" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="basis-5/12 sm:basis-1/5 mt-4 sm:mt-[50px]">
                    <p className="text-b12 sm:text-b7 pl-[20px] my-[16.5px]">Giới thiệu</p>
                    <ul className="list-none pl-[20px]">
                        <li className="my-[16.5px] sm:my-[30px]">
                            <Link className="no-underline text-b13 sm:text-b8 text-black" to="/coffees">
                                Cà phê
                            </Link>
                        </li>
                        <li className="my-[16.5px] sm:my-[30px]">
                            <Link className="no-underline text-b13 sm:text-b8 text-black" to="/teas">
                                Trà
                            </Link>
                        </li>
                        <li className="my-[16.5px] sm:my-[30px]">
                            <Link className=" no-underline text-b13 sm:text-b8 text-black" to="/cakes">
                                Bánh ngọt
                            </Link>
                        </li>
                        <li className="my-[16.5px] sm:my-[30px]">
                            <Link className=" no-underline text-b13 sm:text-b8 text-black" to="/blogs">
                                Chuyện nhà
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="basis-7/12 sm:basis-5/12 mt-4 sm:mt-[50px]">
                    <p className="text-b12 sm:text-b7 pl-[20px] my-[16.5px]">Thông tin liên hệ</p>
                    <ul className="list-none pl-[20px]">
                        <li className="my-[16.5px] sm:my-[30px] text-b13 sm:text-b8 ">Số điện thoại: <br className="sm:hidden" /><span className="text-orange" >083 913 2695</span></li>
                        <li className="my-[16.5px] sm:my-[30px] text-b13 sm:text-b8 ">Địa chỉ: <br className="sm:hidden" /><span className="text-orange" >Hàn Thuyên, Thủ Đức, TP HCM</span></li>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8065.893357110389!2d106.80551837713952!3d10.877217811230125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2sUniversity%20of%20Information%20Technology%20-%20VNUHCM!5e0!3m2!1sen!2s!4v1670040218490!5m2!1sen!2s"
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            className="border border-solid rounded-lg w-96"
                        ></iframe>
                    </ul>
                </div>
            </div>
        </footer>
    )
}