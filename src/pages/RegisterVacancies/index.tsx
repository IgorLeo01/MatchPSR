/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import * as S from "./style";

import instance from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
import { Alert, Space } from "antd";
import InputForm from "../../components/inportForm/InputForm";
import { Button } from "../../components/buttons";
import { IRegisterVacancies, vacanciesData } from "./types";
import TextArea from "../../components/inportForm/TextArea";

const RegisterVacancies: React.FC = () => {
  const [data, setData] = useState<IRegisterVacancies>({ ...vacanciesData });
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<
    "success" | "error" | "info" | "warning" | undefined
  >();
  const [userId, setUserId] = useState<string | null>(() => {
    const storedId = localStorage.getItem("userId");
    return storedId || null;
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await instance.post(
        `http://localhost:8080/api/vagas/criar/${userId}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setAlertMessage(
        "Cadastro realizado com sucesso, transforme o futuro de outros!"
      );
      setAlertType("success");
      setTimeout(() => {
        setAlertMessage("");
      }, 1000);
      setTimeout(() => {
        navigate("/registerVacancies");
      }, 1500);
    } catch (error) {
      setAlertMessage("Houve um erro. Tente novamente.");
      setAlertType("error");
      setTimeout(() => {
        setAlertMessage("");
      }, 3000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const { value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <S.SingUpPage>
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
      <S.Container>
        <h1 style={{ padding: "20px" }}>Cadastre sua vaga</h1>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "150px",
              gap: 40,
            }}
          >
            <div>
              <InputForm
                name="cargo"
                value={data.cargo}
                onChange={(e) => handleInputChange(e, "cargo")}
                required
              />
              <InputForm
                name="Tipo de Trabalho"
                value={data.tipoTrabalho}
                onChange={(e) => handleInputChange(e, "tipoTrabalho")}
                required
              />
              <InputForm
                name="tipo da Vaga"
                value={data.tipoVaga}
                onChange={(e) => handleInputChange(e, "tipoVaga")}
                required
              />
              <InputForm
                name="competencias"
                value={data.competencias}
                onChange={(e) => handleInputChange(e, "competencias")}
                required
              />
              <InputForm
                name="Localização"
                value={data.localizacao}
                onChange={(e) => handleInputChange(e, "localizacao")}
                required
              />
              <InputForm
                name="numero de Vagas"
                value={data.numeroVagas}
                onChange={(e) => handleInputChange(e, "numeroVagas")}
                required
              />
            </div>
            <TextArea
              name="Descrição da Vaga"
              value={data.descricao}
              required={true}
              placeHolder="Aqui, você terá a oportunidade de compartilhar e explorar as diversas vivências que moldaram a sua vida. Este é um espaço aberto e acolhedor, projetado para que você possa expressar-se livremente e refletir sobre as suas experiências mais significativas."
              onChange={(e) => handleInputChange(e, "description")}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              gap: "10px",
            }}
          >
            <Button
              isBlueOutline
              style={{ width: "100px", fontSize: "12px", height: "25px" }}
              onClick={() => navigate("/")}
            >
              Descartar vaga
            </Button>
            <Button
              isBlue
              style={{
                width: "100px",
                marginLeft: "10px",
                fontSize: "12px",
                height: "25px",
              }}
              onClick={() => handleSubmit}
            >
              Aplicar
            </Button>
          </div>
        </form>
      </S.Container>
    </S.SingUpPage>
  );
};

export default RegisterVacancies;
