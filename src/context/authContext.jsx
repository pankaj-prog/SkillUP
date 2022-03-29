import { useContext, createContext, useState } from "react";

const AuthContext = createContext(null);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [encodedToken, setEncodedToken] = useState(
    localStorage.getItem("encodedToken")
  );

  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser: setUser,
        encodedToken: encodedToken,
        setEncodedToken: setEncodedToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
