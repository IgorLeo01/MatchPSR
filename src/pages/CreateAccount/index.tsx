/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import * as S from "./style";

import UserType from "../../components/Steps/UserType";
import Person from "../../components/Steps/Person";
import Professional from "../../components/Steps/professional";

import { useForm } from "../../hooks/useForm";
import Institution from "../../components/Steps/Institution";
import instance from "../../axiosConfig";
import { IFormData, formData } from "../../components/Steps/formData";
import { useNavigate } from "react-router-dom";
import { Alert, Space } from "antd";

const CreateAccount: React.FC = () => {
  const [data, setData] = useState<IFormData>({ ...formData });
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<
    "success" | "error" | "info" | "warning" | undefined
  >();
  const navigate = useNavigate();

  const formComponents: React.ComponentType<any>[] = [
    UserType,
    Person,
    Professional,
    Institution,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep } =
    useForm(formComponents);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await instance.post(
        "http://localhost:8080/auth/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setAlertMessage("Cadastro realizado com sucesso, transforme seu futuro!");
      setAlertType("success");
      setTimeout(() => {
        setAlertMessage("");
      }, 1000);
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      setAlertMessage("Houve um erro. Tente novamente.");
      setAlertType("error");
      setTimeout(() => {
        setAlertMessage("");
      }, 3000);
    }
  };

  const updateFielHandler = (key: string, value: any) => {
    setData((prev) => {
      return { ...prev, [key]: value };
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
        <h1 style={{ padding: "15px" }}>Crie sua conta</h1>
        <form onSubmit={handleSubmit}>
          {React.createElement(currentComponent, {
            onNextStep: changeStep,
            data,
            updateFielHandler,
          })}
          {currentStep > 0 && (
            <S.Actions>
              <button type="submit">Voltar</button>
              {!isLastStep ? (
                <button
                  type="button"
                  onClick={() => changeStep(currentStep + 1)}
                >
                  Avançar
                </button>
              ) : (
                <button type="submit">Enviar</button>
              )} 
            </S.Actions>
          )}
        </form>
      </S.Container>
    </S.SingUpPage>
  );
};

export default CreateAccount;
