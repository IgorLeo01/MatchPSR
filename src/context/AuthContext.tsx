import React, { ReactNode, createContext, useCallback, useState } from "react";
import { authService } from "../utils/authService";

interface LayoutProps {
  children: ReactNode;
}

interface AuthContextState {
  token: string | null;
  signIn(credentials: UserCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC<LayoutProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>('');

  const signIn = useCallback((credentials: UserCredentials) => {
    return authService
      .login(credentials)
      .then((responseToken) => {
        localStorage.setItem('@PermissionYT:token', responseToken || '');
        setToken(responseToken);
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
