import React, { useEffect } from "react";
import UserService, { User } from "./UserService";

export const authContext = React.createContext<User | undefined>(undefined);

export const useAuth = () => React.useContext(authContext);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = React.useState<User>();
  useEffect(() => {
    UserService.User.list().then((data) => setUser(data[0]));
  }, []);

  return <authContext.Provider value={user}>{children}</authContext.Provider>;
};
