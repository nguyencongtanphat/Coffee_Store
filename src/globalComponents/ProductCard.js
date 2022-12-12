import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { createAxiosInstance, errorNoti, FormatterService, successNoti } from "../service";
import styles from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";
import { CartContext, UserContext } from "../store/Context";
import { addNewProductCart, fetchCartFromServer } from "../store/Actions";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const [appState, dispatch] = useContext(UserContext);
  const [cartState, cartDispatch] = useContext(CartContext);

  const addProductToCartHandler = async () => {
    try {
      if (appState.isLogin) {
        const item = {
          ItemID: props.id,
          Price: props.price,
          Size: "Small",
          CustomerID: appState.id,
          Quantity: 1,
        };
        console.log("item: ", item);
        cartDispatch(addNewProductCart(item));
        //update cart
        const response = await createAxiosInstance().get(`api/cart/${appState.id}`);
        console.log("cart response:", response);
        const listCart = response.data.data;
        cartDispatch(fetchCartFromServer(listCart));
        successNoti("Đã thêm vào giỏ hàng thành công!!!");
      } else {
        errorNoti("Bạn cần đăng nhập để thực hiện thao tác này");
      }
    } catch (e) {
      errorNoti(`Đã có lỗi xảy ra do ${e.message} xin thử lại sau!! `);
    }
  };

  return (
    <div
      className={`lg:w-[17rem] lg:max-h-[22rem] overflow-hidden 
                w-[9.5rem] rounded-2xl m-4 bg-white transition-shadow shadow-lg shadow-grey300 hover:bg-gray-100 
                ${props.className}`}
    >
      <div className="">
        <img
          src={props.avtSrc}
          alt="This is a product avatar"
          className={`${styles.productImg} w-[8.5rem] my-4 mx-2 max-h-28
                    lg:m-4 lg:max-h-48 lg:max-w-60 lg:w-60 rounded-2xl`}
        />
      </div>

      <div className="p-2 lg:p-4">
        <p
          className="text-b11 lg:text-b8 text-grey200 hover:text-grey100 h-11 cursor-pointer"
          onClick={() => {
            console.log("click");
            navigate(`/products/${props.id}}`);
          }}
        >
          {props.name}
        </p>
        <p className="text-b11 lg:text-b9 text-grey300">{props.category}</p>
        <div className="flex justify-between mt-1">
          <p className="text-orange text-b9 pt-1 lg:text-b7">
            {FormatterService.format(props.price)}
          </p>
          <button
            className="border-none bg-transparent cursor-pointer "
            onClick={addProductToCartHandler}
          >
            <FontAwesomeIcon icon={faPlusCircle} color="orange" size="2x" />
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  avtSrc: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

ProductCard.defaultProps = {
  avtSrc: "Error product",
  name: "Error product name",
  category: "Error product category",
  price: 0,
};

export default ProductCard;
