import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./";
import { wishlistHandlers } from "./utils/wishlistUtils";

const WishlistContext = createContext(null);

const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
  const { encodedToken } = useAuth();
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    encodedToken &&
      wishlistHandlers.getWishlist(encodedToken, setWishlistProducts);
  }, [encodedToken]);

  return (
    <WishlistContext.Provider
      value={{ wishlistProducts, wishlistHandlers, setWishlistProducts }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, useWishlist };
