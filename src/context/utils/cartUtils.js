import axios from "axios";
import { v4 as uuid } from "uuid";

// it checks whether a product is in cart or not
const isProductInCart = (product, cartProducts) => {
  return cartProducts.some((item) => item._id == product._id);
};

// fetches cart items through api and set cart products state is response is 200
const getCart = async (encodedToken, setCartProducts) => {
  try {
    const response = await axios.get("/api/user/cart", {
      headers: {
        authorization: encodedToken,
      },
    });
    setCartProducts(response.data.cart);
  } catch (error) {
    console.log(error);
  }
};

// add product to cart in backend and also updates the cart state
const addToCart = async (
  product,
  encodedToken,
  setCartProducts,
  setAlertList
) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    setCartProducts(response.data.cart);
    setAlertList((prev) => [
      ...prev,
      { id: uuid(), type: "success", message: "Item added to cart" },
    ]);
  } catch (error) {
    setAlertList((prev) => [
      ...prev,
      { id: uuid(), type: "error", message: error.response.message },
    ]);
  }
};

// it deletes an item from cart in backend and also update the cart state
const removeFromCart = async (
  product,
  encodedToken,
  setCartProducts,
  setAlertList
) => {
  try {
    const response = await axios.delete(`/api/user/cart/${product._id}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    setCartProducts(response.data.cart);
    setAlertList((prev) => [
      ...prev,
      { id: uuid(), type: "success", message: "Item removed from cart" },
    ]);
  } catch (error) {
    setAlertList((prev) => [
      ...prev,
      { id: uuid(), type: "error", message: error.response.message },
    ]);
  }
};

// it increases or decreases the quantity of an item in cart
const productQuantityHandler = async (
  product,
  encodedToken,
  setCartProducts,
  setAlertList,
  type
) => {
  if (type == "decrement" && product.qty == 1) {
    if (
      confirm(
        "Following product will be removed from the cart. Are you sure you want to continue ?"
      )
    ) {
      try {
        const response = await axios.delete(`/api/user/cart/${product._id}`, {
          headers: {
            authorization: encodedToken,
          },
        });
        setCartProducts(response.data.cart);
        setAlertList((prev) => [
          ...prev,
          { id: uuid(), type: "success", message: "Item removed from cart" },
        ]);
      } catch (error) {
        setAlertList((prev) => [
          ...prev,
          { id: uuid(), type: "error", message: error.response.message },
        ]);
      }
    }
  } else {
    try {
      const response = await axios.post(
        `/api/user/cart/${product._id}`,
        {
          action: {
            type,
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setCartProducts(response.data.cart);
    } catch (error) {
      setAlertList((prev) => [
        ...prev,
        { id: uuid(), type: "error", message: error.response.message },
      ]);
    }
  }
};

export const cartHandlers = {
  addToCart,
  getCart,
  removeFromCart,
  productQuantityHandler,
  isProductInCart,
};
