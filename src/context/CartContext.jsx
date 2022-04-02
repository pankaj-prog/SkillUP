import { createContext, useContext, useEffect, useState } from "react";

import { useAuth } from "./";
import { cartHandlers } from "./utils/cartUtils";

const CartContext = createContext(null);

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const { encodedToken } = useAuth();
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    encodedToken && cartHandlers.getCart(encodedToken, setCartProducts);
  }, [encodedToken]);

  return (
    <CartContext.Provider
      value={{ cartProducts, cartHandlers, setCartProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
