import React from "react";
import AppButton from "../../../globalComponents/AppButton";
import PageTitle from "../../../globalComponents/PageTitle";
import Item from "../components/Item";
import leafBgR from "../../../assests/images/global/leaf-bg-right.png";
import leafBgL from "../../../assests/images/global/leaf-bg-left.png";
import HttpService, {
  createAxiosInstance,
  FormatterService,
} from "../../../service";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../../globalComponents/LoadingSpinner";

function DetailOrder() {
  const [dtInfo, setDtInfo] = useState({});
  let { orderId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await createAxiosInstance().get(`api/order/${orderId}`);
      console.log("response", response.data);
      setDtInfo(response.data.Orders);
    }
    fetchData();
  }, []);

  const FormatDate = (date) => {
    const unFormattedDate = new Date(date);
    const yyyy = unFormattedDate.getFullYear();
    let mm = unFormattedDate.getMonth() + 1; // Months start at 0!
    let dd = unFormattedDate.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return dd + "/" + mm + "/" + yyyy;
  };
  console.log("data info:", dtInfo);
  return Object.keys(dtInfo).length !== 0 ? (
    <div className="w-full relative">
      <img
        src={leafBgR}
        alt=""
        className="absolute hidden top-0 right-0 -z-10 md:block md:w-[300px] lg:w-[400px]"
      />
      <img
        src={leafBgL}
        alt=""
        className="absolute hidden top-0  rotate-90 -z-10 md:block md:w-[300px] lg:w-[400px] "
      />
      <div className="flex flex-col items-center p-2">
        <PageTitle title="Chi tiết đơn hàng"></PageTitle>
        <div className="lg:ml-[-460px]">
          <p className="text-b11 md:text-b9 text-grey200 flex my-2 lg:mx-0">
            Ngày:&nbsp;
            <span className="text-orange">{FormatDate(dtInfo.created_at)}</span>
          </p>
          <p className="text-b11 md:text-b9 text-grey200 flex my-2 lg:mx-0">
            Số điện thoại:&nbsp;
            <span className="text-orange">{dtInfo.PhoneNumber}</span>
          </p>
          <p className="text-b11 md:text-b9 text-grey200 flex my-2 lg:mx-0">
            Địa chỉ:&nbsp;<span className="text-orange">{dtInfo.Address}</span>
          </p>
        </div>
        <h2 className="text-b12 text-grey300 md:text-b6 my-1">
          Các món đã mua
        </h2>
        <div className="w-[90%] lg:w-[60%]">
          <ul className="list-none p-0 max-h-[70vh] overflow-auto">
            {dtInfo.DetailOrder?.map((item) => (
              <li className="my-3">
                <Item itemInfo={item} />
                <hr className="mt-3"></hr>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-end justify-center p-2">
          <span className=" text-b10 font-bold mr-1 leading-6 md:text-b8">
            Tổng tiền:
          </span>
          <span className="text-b5 md:text-b3 text-orange">
            {FormatterService.format(dtInfo.TotalAmount)}
          </span>
        </div>
      </div>
    </div>
  ) : (
    <LoadingSpinner />
  );
}

export default DetailOrder;
