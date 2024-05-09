import React, { ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './pages/navBar/navbar';
import Home from './pages/home/home';
import Vacancies from './pages/Vacancies/vacancies';
import {Login} from "./pages/login"
import CreateAccount from './pages/CreateAccount';
import { AuthProvider } from './context/Auth/AuthProvider';
import { RequireAuth } from './context/Auth/RequireAuth';
import Profile from './pages/profile/profile';


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
  return (
    <AuthProvider>
      <Routes>
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
        <Route 
          path="/login" 
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<CreateAccount />}
        />
        <Route
          path="/vacancies"
          element={<Vacancies />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
