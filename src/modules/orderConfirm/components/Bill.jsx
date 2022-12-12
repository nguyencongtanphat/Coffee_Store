import React from 'react'
import Item from './Item'
import { FormatterService } from "../../../service";

export default function Bill({ cat, totalAmount, ship }) {
  return (
    <div className=" bg-[#FAFAFA] rounded-3xl p-5 m-4 md:p-8 pb-10 border-spacing-2 border-grey300 border-solid md:rounded-[25]">
      <h1 className="text-orange text-b10 align-middle text-center md:text-b5 md:mb-10">
        Hoá đơn
      </h1>
      <h2 className="text-b12 text-orange mt-4 md:text-b7">Các món đã chọn</h2>
      <hr className="border-solid border-orange w-14 mt-1 md:my-2" />
      <div>
        {cat.map((item) => (
          <div>
            <Item item={item} key={item.id} />
            <hr className="border-solid border-grey400 md:my-2" />
          </div>
        ))}
      </div>
      <h2 className="text-b12 text-orange mt-4 md:text-b7">Tổng cộng</h2>
      <hr className="border-solid border-orange w-14 mt-1 md:my-2" />
      <div className="flex">
        <div className="flex-auto w-64">
          <h1 className="text-b15 text-grey200 m-2 ml-4 md:text-b10 md:ml-7">
            Thành tiền:
          </h1>
        </div>
        <div className="flex-auto text-end">
          <p className="text-end text-b13 text-black mt-1.5 ml-7 md:ml-7 md:text-b9">
            {FormatterService.format(totalAmount - ship)}
          </p>
        </div>
      </div>
      <hr className="border-solid border-grey400 md:my-2" />
      <div className="flex">
        <div className="flex-auto w-64">
          <h1 className="text-b15 text-grey200 ml-4 m-2 md:text-b10 md:ml-7">
            Phí vận chuyển:
          </h1>
        </div>
        <div className="flex-auto ">
          <p className="text-end text-b13 text-black mt-1.5 ml-7 md:text-b9 md:ml-7">
            {FormatterService.format(ship)}
          </p>
        </div>
      </div>
      <hr className="border-solid border-grey400 md:my-2" />
      <div className="flex">
        <div className="flex-auto w-64">
          <h1 className="text-b12 text-orange ml-4 m-2 md:text-b7 md:ml-7">
            Tổng cộng:
          </h1>
        </div>
        <div className="flex-auto ">
          <h1 className="text-end text-b10 text-orange mt-1.5 ml-7 md:text-b7 md:ml-7">
            {FormatterService.format(totalAmount)}
          </h1>
        </div>
      </div>
    </div>
  );
}