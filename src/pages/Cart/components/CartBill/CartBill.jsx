import { useState, useEffect } from "react";
import "./CartBill.css";
import { useAlert, useAuth, useCart } from "../../../../context";
import {
  cartDiscount,
  cartInitialPrice,
  cartTotal,
  cartTotalQuantity,
} from "./cartBillUtils";
import { useLocation, useNavigate } from "react-router-dom";
import { makePayment } from "./utils/paymentService";

const CartBill = () => {
  const { cartProducts, setCartProducts, cartHandlers } = useCart();
  const { encodedToken } = useAuth();
  const { setAlertList } = useAlert();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // key secret = k3aRGNU4iSxJbKDAFW1ooPbC
  // key id = rzp_test_MKlfphPI3ZeAEn

  const [billDetails, setBillDetails] = useState({
    initialPrice: 0,
    quantity: 0,
    discount: 0,
    total: 0,
  });

  useEffect(() => {
    const totalInitialPrice = cartInitialPrice(cartProducts);
    const totalDiscount = cartDiscount(cartProducts);
    const totalPrice = cartTotal(cartProducts);
    const totalQuantity = cartTotalQuantity(cartProducts);

    setBillDetails({
      total: totalPrice,
      quantity: totalQuantity,
      initialPrice: totalInitialPrice,
      discount: totalDiscount,
    });
  }, [cartProducts]);

  const paymentHandler = () => {
    makePayment({
      price: billDetails.total,
      clearCart: () =>
        cartHandlers.clearCart({
          encodedToken: encodedToken,
          setAlertList,
          setCartProducts,
        }),
      navigate,
      setAlertList,
    });
  };

  return (
    <section className="cart-bill">
      <h3 className="text-center">
        {pathname == "/checkout" ? "Order details" : "Cart Total"}
      </h3>
      <div className="detail text-muted">
        Initial price :{" "}
        <span className="cart-initial-price">₹{billDetails.initialPrice}</span>
      </div>
      <div className="detail text-muted">
        Total items : <span>{billDetails.quantity}</span>
      </div>
      <div className="detail text-muted">
        Discount: <span className="cart-discount">₹{billDetails.discount}</span>
      </div>
      <div className="detail fw-b">
        Final Price:{" "}
        <span className="cart-total-price">₹{billDetails.total}</span>
      </div>
      {pathname == "/checkout" ? (
        <button className="btn btn-solid-primary" onClick={paymentHandler}>
          Proceed to pay
        </button>
      ) : (
        <button
          className="btn btn-solid-primary"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      )}
    </section>
  );
};

export default CartBill;
