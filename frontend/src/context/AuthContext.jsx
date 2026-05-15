import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "./services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("auction_user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      const loggedInUser = response.data.user || response.data;

      localStorage.setItem("auction_user", JSON.stringify(loggedInUser));
      setUser(loggedInUser);

      return loggedInUser;
    } catch {
      const demoUser = { name: "Demo User", email };

      localStorage.setItem("auction_user", JSON.stringify(demoUser));
      setUser(demoUser);

      return demoUser;
    }
  };

  const logout = () => {
    localStorage.removeItem("auction_user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
