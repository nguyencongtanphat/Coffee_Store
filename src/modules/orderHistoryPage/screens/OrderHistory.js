import React, { useEffect, useState } from 'react'
import PageTitle from '../../../globalComponents/PageTitle.jsx'
import { createAxiosInstance, errorNoti } from '../../../service.js'
import OrderSummary from '../components/OrderSummary.js'
import { useContext } from 'react'
import { UserContext } from '../../../store/Context'
import sad_face from '../../../assests/images/global/empty_cart.png'
import AppButton from "../../../globalComponents/AppButton";
import { Link } from "react-router-dom";
import LoadingSpinner from '../../../globalComponents/LoadingSpinner.jsx'

const OrderHistory = () => {
    const [ordersByUser, setOrdersByUser] = useState(null)
    const [appState, dispatch] = useContext(UserContext);

    console.log("customerInfo:", appState);
    const GetOrdersByUser = async () => {
      try{
        if (appState.id){
          console.log("call Api with appState id: " + appState.id)
          const response = await createAxiosInstance().get(
            `api/order/customer/${appState.id}`
          );
          console.log("response", response);
          setOrdersByUser(response.data.Orders.reverse());
        }
      }catch(e){
        errorNoti("Đã có lỗi xảy ra " + e)
      }
        
    }

    const FormatDate = (date) => {
        const unFormattedDate = new Date(date);
        const yyyy = unFormattedDate.getFullYear();
        let mm = unFormattedDate.getMonth() + 1; // Months start at 0!
        let dd = unFormattedDate.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return dd + '/' + mm + '/' + yyyy;
    }

    useEffect(() => {
        GetOrdersByUser()
    }, [appState])

    console.log("fjdhfjahsjfhasjkhd", ordersByUser);
    return (
      ordersByUser ?
      <div>
        <PageTitle title="LỊCH SỬ MUA HÀNG" className="my-8" />
        {ordersByUser.length > 0 ? (
          <div>
            {ordersByUser.map((order, index) => (
              <OrderSummary
                index={index}
                orderInfo={order}
                dateOrder={FormatDate(order.createdAt)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center m-10">
            <img
              src={sad_face}
              alt="Sad Face"
              className="w-full md:w-1/3"
            />
            <p className="text-center text-grey100 text-b7 lg:text-b4  mx-auto lg:w-[58rem]">
              Bạn chưa có đơn hàng nào!! Hãy ủng hộ chúng tôi nhé
            </p>
            <Link to="/" className="no-underline my-10">
              <AppButton text={"Quay về trang chủ"} className="bg-brown text-white" />
            </Link>
          </div>
        )}
      </div> :<LoadingSpinner/> 
    );
}

export default OrderHistory
