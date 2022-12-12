import {
  faBagShopping,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useContext } from "react";
import { CartContext } from "../store/Context";

function Cart() {
  const [cartState, cartDispatch] = useContext(CartContext);
  console.log("so san pham trong cart:", cartState);
  return (
    <div className="relative">
      <FontAwesomeIcon
        icon={faCartShopping}
        size="xl"
        border
        className="text-orange border-none rounded-full md:my-1"
      />
      <div className="text-orange leading-[100%] p-1 w-4 h-4  text-center absolute bg-white rounded-[50%] top-[-5px] right-[-5px]">
        {cartState?.length||0}
      </div>
    </div>
  );
}

export default Cart