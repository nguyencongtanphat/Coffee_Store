import React, { useRef, useState } from "react";
import AppButton from "../../../globalComponents/AppButton";
import PageTitle from "../../../globalComponents/PageTitle";
import InputField from "../../orderConfirm/components/InputField";
import leafBgR from "../../../assests/images/global/leaf-bg-right.png";
import leafBgL from "../../../assests/images/global/leaf-bg-left.png";
import { useContext } from "react";
import { UserContext } from "../../../store/Context";
import NotAuthen from "../../../globalComponents/NotAuthen";
import OutlineBtn from "../components/OutlineBtn";
import PopupValidate from "./PopupValidate";
import { createAxiosInstance, errorNoti, successNoti } from "../../../service";
import { updateAppState } from "../../../store/Actions";
import { useEffect } from "react";

export default function PersonalInfoPage() {
  const [appState, dispatch] = useContext(UserContext);
  const [togglePopup, setTogglePopup] = useState(false);
  const [isValidate, setIsValidate] = useState(false);
  const fullNameInput = useRef("");
  const userNameInput = useRef("");
  const phoneNumberInput = useRef("");
  const addressInput = useRef("");
  const passwordInput = useRef("");

   const handleTogglePopup = () => {
      setTogglePopup(prev=>!prev);
   };

   console.log("app state: ", appState)

  const updateSuccessHandler = (response)=>{
    const data = response.data;
    const newUserInfo = {
      ...data.userInfo,
      address: data.address
    }
    dispatch(updateAppState(newUserInfo));
    successNoti("Bạn đã cập nhật thông tin thành công!!")
  
  }

   const updateHandler = async()=>{
    try{
       const newUserInfor = {
         id: appState.id,
         Fullname: fullNameInput.current.value.trim() || appState.fullName,
         Username: userNameInput.current.value.trim() || appState.userName,
         PhoneNumber:
           phoneNumberInput.current.value.trim() || appState.phoneNumber,
         Address:
           addressInput.current.value.trim() || appState.address[0].Value,
         Password: passwordInput.current.value.trim(),
       };
       
       console.log("info Update:", newUserInfor);
       const response = await createAxiosInstance().post(
         "api/user/update",
         newUserInfor
       );
      updateSuccessHandler(response);
      
    }catch(e){
      console.log("Error creating", e)
      errorNoti("Đã có lỗi xảy ra xin thử lại sau")
    }
       
       
   }

   const successValidate = () => {
      setIsValidate(true);
   }

  return appState.isLogin ? (
    <>
      {togglePopup && (
        <PopupValidate
          handleTogglePopup={handleTogglePopup}
          successValidate={successValidate}
        />
      )}
      <div>
        <div className="p-2 m-auto md:w-[70%] lg:w-[60%] ">
          <PageTitle title="THÔNG TIN CÁ NHÂN" />
          <InputField
            forwardedRef={fullNameInput}
            isDisabled={!isValidate}
            type="text"
            label="Họ tên"
            value={appState.fullName}
            className="mt-5"
          />
          <InputField
            forwardedRef={userNameInput}
            isDisabled={!isValidate}
            type="text"
            label="Tên người dùng"
            value={appState.userName}
            className="mt-5"
          />
          <InputField
            forwardedRef={phoneNumberInput}
            isDisabled={!isValidate}
            type="tel"
            label="Số điện thoại"
            value={appState.phoneNumber}
          />
          <InputField
            forwardedRef={addressInput}
            isDisabled={!isValidate}
            type="text"
            label="Địa chỉ"
            value={appState.address[0].Value}
          />
          {isValidate && (
            <InputField
              forwardedRef={passwordInput}
              isDisabled={!isValidate}
              type="password"
              label="Mật khẩu"
              value="Mật khẩu"
            />
          )}

          <div className="flex flex-col items-center">
            <OutlineBtn
              onClick={isValidate ? updateHandler : handleTogglePopup}
              title={!isValidate ? " Sửa thông tin" : "Lưu thay đổi"}
            ></OutlineBtn>
          </div>
        </div>
        <img
          src={leafBgR}
          alt=""
          className="absolute hidden top-0 right-0 -z-10 md:block md:w-[300px] lg:w-[400px]"
        />
        <img
          src={leafBgL}
          alt=""
          className="absolute hidden top-0  -z-10 md:block md:w-[300px] lg:w-[400px] "
        />
      </div>
    </>
  ) : (
    <NotAuthen />
  );
}
