import React, { useCallback, useState } from "react";
import { authService } from "../../utils/authService";
import { AuthContext } from "./AuthContext";
import { useHistory } from "react-router-dom"; // Importe o useHistory

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const history = useHistory(); // Obtenha o objeto history

  const [token, setToken] = useState<string | null>(() => {
    const storedToken = localStorage.getItem('@PermissionYT:token');
    return storedToken || null;
  });

  const signIn = useCallback((credentials: UserCredentials) => {
    console.log("Tentando fazer login com:", credentials);
    return authService
      .postLogin(credentials)
      .then((responseToken) => {
        setToken(responseToken);
        localStorage.setItem('@PermissionYT:token', responseToken || '');
        console.log("Token received:", responseToken);
        history.push("/home"); // Redirecione para a página "home"
      })
      .catch((error) => {
        console.error("Error during login:", error);
        throw error;
      });
  }, [history]); // Adicione history como uma dependência

  const singout = useCallback(() => {
    setToken(null);
    localStorage.removeItem('@PermissionYT:token');
    history.push("/"); // Redirecione para a página inicial ou de login após o logout
  }, [history]); // Adicione history como uma dependência

  return (
    <AuthContext.Provider value={{ token, signIn, singout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
