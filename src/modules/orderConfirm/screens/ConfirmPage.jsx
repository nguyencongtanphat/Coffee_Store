import React, { useState } from "react";
import AppButton from "../../../globalComponents/AppButton";
import Bill from "../components/Bill";
import CustomerInfo from "../components/CustomerInfo";
import PageTitle from "../../../globalComponents/PageTitle";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext, UserContext } from "../../../store/Context";
import left from "../../../assests/images/orderConfirm/left.png";
import right from "../../../assests/images/orderConfirm/right.png";
import havetoadd from "../../../assests/images/orderConfirm/havetoadd.png";
import { useEffect } from "react";
import { createAxiosInstance, errorNoti, successNoti } from "../../../service";
import { deleteProductCart } from "../../../store/Actions";
import { useRef } from "react";

export default function ConfirmPage() {
  // khai báo biến lưu dữ liệu ng dùng nhập
  const userName = useRef("");
  const userPhone = useRef("");
  const userAddress = useRef("");

  //hàm check valid
  const isValid = (input) => {
    let className = input.current.className;
    if (input.current.value === "") {
      className = className.replace(" border-grey300 ", " border-rose-600 ");
      className = className.replace(" border-solid ", " border-2 ");
      input.current.className = className;
      return false;
    } else {
      className = className.replace(" border-rose-600 ", " border-grey300 ");
      className = className.replace(" border-2 ", " border-solid ");
      input.current.className = className;
      return true;
    }
  };

  const isNumber = (input) => {
    let className = input.current.className;
    if (isNaN(input.current.value) || input.current.value.length !== 10) {
      className = className.replace(" border-grey300 ", " border-rose-600 ");
      className = className.replace(" border-solid ", " border-2 ");
      input.current.className = className;
      return false;
    } else {
      className = className.replace(" border-rose-600 ", " border-grey300 ");
      className = className.replace(" border-2 ", " border-solid ");
      input.current.className = className;
      return true;
    }
  };

  const navigate = useNavigate();
  const location = useLocation();

  //const [listProducts, ] = useState(location.state);
  let listProducts = location.state;
  if (listProducts) {
    listProducts = listProducts.map((item) => {
      return {
        id:item.id,
        ID: item.ItemID,
        Quantity: item.Quantity,
        Size: item.Size,
        Price: item.Price,
        Item: item.Item,
      };
    });
  }
  console.log("uselocation data", listProducts);
  const [appState] = useContext(UserContext);
  console.log("dataInfo", appState);
  const [totalAmount, setTotalAmount] = useState(0);
  const ship = 15000;
  const [, cartDispatch] = useContext(CartContext);
  useEffect(() => {
    if (listProducts) {
      let sum = 0;
      listProducts.forEach((item) => {
        sum += item.Price * item.Quantity;
      });
      setTotalAmount(sum + ship);
    }
  }, [listProducts]);

  //lưu thông tin người dùng khi chưa đăng nhập
  const submitHandler = async () => {
    try {
      let isUserName = isValid(userName);
      let isUserAddress = isValid(userAddress);
      let isUserPhone = isValid(userPhone);
      let isPhone = isNumber(userPhone);
      if (isUserName && isUserAddress && isUserPhone && isPhone) {
        const orderInfo = {
          FullName: userName.current.value,
          Address: userAddress.current.value,
          PhoneNumber: userPhone.current.value,
          Items: listProducts,
          TotalAmount: totalAmount,
          CustomerType: "Non-Member",
        };
        const responseOrder = await createAxiosInstance().post(
          `order/create`,
          orderInfo
        );
       orderSuccessHandler(responseOrder.data.Order.id);
      } else {
        !isPhone
          ? errorNoti("Số điện thoại của bạn chưa hợp lệ!")
          : errorNoti("Bạn cần nhập đầy đủ thông tin!!!");
      }
    } catch (e) {
      const message = e.response.data;
      errorNoti(`Đặt hàng thất bại do ${message}. Vui lòng thử lại!!`);
    }
  };

  const orderSuccessHandler = (id) => {
    successNoti("Bạn đã đặt hàng thành công!!!");
    navigate(`/orders/${id}`);
  };

  const orderHandler = async () => {
    if (!appState.isLogin) {
      submitHandler();
    } else {
      try {
        const orderInfo = {
          Items: listProducts,
          CustomerType: "Member",
          CustomerID: appState.id,
          PhoneNumber: appState.phoneNumber,
          Address: appState.address[0].Value,
          TotalAmount: totalAmount,
        };

        console.log("thong tin trc khi gui:", orderInfo);
        //post new order to db
        const responseOrder = await createAxiosInstance().post(
          `order/create`,
          orderInfo
        );
        console.log("thong tin don hang sau khi gui:", responseOrder.data.Order.id);
        //delete product from cart db
        const listIdDeleted = listProducts.map(item => item.id)
        console.log("listIdDelete: " + listIdDeleted)
        const response = await createAxiosInstance().delete("cart", {
          data: {
            IDs: listIdDeleted,
          },
        });

        console.log("response delete cart:", response);
        //update cart state
        cartDispatch(deleteProductCart(listProducts));

        orderSuccessHandler(responseOrder.data.Order.id);
      } catch (e) {
        errorNoti(
          "Đã có lỗi xảy ra trong quá trình đặt xin hay thử lại trong giây lát " +
            e.message
        );
      }
    }
  };

  return listProducts ? (
    <div className="flex flex-col align-center">
      <PageTitle title="XÁC NHẬN ĐƠN HÀNG" class="justify-center w-fit" />
      <div class="md:flex md:ml-10 md:m-4 mt-0">
        <div class="md:flex-initial md:w-[35%] md:p-10 md:h-full md:mt-0">
          {/* kiểm tra nếu đã đăng nhập thì lấy thông tin đã có, ngược lại thì để trống cho ng dùng nhập */}
          {appState.isLogin ? (
            <CustomerInfo
              name={appState.fullName}
              phone={appState.phoneNumber}
              address={appState.address[0].Value}
            />
          ) : (
            <div className="m-4 rounded-xl p-5 pb-1.5">
              <h1 className="text-orange text-b10 align-middle text-center mb-2 md:mb-10 md:text-b5">
                Thông tin nhận hàng
              </h1>
              <div className="p-2 md:m-3">
                <label
                  for="name"
                  class="block mb-1.5 text-sm font-Lexend text-black text-b14 md:text-b10 md:text-bold "
                >
                  Họ và tên người nhận
                </label>
                <input
                  ref={userName}
                  type="text"
                  id="first_name"
                  class="bg-white border-spacing-0.5 border-solid border-grey300 text-b16 text-[#6C6A6A] rounded-lg focus:ring-orange focus:border-orange block w-11/12 p-3 mt-0.5 md:text-b11 md:w-full md:p-4"
                  placeholder={"Nhập tên người nhận"}
                  required
                />
              </div>

              <div className="p-2 md:m-3">
                <label
                  for="name"
                  class="block mb-1.5 text-sm font-Lexend text-black text-b14 md:text-b10 md:text-bold "
                >
                  Số điện thoại người nhận
                </label>
                <input
                  ref={userPhone}
                  type="tel"
                  id="first_name"
                  class="bg-white border-spacing-0.5 border-solid border-grey300 text-b16 text-[#6C6A6A] rounded-lg focus:ring-orange focus:border-orange block w-11/12 p-3 mt-0.5 md:text-b11 md:w-full md:p-4"
                  placeholder="Nhập số điện thoại người nhận"
                  required
                />
              </div>

              <div className="p-2 md:m-3">
                <label
                  for="name"
                  class="block mb-1.5 text-sm font-Lexend text-black text-b14 md:text-b10 md:text-bold "
                >
                  Số địa chỉ nhận hàng
                </label>
                <input
                  ref={userAddress}
                  type="tel"
                  id="first_name"
                  class="bg-white border-spacing-0.5 border-solid border-grey300 text-b16 text-[#6C6A6A] rounded-lg focus:ring-orange focus:border-orange block w-11/12 p-3 mt-0.5 md:text-b11 md:w-full md:p-4"
                  placeholder="Nhập địa chỉ nhận hàng"
                  required
                />
              </div>
            </div>
          )}
        </div>
        <div class="md:flex-initial md:h-full md:w-6/12 md:ml-10 flex flex-col justify-center items-center">
          <Bill
            class=" md:pl-10 md:ml-20"
            totalAmount={totalAmount}
            ship={ship}
            cat={listProducts}
          />

          <AppButton
            text="Đặt hàng"
            onClick={orderHandler}
            className="w-fit text-white"
          />
        </div>
      </div>
      <img
        src={right}
        alt=""
        className="absolute hidden top-[70px] right-0 -z-10 md:block md:w-[200px] lg:w-[230px]"
      />
      <img
        src={left}
        alt=""
        className="absolute hidden bottom-[-200px]  -z-10 md:block md:w-[250px] lg:w-[300px] "
      />
    </div>
  ) : (
    <div className="flex items-center flex-col">
      <img src={havetoadd} className="w-[40%] mx-auto block" alt=""></img>
      <h2 className="text-center text-h2 mt-3 mb-3 text-orange">
        Bạn cần chọn ít nhất một sản phẩm trong Giỏ hàng để Xác nhận đơn hàng!!!
      </h2>
      <AppButton text="Giỏ hàng" className="bg-orange mt-3 mb-10" />
    </div>
  );
}
