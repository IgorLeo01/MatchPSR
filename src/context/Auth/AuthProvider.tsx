import React, { useCallback, useState } from "react";
import { authService } from "../../utils/authService";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  
  const [token, setToken] = useState<string | null>(() => {
    const storedToken = localStorage.getItem('@PermissionYT:token');
    return storedToken || null;
  });

  const signIn = useCallback((credentials: UserCredentials) => {
    return authService
      .postLogin(credentials)
      .then((responseToken) => {
        setToken(responseToken);
        localStorage.setItem('@PermissionYT:token', responseToken || '');
        navigate("/");
      })
      .catch((error) => {
        throw error;
      });
  }, []); 

  const singout = useCallback(() => {
    setToken(null);
    localStorage.removeItem('@PermissionYT:token');
    navigate("/"); 
  }, []);

  return (
    <AuthContext.Provider value={{ token, signIn, singout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
