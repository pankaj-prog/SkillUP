import React, { useEffect } from "react";
import { useAlert } from "../../context";

const Alert = ({ alert }) => {
  const { alertList, setAlertList } = useAlert();

  useEffect(() => {
    setTimeout(() => {
      setAlertList((prev) => {
        return prev.filter((item) => item.id !== alert.id);
      });
    }, 2000);
  }, [alertList]);

  return (
    <div class={`alert alert-${alert.type}`}>
      <i
        class={`fas alert-icon ${
          alert.type == "success" ? "fa-check-circle" : ""
        } ${alert.type == "error" ? "fa-exclamation-triangle" : ""} `}
      ></i>
      <p class="alert-message"> {alert.message}</p>
    </div>
  );
};

export default Alert;
