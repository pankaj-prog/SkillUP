import axios from "axios";

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
    if (response.status == 200) {
      setWishlistProducts(response.data.wishlist);
    } else {
      console.log("error from get wishlist", response.status);
    }
  } catch (error) {
    console.log(error);
  }
};

// add product to wishlist in backend and also updates the wishlist state
const addToWishlist = async (product, encodedToken, setWishlistProducts) => {
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
    if (response.status == 201) {
      setWishlistProducts(response.data.wishlist);
    }
  } catch (error) {
    console.log(error);
  }
};

// it deletes an item from wishlist in backend and also update the wishlist state

const removeFromWishlist = async (
  product,
  encodedToken,
  setWishlistProducts
) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (response.status == 200) {
      setWishlistProducts(response.data.wishlist);
    } else {
      console.log("error from get wishlist", response.status);
    }
  } catch (error) {
    console.log(error);
  }
};

export const wishlistHandlers = {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
  isProductInWishlist,
};
