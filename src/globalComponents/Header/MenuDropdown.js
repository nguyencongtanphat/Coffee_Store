import {
  faAddressCard,
  faArrowRightFromBracket,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { setStateLogOut } from "../../store/Actions";
import { UserContext } from "../../store/Context";

const MenuDropdown = (props) => {
  const [appState, dispatch] = useContext(UserContext);

  const logoutHandler = () => {
    const confirm = window.confirm(
      "Bạn có chắc muốn đăng xuất khỏi ứng dụng!!!"
    );
    if (confirm) {
      localStorage.removeItem("accessToken");
      dispatch(setStateLogOut());
      props.onClose();
    }
  };

  return (
    <div className={`${props.open ? "flex" : "hidden"
      } w-full h-screen absolute z-30
    `}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          props.onClose();
        }
      }}
    >

      <div
        className={`rounded-lg w-64
            absolute top-[55vh] right-12 opacity-90 border border-solid
        `}
        style={{ backgroundColor: "#F4D8B2" }}
      >
        <span
          className="absolute right-3 -top-2.5"
          style={{
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderBottom: "10px solid black",
          }}
        >
          <span className="absolute top-px -right-2"
            style={{
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderBottom: "8px solid #F4D8B2",
            }}
          >

          </span>
        </span>
        <div className="flex max-w-full flex-col ml-4 ">
          <div className="flex mt-4" onClick={() => props.onClose()}>
            <FontAwesomeIcon icon={faAddressCard} size="lg" color="black" />
            <Link
              className="no-underline ml-4 text-black 
                    hover:underline underline-offset-4 decoration-2"
              to="account"
            >
              Thông tin cá nhân
          </Link>
          </div>
          <div className="flex my-4" onClick={() => props.onClose()}>
            <FontAwesomeIcon icon={faClockRotateLeft} size="lg" color="black" />
            <Link
              className="no-underline ml-5 text-black 
                    hover:underline underline-offset-4 decoration-2"
              to="orders"
            >
              Lịch sử mua hàng
          </Link>
          </div>
          <div className="flex mb-4" onClick={logoutHandler}>
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              size="lg"
              color="black"
            />
            <Link
              className="no-underline ml-4 text-black 
                    hover:underline underline-offset-4 decoration-2"
            >
              Đăng xuất
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDropdown;
