import React, { useEffect, useState } from 'react'
import { Button } from '../../components/buttons'
import * as s from './style'
import imageHome from "../../images/image-home.svg"
import AboutUs from './aboutUs/aboutUs'
import Partner from './partner/partner'
import { NavLink } from 'react-router-dom'

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('@PermissionYT:token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <s.Page>
      <s.Content>
        <div style={{alignItems: 'center'}}>
          <h1>Transformando vidas, <br/>
          construindo carreiras!</h1>
          <div
            style={{ marginTop: '20px'}}
          >
            {loggedIn ? (
            <NavLink to="/vacancies">
              <Button >
                Construa seu Futuro
              </Button>
            </NavLink>              
            ): (
              <NavLink to="/login">
                <Button >
                  Construa seu Futuro
                </Button>
              </NavLink>              
             )}
            <Button 
              isOutline
              style={{ marginLeft: '20px'}}
            >
              Saiba mais
            </Button>
          </div>
        </div>
        <img
          src={imageHome}
          alt="homem segurando uma prancheta"
          style={{ marginLeft: '150px'}}
        />
      </s.Content>
      <AboutUs/>
      <Partner/>
    </s.Page>
  )
}

export default Home
