import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./Checkout.css";
import { useAlert, useAuth, useCart } from "../../context";
import { CartBill } from "../Cart/components";
import CheckoutCourseCard from "./components/CheckoutCourseCard";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../auth/utils/formInputUtils";

const Checkout = () => {
  const { cartProducts } = useCart();
  const { user } = useAuth();
  const { setAlertList } = useAlert();
  const [isBuyingForSomeoneElse, setIsBuyingForSomeoneElse] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [isEditEmail, setIsEditEmail] = useState(true);
  const navigate = useNavigate();

  if (!(cartProducts.length > 0)) {
    navigate("/", { replace: true });
  }

  const saveEmailHandler = () => {
    if (validateEmail(inputEmail)) {
      setIsEditEmail(false);
    } else {
      setAlertList((prev) => [
        ...prev,
        { id: uuid(), type: "error", message: "enter valid email address" },
      ]);
    }
  };

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
              {isBuyingForSomeoneElse ? (
                <div className="email-input-wrapper">
                  {isEditEmail ? (
                    <>
                      <input
                        type="email"
                        placeholder="Email..."
                        value={inputEmail}
                        onChange={(e) => setInputEmail(e.target.value)}
                      />
                      <button
                        className="btn btn-solid-primary"
                        onClick={saveEmailHandler}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="fw-b">{inputEmail}</span>
                      <button
                        className="btn btn-solid-primary"
                        onClick={() => setIsEditEmail(true)}
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <span className="fw-b">{user.email}</span>
              )}
            </p>
            <div>
              <input
                type="checkbox"
                id="other-user"
                checked={isBuyingForSomeoneElse}
                onChange={() =>
                  setIsBuyingForSomeoneElse(!isBuyingForSomeoneElse)
                }
              />
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
        {/* using same bill as cart */}
        <CartBill />
      </div>
    </div>
  );
};

export default Checkout;
