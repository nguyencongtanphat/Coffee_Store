import React, { useRef, useState } from "react";
import AppButton from "../../../globalComponents/AppButton";
import bgCoffee from "../../../assests/images/login/bg-coffee.png";
import Modal from "../../../globalComponents/Modal";
import { createAxiosInstance, errorNoti, getLogin, successNoti } from "../../../service";
import { UserContext } from "../../../store/Context";
import { useContext } from "react";
import { setStatusLogin } from "../../../store/Actions";
import { useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import PasswordField from "../../../globalComponents/PasswordField";
function LoginPopup(props) {
  const [appState, dispatch] = useContext(UserContext);

  const userNameInput = useRef("");
  const passwordInput = useRef("");
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

  const successLoginHandler = async (userData) => {
    props.togglePopupLogin();
    const accessToken = userData.accessToken;
    //set accessToken to localStorage
    await localStorage.setItem("accessToken", JSON.stringify(accessToken));
    //update user state for app
    dispatch(setStatusLogin(userData.userInfo));
    userNameInput.current.value = "";
    passwordInput.current.value = "";
    successNoti("Bạn đã đăng nhập thành công!");
    setIsProcessing((prev) => !prev);
  };

  const submitHandler = async () => {
    try {
      let isUserNameValid = isValid(userNameInput);
      let isPasswordValid = isValid(passwordInput);
      if (isUserNameValid && isPasswordValid) {
        setIsProcessing((prev) => !prev);
        const userInfo = {
          Username: userNameInput.current.value,
          Password: passwordInput.current.value,
        };
        const response = await createAxiosInstance().post(
          "api/user/login",
          userInfo
        );
        return successLoginHandler(response.data);
      } else {
       
        errorNoti("Bạn cần nhập đầy đủ thông tin!!!");
      }
    } catch (e) {
      setIsProcessing((prev) => !prev);
      const errorMessage = e.response.data.message;
      
      errorNoti(
        `Đăng nhập thất bại do ${errorMessage}, bạn vui lòng kiểm tra lại thông tin và thử lại!!!`
      );

      userNameInput.current.value = "";
      passwordInput.current.value = "";
    }
  };

  useEffect(() => {
    const loginHandler = async () => {
      const response = await createAxiosInstance().get("api/user/login");
      console.log("responeLoginGet:",response)
      dispatch(setStatusLogin(response.data));
    };
    loginHandler();
  }, [dispatch]);

  const [PasswordInputType, ToggleIcon] = PasswordField();

  return (
    <Modal>
      <div
        className={`${props.className} z-30 w-screen h-screen fixed top-0 bg-black bg-opacity-75 flex justify-center items-center`}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            props.togglePopupLogin();
          }
        }}
      >
        <div className="flex flex-col justify-center items-center md:flex-row">
          {/* block 1 */}
          <div className=" flex justify-center item-center order-2 md:order-1">
            <img
              src={bgCoffee}
              alt=""
              className="w-[294px] h-[174px] object-cover rounded-b-2xl md:w-full md:h-auto md:rounded-none md:rounded-l-2xl"
            />
          </div>
          {/* block 2 */}
          <div className="flex justify-center items-center order-1 md:order-2">
            <div className="w-[294px] h-[225px] rounded-t-2xl md:w-[382px] md:h-[505px] md:relative md:rounded-none md:rounded-r-2xl bg-beige100 flex justify-center items-center order-1 md:order-2">
              <div className="md:ml-[10px] text-center">
                <div
                  onClick={() => {
                    props.togglePopupLogin();
                  }}
                  className="md:absolute md:top-3 md:right-10"
                >
                  <p className="mt-[3px] mr-[-20px] text-black text-opacity-60 text-[20px] text-end hover:text-brown cursor-pointer md:text-[25px]">
                    x
                  </p>
                </div>
                <div className="">
                  <p className="mt-[-20px] text-orange text-b7 text-center md:text-b5 md:text-start">
                    Đăng nhập
                  </p>
                </div>
                {/* username input */}
                <div className="">
                  <input
                    ref={userNameInput}
                    className="w-[198px] h-[32px] mt-[18px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-solid border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13"
                    type="text"
                    placeholder="Nhập Username"
                  />
                </div>
                {/* password */}
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
               
                <div className="">
                  <AppButton
                    className="w-full h-[32px] mt-[7px] text-b17 flex items-center rounded-md text-white md:w-[342px] md:h-[53px] md:text-b10"
                    text="Đăng nhập"
                    onClick={submitHandler}
                  />
                </div>
                {isProcessing && <ColorRing width={50} />}

                <div className="md:absolute md:bottom-3">
                  <p className="mt-[8px] mb-[8px] text-orange text-[11px] text-center ">
                    Đăng ký
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default LoginPopup;
