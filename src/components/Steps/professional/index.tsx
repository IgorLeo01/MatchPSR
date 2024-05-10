/* eslint-disable @typescript-eslint/no-unused-vars */
import { ConfigProvider, Steps } from "antd";
import React, { FC } from "react";
import { StepProps } from "../../../hooks/StepsProps";
import TextAreaComponent from "../../inportForm/TextArea";

const Professional: FC<StepProps> = ({ data, updateFielHandler }) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const { value } = e.target;
    updateFielHandler(name, value);
  };

  return (
    <div
      className="form"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        justifyContent: "center",
        margin: "50px",
        paddingTop: "70px",
      }}
    >
      <TextAreaComponent
        name="Experiência profissional"
        value={data.description}
        required={true}
        placeHolder="Aqui, você terá a oportunidade de compartilhar e explorar as diversas vivências que moldaram a sua vida. Este é um espaço aberto e acolhedor, projetado para que você possa expressar-se livremente e refletir sobre as suas experiências mais significativas."
        onChange={(e) => handleInputChange(e, "description")}
      />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#01A7E1",
          },
        }}
      >
        <Steps
          style={{
            width: "750px",
            marginLeft: "10%",
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
          size="small"
          current={2}
          items={[
            {
              title: "Identificação",
            },
            {
              title: "Informações Pessoais",
            },
            {
              title: "Informações Profissionais",
            },
          ]}
        />
      </ConfigProvider>
    </div>
  );
};

export default Professional;
