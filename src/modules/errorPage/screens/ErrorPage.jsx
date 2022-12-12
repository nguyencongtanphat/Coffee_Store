import { Link, useRouteError } from "react-router-dom";
import React from "react";
import Error from "../../../assests/images/error/Error.png";
import AppButton from "../../../globalComponents/AppButton";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col justify-center items-center m-5">
      {/*<p>
        <i>{error.statusText || error.message}</i>
      </p>*/}
      <img src={Error} className="w-3/4 mt-16 md:mt-2 md:w-1/2" alt=""/>
      <h1 className="text-brown text-center p-5 text-b5 md:text-h1 md:pt-0">Không Tìm Thấy Trang</h1>
      <p className="text-grey200 text-center p-5 pt-1">Xin lỗi, chúng tôi không tìm thấy trang mà bạn yêu cầu...</p>
      <p className="text-grey200 p-5 pt-0">Hãy quay về trang chủ!</p>
      <Link to="/" className="no-underline"><AppButton text={"Quay về trang chủ"} className="bg-brown text-white"/></Link>
    </div>
  );
}
