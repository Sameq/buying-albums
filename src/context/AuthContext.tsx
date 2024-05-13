import { createContext, useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { api_album, api_user } from "../service/apiService";
import { UserModel } from "../model/UserModel";

interface AuthContextModel extends UserModel {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<string | void>;
  signup: (name: string, email: string, password: string) => Promise<string | void>;
  logout: () => void;
  token: string;
}

export const AuthContext = createContext({} as AuthContextModel);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [userData, setUserData] = useState<UserModel>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const data: UserModel = JSON.parse(
      localStorage.getItem("@Auth.Data") || "{}"
    );
    const _token: string = JSON.parse(
      localStorage.getItem("@Auth.Token") || ""
    );
    setToken(_token);

    if (data.id) {
      setIsAuthenticated(true);
      setUserData(data);
    } else {
      Logout();
    }
  }, []);

  const Signup = useCallback(async (name: string, email: string, password: string) => {
    const respSignup = await api_user.post("/api/user/create", {name, email, password})
    if (respSignup instanceof Error) {
      return respSignup.message;
    }
  }, [])

  const Login = useCallback(async (email: string, password: string) => {
    const respAuth = await api_user.post("/api/user/auth", { email, password });

    if (respAuth instanceof Error) {
      return respAuth.message;
    }

    localStorage.setItem("@Auth.Token", JSON.stringify(respAuth.data.token));
    setToken(respAuth.data.token);
    api_user.defaults.headers.common.Authorization = `Basic ${respAuth.data.token}`;
    api_album.defaults.headers.common.Authorization = `Basic ${respAuth.data.token}`;
    const respUserInfo = await api_user.get(`api/user/${respAuth.data.id}`);

    if (respUserInfo instanceof Error) {
      return respUserInfo.message;
    }

    localStorage.setItem("@Auth.Data", JSON.stringify(respUserInfo.data));
    setUserData(respUserInfo.data);
    setIsAuthenticated(true);
  }, []);

  const Logout = useCallback(() => {
    localStorage.removeItem("@Auth.Data");
    setUserData(undefined);
    setIsAuthenticated(false);
  
    return <Navigate to="/" />;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        ...userData,
        login: Login,
        logout: Logout,
        signup: Signup,
        token: token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
