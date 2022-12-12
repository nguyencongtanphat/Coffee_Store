import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { FormatterService } from "../../../service";

function Item(props) {
  const { Price, Quantity, Size, id, isChecked, Image, Name } = props.itemInfo;
  const { updateSumBill, toggleItem } = props;
  
  const checkbox = useRef("");

  let productPrice = Number(Price);
  const checkClickHandler = (e) => {
    const checked = e.currentTarget.checked;
    console.log("click", checked, id);
    toggleItem(props.itemInfo, checked);
  };

  return (
    <div
      key={id}
      className={`flex items-center justify-around md:justify-start hover:bg-[#fff6e4] p-2 ${
        isChecked && "bg-[#fff6e4]"
      }`}
    >
      <input
        ref={checkbox}
        onClick={(e) => {
          checkClickHandler(e);
        }}
        checked={isChecked || false}
        type="checkbox"
        name=""
        id={id}
        className="w-7"
      />
      <img
        src={Image}
        alt="coffee order"
        className="w-20 h-20 mr-3 rounded-2xl md:mr-6 md:w-32 md:h-32  "
      />
      <div
        className="text-b13 text-grey200 flex flex-col space-y-1 flex-1
                        md:flex-row md:items-center md:justify-start md:text-b7"
      >
        <div className="flex flex-1 flex-col space-y-1 md:space-y-3">
          <p className="text-orange">{Name}</p>
          <p>Size: {Size}</p>
        </div>
        <div className="flex  flex-col space-y-1 sm:w-[150px] md:space-y-3 md:w-[200px]">
          <p>Số lượng: {Quantity}</p>
          <p>
            Thành tiền:
            <span className="text-orange">
              {FormatterService.format(productPrice * Quantity)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
