import React, { useState } from 'react';
import * as s from './style';
import cocaLogo from '../../images/image 1.png';
import VacanciesComponent from '../../components/VacanciesComponent';

const data = [
  {
    vaga: "Auxiliar de serviços Gerais",
    logo: cocaLogo,
    empresa: "Coca Cola",
    local: "Recife, Pernambuco - Brasil",
    competencias: [["Limpar"], ["Arrumar"], ["Sair"]], 
    qntVagas: 3,
    vacancyRoute: "login"
  },
  {
    vaga: "Ajudante de pedreiro",
    logo: cocaLogo,
    empresa: "Coca Cola",
    local: "Recife, Pernambuco - Brasil",
    competencias: [["Limpar"], ["Arrumar"], ["Sair"]], 
    qntVagas: 3,
    vacancyRoute: "login"
  },
  {
    vaga: "jogador",
    logo: cocaLogo,
    empresa: "Coca Cola",
    local: "Recife, Pernambuco - Brasil",
    competencias: [["Limpar"], ["Arrumar"], ["Sair"]], 
    qntVagas: 3,
    vacancyRoute: "login"
  },
  {
    vaga: "jogador",
    logo: cocaLogo,
    empresa: "Coca Cola",
    local: "Recife, Pernambuco - Brasil",
    competencias: [["Limpar"], ["Arrumar"], ["Sair"]], 
    qntVagas: 3,
    vacancyRoute: "login"
  },
  {
    vaga: "faxineiro",
    logo: cocaLogo,
    empresa: "Coca Cola",
    local: "Recife, Pernambuco - Brasil",
    competencias: [["Limpar"], ["Arrumar"], ["Sair"]], 
    qntVagas: 3,
    vacancyRoute: "login"
  },
  {
    vaga: "tesdte",
    logo: cocaLogo,
    empresa: "Coca Cola",
    local: "Recife, Pernambuco - Brasil",
    competencias: [["Limpar"], ["Arrumar"], ["Sair"]], 
    qntVagas: 3,
    vacancyRoute: "login"
  },
  {
    vaga: "Auxiliar de serviços Gerais",
    logo: cocaLogo,
    empresa: "Coca Cola",
    local: "Recife, Pernambuco - Brasil",
    competencias: [["Limpar"], ["Arrumar"], ["Sair"]], 
    qntVagas: 3,
    vacancyRoute: "login"
  },
];

function Vacancies() {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.vaga.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <s.Page>
      <s.Content>
        <div className='cabecalho'>
          <div className='cabecalhoInfo'>
            <h1>Vagas</h1>
            <p>Lista de vagas disponíveis</p>
          </div>
          <input
            type="text"
            placeholder="Buscar Vaga..."
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>

        <div className='vagas'>
          <ul className='list'>
            {filteredData.map((item, index) => (
              <li key={index}>
                <VacanciesComponent
                  vaga={item.vaga}
                  logo={item.logo} 
                  empresa={item.empresa}
                  local={item.local}
                  competencias={item.competencias} //n sei pq dar erro, mas ta funcionandos
                  qntVagas={item.qntVagas}
                  vacancyRoute={item.vacancyRoute}
                />
              </li>
            ))}
          </ul>
        </div>
      </s.Content>
    </s.Page>
  )
}

export default Vacancies;
