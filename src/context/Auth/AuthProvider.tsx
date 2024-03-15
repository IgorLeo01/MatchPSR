import React, {  useCallback, useState } from "react";
import { authService } from "../../utils/authService";
import { AuthContext } from "./AuthContext";



const AuthProvider= ({ children }: {children: JSX.Element}) => {
    const [token, setToken] = useState<string | null>(() => {
      const storedToken = localStorage.getItem('@PermissionYT:token');
      return storedToken || null;
    });
  
    const signIn = useCallback((credentials: UserCredentials) => {
      return authService
        .login(credentials)
        .then((responseToken) => {
          setToken(responseToken);
          localStorage.setItem('@PermissionYT:token', responseToken || ''); 
          console.log("Token received:", responseToken);
        })
        .catch((error) => {
          console.error("Error during login:", error);
          throw error;
        });
    }, []);
  
    return (
      <AuthContext.Provider value={{ token, signIn }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
export { AuthContext, AuthProvider };
