import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../../store/Context";
import Item from "./Item";

function Table({
  cartListProduct,
  updateSumBill,
  toggleItem,
  toggleSelectAll,
}) {
  


   console.log("render table:", cartListProduct);
  return (
    <div className="w-[90%] lg:w-[60%]">
      <ul className="list-none p-0 max-h-[70vh] overflow-auto">
        {cartListProduct.map((item) => (
          <li className="my-3">
            <Item
              key={item.id}
              itemInfo={item}
              updateSumBill={updateSumBill}
              toggleItem={toggleItem}
              toggleSelectAll={toggleSelectAll}
            />
            <hr className="mt-3"></hr>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Table;
