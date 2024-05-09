import { NavLink } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { LoginButton } from "../../components/loginButton";
import '../navBar/nav.css';
import logo from "../../images/logo.svg";
import { AuthContext } from '../../context/Auth/AuthContext';

interface NavBarProps {
  currentPage?: string;
  onHideNavbar?: () => void;
}

const NavBar: React.FC<NavBarProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const { singout } = useContext(AuthContext);


  useEffect(() => {
    const token = localStorage.getItem('@PermissionYT:token');
    if (token) {
      setLoggedIn(true);
      const storedUserName = localStorage.getItem('userName');
      if (storedUserName) {
        setUserName(storedUserName);
      }
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  

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
              <NavLink to="/" className="nav-link" >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/vacancies" className="nav-link" >
                Vagas
              </NavLink>
            </li>
            <li>
              {loggedIn && (
                <span style={{ cursor: 'pointer', fontSize: 16, fontWeight: 600}} className="nav-link" onClick={() => singout()} >
                  Sair
                </span>
              )}
            </li>
            <li>
              {loggedIn ? (
                <NavLink to="/profile" className="nav-link">
                  <LoginButton className='loginButton'>Meu Perfil</LoginButton>
                </NavLink>
              ) : (
                <NavLink to="/login" className="nav-link" >
                  <LoginButton className='loginButton'>Entrar</LoginButton>
                </NavLink>
              )}
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
  );
}

export default NavBar;
