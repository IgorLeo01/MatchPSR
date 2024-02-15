import React from 'react'
import * as s from './style'
import { NavLink } from 'react-router-dom'
import cocaLogo from '../../images/image 1.png'
import VacanciesComponent from '../../components/VacanciesComponent';
function Vacancies() {

  return (
    <s.Page>
      <s.Content>
        <h1>Vagas</h1>
        <div className='vagas'>
          {/* {List.map(vaga: Vaga) =>{
            <VacanciesButton 
            vaga={name} 
            logo={logo} 
            local={local} 
            competencias={competencias}
            qntVagas={qntVagas}
            />
          }} */}
          <VacanciesComponent
            vaga="Auxiliar de serviços Gerais"
            logo={cocaLogo} 
            empresa="Coca Cola"
            local="Recife, Pernambuco - Brasil"
            competencias={[["Limpar"],["Arrumar"],["Sair"]]} //não sei pq tá dando erro, mas está funcionando
            qntVagas={3}
            vacancyRoute="login"
            />
        </div>
      </s.Content>
    </s.Page>
  )
}

export default Vacancies;
