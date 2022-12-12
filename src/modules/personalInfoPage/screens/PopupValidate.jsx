import React, { useRef, useState } from "react";
import { useContext } from "react";
import { ColorRing } from "react-loader-spinner";
import AppButton from "../../../globalComponents/AppButton";
import Modal from "../../../globalComponents/Modal";
import PasswordField from "../../../globalComponents/PasswordField";
import { createAxiosInstance, errorNoti, successNoti } from "../../../service";
import { UserContext } from "../../../store/Context";

function PopupValidate(props) {
  const [PasswordInputType, ToggleIcon] = PasswordField();
  const [isProcessing, setIsProcessing] = useState(false);

  const [appState, dispatch] = useContext(UserContext);

  const passwordInput = useRef("");
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

  const successValidateHandler = () => {
    props.successValidate();
    setIsProcessing(false);
    successNoti("Xác thực thành công");
    props.handleTogglePopup();
  };

  const submitHandler = async () => {
    try {
      let isPasswordValid = isValid(passwordInput);
      if (isPasswordValid) {
        setIsProcessing((prev) => !prev);
        const userInfo = {
          Username: appState.userName,
          Password: passwordInput.current.value,
        };
        const response = await createAxiosInstance().post(
          "/user/login",
          userInfo
        );
        return successValidateHandler(response.data);
      } else {
        errorNoti("Bạn cần nhập đầy đủ thông tin!!!");
      }
    } catch (e) {
      setIsProcessing((prev) => !prev);
      const errorMessage = e.response.data.message;

      errorNoti(
        `Đăng nhập thất bại do ${errorMessage}, bạn vui lòng kiểm tra lại thông tin và thử lại!!!`
      );

      passwordInput.current.value = "";
    }
  };

  return (
    <Modal>
      <div
        className={`${props.className} z-30 w-screen h-screen fixed top-0 bg-black bg-opacity-75 flex justify-center items-center`}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            props.handleTogglePopup();
          }
        }}
      >
        <div className="flex flex-col justify-center items-center md:flex-row">
          {/* block 2 */}
          <div className="flex justify-center items-center order-1 md:order-2">
            <div className="w-[294px] h-[225px] rounded-2xl md:w-[382px] md:h-[400px] md:relative bg-beige100 flex justify-center items-center order-1 md:order-2">
              <div className="md:ml-[10px] text-center">
                <div
                  onClick={() => {
                    props.handleTogglePopup();
                  }}
                  className="md:absolute md:top-3 md:right-10"
                >
                  <p className="mt-[3px] mr-[-20px] text-black text-opacity-60 text-[20px] text-end hover:text-brown cursor-pointer md:text-[25px]">
                    x
                  </p>
                </div>
                <div className="">
                  <p className="mt-[-20px] text-orange text-b7 text-center md:text-b5 md:text-start">
                    Nhập mật khẩu
                  </p>
                </div>

                {/* password */}
                <div className="relative my-4">
                  <input
                    ref={passwordInput}
                    className="w-[198px] h-[32px] mt-[7px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-solid border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13"
                    type={PasswordInputType}
                    placeholder="Nhập mật khẩu"
                  />
                  <span className="cursor-pointer absolute right-4 top-[14px] md:right-5 md:top-[22px]">
                    {ToggleIcon}
                  </span>
                </div>

                <div className="">
                  <AppButton
                    className="w-full h-[32px] mt-[7px] text-b17 flex items-center rounded-md text-white md:w-[342px] md:h-[53px] md:text-b10"
                    text="Xác thực"
                    onClick={submitHandler}
                  />
                </div>
                {isProcessing && <ColorRing width={50} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default PopupValidate;
