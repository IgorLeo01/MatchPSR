import React from "react"
import "./App.css";
import Home from "./pages/home/home";
import NavBar from "./pages/navBar/navbar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Partner from "./pages/partner/partner";
import Vacancies from "./pages/vacancies/vacancies";

function App() {
  return (
    <>
      <Router>
        <NavBar currentPage={'teste'} />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partners" element={<Partner />} />
            <Route path="/vacancies" element={<Vacancies />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App
