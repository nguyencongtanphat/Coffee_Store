import React from 'react'
import notAuthenImg from "../assests/images/global/NotAuthen.png";

function NotAuthen() {
  return (
    <>
      <h2 className="text-center text-h2 my-3 text-brown">
        Bạn cần đăng nhập để truy cập trang này!!!
      </h2>
      <img src={notAuthenImg} className="w-3/4 mx-auto block" alt=""></img>
    </>
  );
}

export default NotAuthen