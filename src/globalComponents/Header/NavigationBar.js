import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assests/images/global/logo.png";
import {
  faBagShopping,
  faBars,
  faClose,
  faSortDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../store/Context";
import LoginPopup from "../../modules/loginPopup/screen/loginPopup";
import SigninPopup from "../../modules/signinPopup/screen/signinPopup";
import AppButton from "../AppButton";
import MenuDropdown from './MenuDropdown'


const NavigationBar = (props) => {
  const [appState, dispatch] = useContext(UserContext);
  const [isDropdownShown, setDropdownShown] = useState(false)
  const location = useLocation();
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  const [pathname, setPathname] = useState("/");
  const toggleDrawer = (open) => (event) => {
    setOpenDrawer(open);
  };

  function toggleDropdownMenu() {
    setDropdownShown(!isDropdownShown)
  }

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);


  const navItems = () => (
    <div className="flex flex-col aligns-start justify-center" >
      <button
        className="border-none outline-none bg-transparent cursor-pointer px-4 my-2 w-8 h-8"
        onClick={toggleDrawer(false)}
      >
        <FontAwesomeIcon icon={faClose} size="2x" className="text-grey100  hover:text-orange" />
      </button>
      <Link
        className={`no-underline text-b8 p-4 font-semibold hover:text-orange 
                ${pathname === "/" ? "text-orange" : "text-black"}`}
        to="/"
        onClick={toggleDrawer(false)}
        style={{ borderBottom: "2px solid grey", borderTop: "2px solid grey" }}
      >
        Trang chủ
      </Link>
      <Link
        className={`no-underline text-b8 p-4 font-semibold hover:text-orange
                ${pathname === "/coffees" ? "text-orange" : "text-black"}`}
        to="/coffees"
        style={{ borderBottom: "2px solid grey" }}
        onClick={toggleDrawer(false)}
      >
        Cà phê
      </Link>
      <Link
        className={`no-underline text-b8 p-4 font-semibold hover:text-orange 
                ${pathname === "/teas" ? "text-orange" : "text-black"}`}
        to="/teas"
        style={{ borderBottom: "2px solid grey" }}
        onClick={toggleDrawer(false)}
      >
        Trà
      </Link>
      <Link
        className={`no-underline text-b8 p-4 font-semibold hover:text-orange
                ${pathname === "/cakes" ? "text-orange" : "text-black"}`}
        to="/cakes"
        style={{ borderBottom: "2px solid grey" }}
        onClick={toggleDrawer(false)}
      >
        Bánh ngọt
      </Link>
      <Link
        className={`no-underline text-b8 p-4 font-semibold hover:text-orange
                ${pathname === "/blogs" ? "text-orange" : "text-black"}`}
        to="/blogs"
        style={{ borderBottom: "2px solid grey" }}
        onClick={toggleDrawer(false)}
      >
        Chuyện nhà
      </Link>
      <div className={`my-4 mx-4 pt-2.5 max-h-11 sm:hidden ${!appState.isLogin ? "flex" : "hidden"} `}>
        <AppButton
          text="Đăng nhập"
          className="mb-2 rounded-none text-white rounded-l-full py-0.5 md:py-1.5"
          onClick={() => {
            toggleDrawer(false)
            togglePopupLogin()
          }}
        ></AppButton>
        <AppButton
          onClick={() => {
            toggleDrawer(false)
            togglePopupSignup()
          }} 
          text="Đăng ký"
          className="mb-2 rounded-none bg-grey text-orange py-0.5 rounded-r-full hover:bg-gray-300 md:py-1.5"
        ></AppButton>
      </div>
    </div>
  );

  const [isOpenLoginPopup, setIsOpenLoginPopup] = useState(false);
  const [isOpenSignupPopup, setIsOpenSignupPopup] = useState(false);

  const togglePopupLogin = () => {
    setIsOpenLoginPopup((prev) => !prev);
  };

  const togglePopupSignup = () => {
    setIsOpenSignupPopup((prev) => !prev);
  };


  return (
    <>
      <LoginPopup
        className={`${isOpenLoginPopup ? "block" : "hidden"}`}
        togglePopupLogin={togglePopupLogin}
      ></LoginPopup>
      <SigninPopup
        className={`${isOpenSignupPopup ? "block" : "hidden"}`}
        togglePopupSignup={togglePopupSignup}
        togglePopupLogin={togglePopupLogin}
      ></SigninPopup>
      <div
        className={`flex items-center justify-between ${props.className}`}
        style={{ backgroundColor: "#F4D8B2" }}
      >
        <button
          className="border-none outline-none bg-transparent cursor-pointer ml-2 mt-4 lg:hidden"
          onClick={toggleDrawer(true)}
        >
          <FontAwesomeIcon icon={faBars} size="2xl" className="text-grey100" />
        </button>
        <div className="lg:hidden">
          <Drawer
            open={isOpenDrawer}
            onClose={toggleDrawer(false)}
            direction="left"
            style={{ width: "53.33vw" }}
          >
            {navItems()}
          </Drawer>
        </div>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="mx-0 w-32 mt-1 mr-4 sm:mx-28 md:ml-6 md:mr-0"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <nav className="hidden ml-40 lg:flex aligns-center jusfify-center">
          <Link
            className={`no-underline text-b8 p-4 pt-6 hover:text-orange 
                    ${pathname === "/coffees" ? "text-orange" : "text-black"}`}
            to="/coffees"
          >
            Cà phê
          </Link>
          <Link
            className={`no-underline text-b8 p-4 pt-6 hover:text-orange 
                    ${pathname === "/teas" ? "text-orange" : "text-black"}`}
            to="/teas"
          >
            Trà
          </Link>
          <Link
            className={`no-underline text-b8 p-4 pt-6 hover:text-orange 
                    ${pathname === "/cakes" ? "text-orange" : "text-black"}`}
            to="/cakes"
          >
            Bánh ngọt
          </Link>
          <Link
            className={`no-underline text-b8 p-4 pt-6 hover:text-orange 
                    ${pathname === "/blogs" ? "text-orange" : "text-black"}`}
            to="/blogs"
          >
            Chuyện nhà
          </Link>
        </nav>

        {/* login signup btn */}
        <div
          className={` my-4 mr-8 pt-2.5 max-h-11 hidden ${
            !appState.isLogin ? "sm:flex" : "hidden"
          } `}
        >
          <AppButton
            text="Đăng nhập"
            className="mb-2 rounded-none text-white rounded-l-full py-0.5 md:py-1.5"
            onClick={togglePopupLogin}
          ></AppButton>
          <AppButton
            onClick={togglePopupSignup}
            text="Đăng kí"
            className="mb-2 rounded-none bg-white text-orange py-0.5 rounded-r-full hover:bg-gray-200 md:py-1.5"
          ></AppButton>
        </div>
        {/* user Info show when logined */}
        <div className={` my-4 ${appState.isLogin ? "flex" : "hidden"}`}>
          <Link className="mr-2 no-underline" onClick={toggleDropdownMenu}>
            <div className="bg-orange hidden md:flex rounded-full py-1">
              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                border
                className="text-orange bg-white rounded-full ml-2"
              />
              <p
                className="my-1 leading-[22px] text-b15 text-white mx-2 
                      md:text-b12 lg:text-b11"
              >
                {appState.fullName}
              </p>
              <FontAwesomeIcon
                icon={faSortDown}
                size="md"
                className="text-white mx-2 mt-1"
              />
            </div>
            <FontAwesomeIcon
              icon={faUser}
              size="xl"
              border
              className="text-orange border-none rounded-full ml-2 md:hidden"
            />
          </Link>
          <Link className="mr-2" to="cart">
            <FontAwesomeIcon
              icon={faBagShopping}
              size="xl"
              border
              className="text-orange border-none rounded-full md:my-1"
            />
          </Link>
        </div>
        <MenuDropdown open={isDropdownShown} onClose={toggleDropdownMenu} />
      </div>
    </>
  );
};

export default NavigationBar;
