import { useContext, createContext, useState } from "react";

const AuthContext = createContext(null);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [encodedToken, setEncodedToken] = useState(
    localStorage.getItem("encodedToken")
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        encodedToken,
        setEncodedToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
