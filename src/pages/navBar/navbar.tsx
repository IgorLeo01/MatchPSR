/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavLink } from 'react-router-dom';
import { LoginButton } from "../../components/loginButton";
import { useState } from 'react';
import '../navBar/nav.css';
import logo from "../../images/logo.svg";

interface NavBarProps {
  currentPage?: string;
  onHideNavbar?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ currentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = () => {
    console.log("teste");
  }

  return (
    <nav className="main">
      <div className="content">
        <div className="logo">
          <img
            src={logo}
            alt="Logomarca"
            width={161}
            height={36}
          />
        </div>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <ul className="pagesLists">
            <li>
              <NavLink to="/" className="nav-link" onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/vacancies" className="nav-link" onClick={handleClick}>
                Vagas
              </NavLink>
            </li>
            <li>
              <NavLink to="/partners" className="nav-link" onClick={handleClick}>
                Parceiros
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="nav-link" onClick={handleClick}>
                <LoginButton className='loginButton'>Entrar</LoginButton>
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className={`nav-icon ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          ☰
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
