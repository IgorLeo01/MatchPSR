/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import * as s from "./style";
import cocaLogo from "../../images/image 1.png";
import VacanciesComponent from "../../components/VacanciesComponent";
import axios from "axios";
import { Alert, Space } from "antd";

function Vacancies() {
  const [searchText, setSearchText] = useState("");
  const [vacancies, setVacancies] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<
    "success" | "error" | "info" | "warning" | undefined
  >();
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

  const handleSubmit = (idVaga: string) => {
    const userId = localStorage.getItem("userId");
    axios
      .post(`http://localhost:8080/api/vagas/${idVaga}/aplicar/${userId}`)
      .then((response) => {
        setAlertMessage(
          "Vaga submetida com sucesso. Aguarde aprovação da empresa no seu e-mail."
        );
        setAlertType("success");
        setTimeout(() => {
          setAlertMessage("");
        }, 1000);
      })
      .catch((error) => {
        console.error("Erro ao enviar a aplicação:", error);
        setAlertMessage("Houve um erro. Tente novamente.");
        setAlertType("error");
        setTimeout(() => {
          setAlertMessage("");
        }, 3000);
      });
  };

  return (
    <s.Page>
      <s.Content>
        <div
          className="alert-container"
          style={{
            position: "fixed",
            top: alertMessage ? 20 : -100,
            left: "40%",
            right: 0,
            zIndex: 9999,
            transition: "top 0.5s ease",
          }}
        >
          {alertMessage && (
            <Space direction="vertical" style={{ width: "30%" }}>
              <Alert message={alertMessage} type={alertType} showIcon />
            </Space>
          )}
        </div>
        <div
          className="alert-container"
          style={{
            position: "fixed",
            top: alertMessage ? 20 : -100,
            left: "40%",
            right: 0,
            zIndex: 9999,
            transition: "top 0.5s ease",
          }}
        >
          {alertMessage && (
            <Space direction="vertical" style={{ width: "30%" }}>
              <Alert message={alertMessage} type={alertType} showIcon />
            </Space>
          )}
        </div>
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
                  tipoVaga={item.tipoVaga}
                  tipoTrabalho={item.tipoTrabalho}
                  descricao={item.descricao}
                  handleSubmit={() => handleSubmit(item.id)}
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
