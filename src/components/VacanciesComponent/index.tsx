/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import * as s from "./style";
import localImg from "../../images/HomeFilled.svg";
import competenciasImg from "../../images/Group.svg";
import quantidadeImg from "../../images/Group (1).svg";
import { Button } from "../buttons";

interface VacanciesProps {
  cargo: string;
  tipoVaga: string;
  tipoTrabalho: string;
  localizacao: string;
  competencias: string;
  descricao: string;
  numeroVagas: number;
  logo?: any;
  nomeEmpresa?: string;
  vacancyRoute: () => void;
}

const VacanciesComponent: React.FC<VacanciesProps> = ({
  cargo,
  logo,
  nomeEmpresa,
  localizacao,
  competencias,
  numeroVagas,
  vacancyRoute,
}) => {
  return (
    <s.Content>
      <div className="cabecalho">
        <img src={logo} alt="logo da empresa" />
        <div className="cabecalhoInfo">
          <h1>{cargo}</h1>
          <span>{nomeEmpresa}</span>
        </div>
      </div>

      <div className="description">
        <div className="infoDescription">
          <img
            src={localImg}
            alt="casa"
            style={{ width: "15px", marginRight: "10px" }}
          />
          <span>{localizacao}</span>
        </div>

        <div className="infoDescription">
          <img
            src={competenciasImg}
            alt="competencias"
            style={{ width: "15px", marginRight: "10px" }}
          />
          <span>Competências: {competencias}</span>
        </div>

        <div className="infoDescription">
          <img
            src={quantidadeImg}
            alt="casa"
            style={{ width: "15px", marginRight: "10px" }}
          />
          <span>{numeroVagas} vagas</span>
        </div>
        <div className="descriptionButtons">
          <div>
            <Button
              isBlueOutline
              style={{ width: "100px", fontSize: "12px", height: "25px" }}
              onClick={vacancyRoute}
            >
              Saiba mais
            </Button>
            <Button
              isBlue
              style={{
                width: "100px",
                marginLeft: "10px",
                fontSize: "12px",
                height: "25px",
              }}
              onClick={vacancyRoute}
            >
              Aplicar
            </Button>
          </div>
        </div>
      </div>
    </s.Content>
  );
};

export default VacanciesComponent;
