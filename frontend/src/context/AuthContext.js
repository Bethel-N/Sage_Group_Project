import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token) {
      setIsAuthenticated(true);
      setUserRole(role);
    }
    setIsAuthChecked(true);
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    setUserRole("");
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
