import React, { useState } from "react";
import AppButton from "../../../globalComponents/AppButton";
import bgCoffee from "../../../assests/images/login/bg-coffee.png";
import Modal from "../../../globalComponents/Modal";
import { useRef } from "react";
import axios from "axios";
import HttpService, { createAxiosInstance, errorNoti, successNoti } from "../../../service";
import { ColorRing } from "react-loader-spinner";
import PasswordField from "../../../globalComponents/PasswordField";

function SigninPopup({ className, togglePopupSignup, togglePopupLogin }) {
  const fullNameInput = useRef("");
  const userNameInput = useRef("");
  const numberPhoneInput = useRef("");
  const passwordInput = useRef("");
  const addressInput = useRef("");
  const [isProcessing, setIsProcessing] = useState(false);


  const isValid = (input) => {
    let className = input.current.className;
    if (input.current.value === "") {
      className = className.replace(" border-gray ", " border-rose-600 ");
      className = className.replace(" border ", " border-2 ");
      input.current.className = className;
      return false;
    } else {
      className = className.replace(" border-rose-600 ", " border-gray ");
      className = className.replace(" border-2 ", " border ");
      input.current.className = className;
      return true;
    }
  };
  const successSignupHandler = () => {
    setIsProcessing((prev) => !prev);
    togglePopupSignup();
    togglePopupLogin();
  };
  const submitHandler = async () => {
    try {
      let isFullNameValid = isValid(fullNameInput);
      let isUserNameValid = isValid(userNameInput);
      let isPasswordValid = isValid(passwordInput);
      let isNumberPhoneValid = isValid(numberPhoneInput);
      let isAddressValid = isValid(addressInput);
      if (
        isFullNameValid &&
        isUserNameValid &&
        isPasswordValid &&
        isNumberPhoneValid &&
        isAddressValid
      ) {
        setIsProcessing((prev)=>!prev)
        const userInfo = {
         
          Fullname: fullNameInput.current.value,
          Username: userNameInput.current.value,
          Password: passwordInput.current.value,
          PhoneNumber: numberPhoneInput.current.value,
          Address: addressInput.current.value,
        };

        console.log("signup")
        const response = await createAxiosInstance().post("api/user/signup", userInfo);
        
        console.log("response Signup:", response);
      
        successNoti("Bạn đã ký thành công");
        successSignupHandler();
       
      } else {
        errorNoti("Bạn cần nhập đầy đủ thông tin!!!");
      }
    } catch (e) {
      //const message = e.response.data;
      setIsProcessing((prev) => !prev);
     
      errorNoti(`Đăng ký thất bại do ${e}. Vui lòng thử lại!!`);
      userNameInput.current.value = "";
    }
  };

  const [PasswordInputType, ToggleIcon] = PasswordField();

  return (
    <Modal>
      <div
        className={`${className} w-full h-screen z-30 fixed top-0 bg-black bg-opacity-75 flex justify-center items-center`}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            togglePopupSignup();
          }
        }}
      >
        <div className="flex flex-col justify-center items-center md:flex-row rounded-2xl transition-shadow shadow-gray-800 shadow-opacity-50 shadow-[0px_0px_0px_-1px_rgba(0,0,0,0.3)]">
          <div className="flex justify-center items-center">
            <div className="w-[294px] h-[350px] rounded-t-2xl md:w-[382px] md:h-[505px] md:relative md:rounded-none md:rounded-l-2xl bg-beige100 flex justify-center items-center order-1 md:order-2">
              <div className="text-center">
                <div className="md:hidden" onClick={togglePopupSignup}>
                  <p className="mt-[3px] mr-[-20px] text-black text-opacity-60 text-[20px] text-end hover:text-brown cursor-pointer md:text-[25px]">
                    x
                  </p>
                </div>
                <div className="">
                  <p className="mt-[-20px] text-orange text-b7 text-center md:text-b5 md:text-start ">
                    Đăng ký
                  </p>
                </div>

                {/* fullName */}
                <div className="">
                  <input
                    ref={fullNameInput}
                    className="w-[198px] h-[32px] mt-[7px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-solid  border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13"
                    type="text"
                    placeholder="Nhập họ tên"
                  />
                </div>
                {/* userName */}
                <div className="">
                  <input
                    ref={userNameInput}
                    className="w-[198px] h-[32px] mt-[7px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-solid border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13"
                    type="text"
                    placeholder="Nhập Username"
                  />
                </div>

                {/* số điện thoại */}
                <div className="">
                  <input
                    ref={numberPhoneInput}
                    className="w-[198px] h-[32px] mt-[7px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-solid border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13 "
                    type="tel"
                    placeholder="Nhập số điện thoại"
                  />
                </div>

                {/* mật khẩu */}
                <div className="relative">
                  <input
                    ref={passwordInput}
                    className="w-[198px] h-[32px] mt-[7px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-solid border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13"
                    type={PasswordInputType}
                    placeholder="Nhập mật khẩu"
                  />
                  <span className='cursor-pointer absolute right-4 top-[14px] md:right-5 md:top-[22px]'>{ToggleIcon}</span>
                </div>

                {/* address */}
                <div className="">
                  <input
                    ref={addressInput}
                    className="w-[198px] h-[32px] mt-[7px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-solid border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13"
                    type="address"
                    placeholder="Nhập địa chỉ mặc định ở đây"
                  />
                </div>
                <div className="">
                  <AppButton
                    onClick={submitHandler}
                    className="w-full h-[32px] mt-[18px] text-b17 flex items-center rounded-md text-white md:w-[342px] md:h-[53px] md:mt-[32px] md:text-b10"
                    text="Đăng ký"
                  />
                </div>
                {isProcessing && <ColorRing width={50} height={40} />}
                <div className="md:flex md:justify-end md:bottom-3">
                  <p className=" text-orange text-[11px] text-center md:mt-[7px]">
                    Đăng nhập
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center item-center">
            <img
              src={bgCoffee}
              alt=""
              className=" w-[294px] h-[174px] object-cover rounded-b-2xl md:w-full md:h-full md:rounded-none md:rounded-r-2xl"
            />
          </div>
          <div
            className="invisible md:visible md:absolute"
            onClick={() => {
              togglePopupSignup();
            }}
          >
            <p className="md:mt-[-235px] md:mr-[-350px] md:text-white text-opacity-60 text-[20px] text-end hover:text-orange cursor-pointer md:text-[25px]">
              x
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default SigninPopup;
