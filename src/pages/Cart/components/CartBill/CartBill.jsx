import { useState, useEffect } from "react";

import "./CartBill.css";
import { useCart } from "../../../../context";
import { cartDiscount, cartInitialPrice, cartTotal } from "./cartBillUtils";

const CartBill = () => {
  const { cartProducts } = useCart();

  const [billDetails, setBillDetails] = useState({
    initialPrice: 0,
    discount: 0,
    total: 0,
  });

  useEffect(() => {
    const totalInitialPrice = cartInitialPrice(cartProducts);
    const totalDiscount = cartDiscount(cartProducts);
    const totalPrice = cartTotal(cartProducts);

    setBillDetails({
      total: totalPrice,
      initialPrice: totalInitialPrice,
      discount: totalDiscount,
    });
  }, [cartProducts]);

  return (
    <section className="cart-bill">
      <h3 className="text-center">Cart Total</h3>
      <div className="detail text-muted">
        Initial price :{" "}
        <span className="cart-initial-price">₹{billDetails.initialPrice}</span>
      </div>
      <div className="detail text-muted">
        Discount: <span className="cart-discount">₹{billDetails.discount}</span>
      </div>
      <div className="detail fw-b">
        Final Price:{" "}
        <span className="cart-total-price">₹{billDetails.total}</span>
      </div>
      <button className="btn btn-solid-primary">Checkout</button>
    </section>
  );
};

export default CartBill;
