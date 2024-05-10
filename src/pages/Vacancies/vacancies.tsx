/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import * as s from "./style";
import cocaLogo from "../../images/image 1.png";
import VacanciesComponent from "../../components/VacanciesComponent";
import axios from "axios";

function Vacancies() {
  const [searchText, setSearchText] = useState("");
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/vagas/listar")
      .then((response) => {
        setVacancies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching vacancies:", error);
      });
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <s.Page>
      <s.Content>
        <div className="cabecalho">
          <div className="cabecalhoInfo">
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

        <div className="vagas">
          <ul className="list">
            {vacancies.map((item: any, index) => (
              <li key={index}>
                <VacanciesComponent
                  cargo={item.cargo}
                  logo={cocaLogo}
                  nomeEmpresa={item.nomeEmpresa}
                  localizacao={item.localizacao}
                  competencias={item.competencias}
                  numeroVagas={item.numeroVagas}
                  vacancyRoute={item.vacancyRoute}
                  tipoVaga={item.tipoVaga}
                  tipoTrabalho={item.tipoTrabalho}
                  descricao={item.descricao}
                />
              </li>
            ))}
          </ul>
        </div>
      </s.Content>
    </s.Page>
  );
}

export default Vacancies;
