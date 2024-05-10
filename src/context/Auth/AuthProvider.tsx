/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import { authService } from "../../utils/authService";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(() => {
    const storedId = localStorage.getItem("@PermissionYT:token");
    return storedId || null;
  });
  const [userId, setUserId] = useState<string | null>(() => {
    const storedToken = localStorage.getItem("userId");
    return storedToken || null;
  });

  const signIn = useCallback((credentials: UserCredentials) => {
    return authService
      .postLogin(credentials)
      .then((data) => {
        setToken(data.token);
        setUserId(data.userId);
        localStorage.setItem("@PermissionYT:token", data.token || "");
        localStorage.setItem("userId", data.userId || "");

        navigate("/");
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  const singout = useCallback(() => {
    setToken(null);
    localStorage.removeItem("@PermissionYT:token");
    navigate("/");
    window.location.reload();
  }, []);

  return (
    <AuthContext.Provider value={{ token, userId, signIn, singout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
