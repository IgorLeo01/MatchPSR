import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './pages/navBar/navbar';
import Home from './pages/home/home';
import Vacancies from './pages/vacancies';
import Login from "./pages/login"
import { AuthProvider } from './context/AuthContext';

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
      <Router>
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
                <Vacancies />
              </Layout>
            } 
          />
          <Route 
            path="/login" 
            element={<Login />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
