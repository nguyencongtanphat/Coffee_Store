import React,{useState,useEffect} from 'react'
import { FormatterService } from '../../../service'
import OrderItemSummary from './OrderItemSummary'
import orderImg from "../../../assests/images/global/orderImg.png";
import { useNavigate } from "react-router-dom";

const OrderSummary = (props) => {
    const navigate = useNavigate();
    return (
      <div
        className="pb-4 mb-4 lg:pb-8 lg:m-auto lg:w-2/3 lg:flex items-center justify-center"
        style={{ borderBottom: "1px solid #E0E0E0" }}
      >
        <div className="flex lg:flex-col">
          <p className="text-b5 md:text-b3 text-orange">#0{props.index + 1}</p>
          <p className="text-b11 md:text-b9 text-orange flex my-2 mx-4 lg:mx-0">
            <p className="text-black mr-2">Ngày:</p> {props.dateOrder}
          </p>
          <p className="text-b11 md:text-b9 text-orange flex my-2">
            <p className="text-black mr-2">Tổng tiền:</p>{" "}
            {FormatterService.format(props.orderInfo.TotalAmount)}
          </p>
        </div>
        <div className="flex ml-16">
          <img src={orderImg} className="lg:w-28 lg:h-28" alt="" />
          <div className="ml-4">
            {props.orderInfo.DetailOrder.map((orderProduct) => (
              <OrderItemSummary
                name={orderProduct.Item.Name}
                quantity={orderProduct.Quantity}
              />
            ))}
            <p
              className="text-b13 md:text-b9 text-orange cursor-pointer"
              onClick={() => {
                navigate(`${props.orderInfo.id}`);
              }}
            >
              Xem chi tiết
            </p>
          </div>
        </div>
      </div>
    );
}

export default OrderSummary
