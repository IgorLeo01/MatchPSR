import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './pages/navBar/navbar';
import Home from './pages/home/home';
import Vacancies from './pages/vacancies';
import SignIn from "./pages/signIn/signIn"

const Layout: React.FC = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/vacancies" element={<Layout><Vacancies /></Layout>} />
        <Route path="/signIn" element={<SignIn />}/>
      </Routes>
    </Router>
  );
};

export default App;
