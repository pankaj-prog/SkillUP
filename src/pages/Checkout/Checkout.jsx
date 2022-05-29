import React from "react";
import "./Checkout.css";
import { useAuth, useCart } from "../../context";
import { CartBill } from "../Cart/components";
import CheckoutCourseCard from "./components/CheckoutCourseCard";

const Checkout = () => {
  const { cartProducts, setCartProducts } = useCart();

  return (
    <div className="content-width">
      <h3 className="section-heading gutter-bottom-16 text-center">Checkout</h3>
      <div className="checkout-wrapper">
        <div>
          <section className="checkout-user-details gutter-bottom-24">
            <h4 className="checkout-section-heading gutter-bottom-16">
              User details
            </h4>
            <p>Course details will be sent to following email address:</p>
            <p className="checkout-user-wrapper gutter-bottom-8">
              <span className="fw-b">guestuser@gmail.com</span>
            </p>
            <div>
              <input type="checkbox" id="other-user" />
              <label htmlFor="other-user">Buying course for someone else</label>
            </div>
          </section>
          <section className="checkout-products-wrapper">
            <h4 className="checkout-section-heading gutter-bottom-16">
              Items overview
            </h4>
            <div className="checkout-items-wrapper ">
              {cartProducts.map((product) => (
                <CheckoutCourseCard key={product._id} product={product} />
              ))}
            </div>
          </section>
        </div>
        <CartBill />
      </div>
    </div>
  );
};

export default Checkout;
