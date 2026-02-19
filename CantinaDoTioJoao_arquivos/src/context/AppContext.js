import React, { createContext, useState } from "react";

/**
 * AppContext:
 * - user: null (deslogado) ou { role: "student" | "admin" }
 * - login(role): define o perfil
 * - logout(): remove o perfil
 */
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (role) => {
    setUser({ role });
  };

  const logout = () => setUser(null);

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};
