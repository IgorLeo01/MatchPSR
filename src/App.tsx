import React, { ReactNode, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./pages/navBar/navbar";
import Home from "./pages/home/home";
import Vacancies from "./pages/Vacancies/vacancies";
import { Login } from "./pages/login";
import CreateAccount from "./pages/CreateAccount";
import { AuthProvider } from "./context/Auth/AuthProvider";
import { RequireAuth } from "./context/Auth/RequireAuth";
import Profile from "./pages/profile/profile";
import RegisterVacancies from "./pages/RegisterVacancies";
import NotFound from "./NotFound";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

const App: React.FC = () => {
  const [roles, setRoles] = React.useState<string[]>([]);
  const [isCompany, setIsCompany] = React.useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@PermissionYT:token");
    if (token) {
      const storedRoles = localStorage.getItem("roles");
      setRoles(JSON.parse(storedRoles || "[]"));
    }
  }, []);

  useEffect(() => {
    if (roles.includes("ROLE_EMPRESA")) {
      setIsCompany(true);
    }
  }, [roles]);

  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/registerVacancies"
          element={
            <Layout>
              <RequireAuth>
                {isCompany ? <RegisterVacancies /> : <NotFound />}
              </RequireAuth>
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/vacancies"
          element={
            <Layout>
              <RequireAuth>
                <Vacancies />
              </RequireAuth>
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
