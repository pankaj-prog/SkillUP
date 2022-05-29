import { v4 as uuid } from "uuid";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const makePayment = async ({
  price,
  clearCart,
  navigate,
  setAlertList,
}) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  if (!res) {
    setAlertList((prev) => [
      ...prev,
      {
        id: uuid(),
        type: "error",
        message: "You are offline!, please check your internet",
      },
    ]);
    return;
  }

  const options = {
    key: process.env.REACT_APP_RAZORPAY_API_KEY,
    amount: price * 100,
    currency: "INR",
    name: "SkillUp_Store",
    description: "Shopping With skill up store",

    handler: async function (response) {
      const paymentId = response.razorpay_payment_id;
      clearCart();
      navigate("/");
      setAlertList((prev) => [
        ...prev,
        { id: uuid(), type: "success", message: "Order placed succesfully" },
      ]);
    },

    prefill: {
      name: "SkillUp_Store",
      email: "buy@skillupstore.com",
      contact: "9999999999",
    },
    notes: {
      address: "Skill up store",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
