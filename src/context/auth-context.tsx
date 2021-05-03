import React, { useState } from "react";
import * as auth from "../auth-provider";


const AuthContext = React.createContext<any>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);

  const login = (form: any) => auth.login(form).then(setUser);
  const register = (form: any) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("hooks error");
  }
  return context;
};
