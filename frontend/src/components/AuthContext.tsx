import React, { useEffect } from "react";
import UserService, { User } from "./UserService";

export const authContext = React.createContext<User | undefined>(undefined);

export const useAuth = () => React.useContext(authContext);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = React.useState<User>();
  useEffect(() => {
    UserService.User.details(16).then((data) => {
      setUser(data);
    });
  }, []);

  return <authContext.Provider value={user}>{children}</authContext.Provider>;
};
