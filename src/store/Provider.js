import { useReducer } from "react";
import { CartContext, UserContext } from "./Context";
import { CookiesProvider } from "react-cookie";
import {
  initAppState,
  AppReducer,
  initCartState,
  CartReducer,
} from "./Reducer";

const Provider = ({ children }) => {
  const [appState, appDispatch] = useReducer(AppReducer, initAppState);
  const [cartState, cartDispatch] = useReducer(CartReducer, initCartState);
  return (
    <UserContext.Provider value={[appState, appDispatch]}>
      <CookiesProvider>
        <CartContext.Provider value={[cartState, cartDispatch]}>
          {children}
        </CartContext.Provider>
      </CookiesProvider>
    </UserContext.Provider>
  );
};

export default Provider;
