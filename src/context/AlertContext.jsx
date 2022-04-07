import { createContext, useContext, useState } from "react";

const AlertContext = createContext(null);

const useAlert = () => useContext(AlertContext);

const AlertProvider = ({ children }) => {
  const [alertList, setAlertList] = useState([]);

  return (
    <AlertContext.Provider value={{ alertList, setAlertList }}>
      {children}
    </AlertContext.Provider>
  );
};

export { useAlert, AlertProvider };
