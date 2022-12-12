import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import Header from './globalComponents/Header/Header'
import Footer from './globalComponents/Footer/Footer'
import ScrollTopButton from './globalComponents/ScrollTopButton'
import { useContext } from 'react'
import { CartContext, UserContext } from './store/Context'
import { createAxiosInstance } from './service'
import { fetchCartFromServer } from './store/Actions'
import { ToastContainer } from "react-toastify";


const Root = () => {
  const [appState, dispatch] = useContext(UserContext);
  const [cartState, cartDispatch] = useContext(CartContext);


   useEffect(() => {
     async function fetchData() {
       if (appState.isLogin) {
         const response = await createAxiosInstance().get(
           `cart/${appState.id}`
         );
         const listCart = response.data.data;
         cartDispatch(fetchCartFromServer(listCart));
       }
     }
     fetchData();
   }, [cartDispatch, appState.isLogin, appState.id]);
    
    return (
      <div>
        <Header />
        <div id="detail">
          <Outlet />
        </div>
        <ScrollTopButton />
        <Footer />
        <ToastContainer />
      </div>
    );
}

export default Root
