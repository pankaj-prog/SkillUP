import axios from "axios";
import { v4 as uuid } from "uuid";

const isProductInWishlist = (product, wishlistProducts) => {
  return wishlistProducts.some((item) => item._id == product._id);
};

// fetches wishlist items through api and set wishlist products state is response is 200
const getWishlist = async (encodedToken, setWishlistProducts) => {
  try {
    const response = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: encodedToken,
      },
    });
    setWishlistProducts(response.data.wishlist);
  } catch (error) {
    console.log(error);
  }
};

// add product to wishlist in backend and also updates the wishlist state
const addToWishlist = async (
  product,
  encodedToken,
  setWishlistProducts,
  setAlertList
) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      {
        product,
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    setWishlistProducts(response.data.wishlist);
    setAlertList((prev) => [
      ...prev,
      { id: uuid(), type: "success", message: "Item added to wishlist" },
    ]);
  } catch (error) {
    setAlertList((prev) => [
      ...prev,
      { id: uuid(), type: "error", message: error.response.message },
    ]);
  }
};

// it deletes an item from wishlist in backend and also update the wishlist state

const removeFromWishlist = async (
  product,
  encodedToken,
  setWishlistProducts,
  setAlertList
) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    setWishlistProducts(response.data.wishlist);
    setAlertList((prev) => [
      ...prev,
      { id: uuid(), type: "success", message: "Item removed from wishlist" },
    ]);
  } catch (error) {
    setAlertList((prev) => [
      ...prev,
      { id: uuid(), type: "error", message: error.response.message },
    ]);
  }
};

export const wishlistHandlers = {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
  isProductInWishlist,
};
