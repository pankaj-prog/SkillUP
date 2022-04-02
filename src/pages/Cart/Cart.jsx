import React from "react";
import { v4 as uuid } from "uuid";

import "./Cart.css";
import { CourseCartCard, CartBill } from "./components";
import { useAuth, useCart } from "../../context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { encodedToken } = useAuth();
  const { cartProducts, setCartProducts } = useCart();
  const navigate = useNavigate();

  return (
    <main>
      {encodedToken ? (
        <div className="content-width">
          <h3 className="section-heading gutter-bottom-16 text-center">
            Courses in your cart
          </h3>
          {cartProducts.length > 0 ? (
            <div className="cart-wrapper">
              <section className="cart-items-wrapper gutter-bottom-8">
                {cartProducts.map((product) => (
                  <CourseCartCard key={product._id} product={product} />
                ))}
              </section>
              <CartBill />
            </div>
          ) : (
            <div className="text-center">
              <h3>Your cart is currently empty 😢</h3>
              <p className="gutter-bottom-8">
                Before proceeding to checkout, you must add some products to
                your cart.{" "}
              </p>
              <button
                className="btn btn-solid-primary"
                onClick={() => navigate("/courses")}
              >
                Start Shopping
              </button>
            </div>
          )}{" "}
        </div>
      ) : (
        <div className="signin-message-wrapper content-width">
          {" "}
          <h3>Please login first to access the cart</h3>
          <button
            className="btn btn-solid-primary"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </button>
        </div>
      )}
    </main>
  );
};

export default Cart;
