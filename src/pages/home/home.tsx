import React from 'react'
import { Button } from '../../components/buttons'
import * as s from './style'
import imageHome from "../../images/image-home.svg"
import AboutUs from './aboutUs/aboutUs'

function Home() {

  return (
    <s.Page>
      <s.Content>
        <div style={{alignItems: 'center'}}>
          <h1>Transformando vidas, <br/>
          construindo carreiras!</h1>
          <div
            style={{ marginTop: '20px'}}
          >
            <Button 
            >
              Construa seu Futuro
            </Button>
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
      <div>
        <AboutUs />
      </div>
    </s.Page>
  )
}

export default Home
