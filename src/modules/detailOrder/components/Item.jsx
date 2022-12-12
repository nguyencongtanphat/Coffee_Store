import React from 'react'
import { FormatterService } from "../../../service";

function Item(item) {
  //const { Price, Quantity, Size } = item.itemInfo;
  //const { Image, Name } = item.itemInfo.Item;
  //console.log('JJJ', Price)
  console.log("item:", item)
  let productPrice = Number(item.itemInfo.Price);
    
  return (
    <div className="flex items-center justify-round md:justify-start ">
        <img
            src={item.itemInfo.Item.Image} 
            alt="coffee order"
            className="w-20 h-20 mr-3 rounded-2xl md:mr-6 md:w-32 md:h-32"
        />
        <div
            className="text-b13 text-grey200 flex flex-col space-y-1 flex-1
                            md:flex-row md:items-center md:justify-start md:text-b7"
        >
            <div className="flex flex-1 flex-col space-y-1 md:space-y-3">
            <p className="text-orange">{item.itemInfo.Item.Name}</p>
            <p>Size: {item.itemInfo.Size}</p>
            </div>

            <div className="flex  flex-col space-y-1 sm:w-[150px] md:space-y-3 md:w-[200px]">
            <p>Số lượng: {item.itemInfo.Quantity}</p>
            <p>
                Thành tiền: 
                <span className="text-orange">
                {FormatterService.format(productPrice)}
                </span>
            </p>
            </div>
        </div>
    </div>
  );
  }
export default Item;

{/*import React from 'react'

function Item(props) {
  const {name, size, number, price} = props;
  return (
    <div className="flex items-center justify-around md:justify-start">
      <img
        src="https://product.hstatic.net/1000075078/product/1639377770_cfsua-nong_5029ddcaf58840199c80c173c40bfc4c_large.jpg"
        alt="coffee order"
        className="w-20 h-20 md:w-32 md:h-32 rounded-2xl mr-2"
      />
      <div
        className="text-b13 text-grey200 flex flex-col space-y-1 flex-1
                        md:flex-row md:items-center md:justify-around md:text-b7"
      >
        <div className="flex flex-col space-y-1 md:space-y-3">
          <p className="text-orange">{name}</p>
          <p>Size: {size}, Topping: Sốt Caramel</p>
        </div>
        <div className="flex flex-col space-y-1 md:space-y-3">
          <p>Số lượng: {number}</p>
          <p>
            Thành tiền:
            <span className="text-orange">{price}</span>
          </p>
        </div>
      </div>
    </div>
  );

export default Item*/}