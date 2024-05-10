import { FC } from "react";
import { ConfigProvider, Steps } from "antd";
import { BankFilled, HeartOutlined, UserOutlined } from "@ant-design/icons";
import { StepProps } from "../../../hooks/StepsProps";

const UserType: FC<StepProps> = ({ onNextStep, data, updateFielHandler }) => {
  const handleClick = (setUserType: string, step: number) => {
    updateFielHandler("role", setUserType);
    onNextStep(step);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginLeft: "10%",
        }}
      >
        <button
          type="button"
          style={{
            marginTop: "150px",
            marginLeft: "15%",
            marginRight: "50px",
            width: "220px",
            height: "300px",
            borderRadius: "37px",
            background: "#fff",
            border: "solid 1px #01A7E1",
            color: "#01A7E1",
          }}
          value={data.userType}
          onClick={() => handleClick("PESSOA", 1)}
        >
          <UserOutlined style={{ fontSize: "60px", paddingBottom: "10px" }} />
          <h5>Pessoa</h5>
        </button>

        <button
          type="button"
          value={data.userType}
          style={{
            marginTop: "150px",
            marginLeft: "15%",
            marginRight: "50px",
            width: "220px",
            height: "300px",
            borderRadius: "37px",
            background: "#fff",
            border: "solid 1px #01A7E1",
            color: "#01A7E1",
          }}
          onClick={() => handleClick("EMPRESA", 3)}
        >
          <BankFilled style={{ fontSize: "60px", paddingBottom: "10px" }} />
          <h5>Instituição</h5>
        </button>

        <button
          type="button"
          value={data.userType}
          style={{
            marginTop: "150px",
            marginLeft: "15%",
            marginRight: "50px",
            width: "220px",
            height: "300px",
            borderRadius: "37px",
            background: "#fff",
            border: "solid 1px #01A7E1",
            color: "#01A7E1",
          }}
          onClick={() => handleClick("ONG", 3)}
        >
          <HeartOutlined style={{ fontSize: "60px", paddingBottom: "10px" }} />
          <h5>Organização</h5>
        </button>
      </form>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#01A7E1",
          },
        }}
      >
        <Steps
          style={{ width: "750px", marginLeft: "10%", paddingTop: "20px" }}
          size="small"
          current={0}
          items={[
            {
              title: "Identificação",
            },
            {
              title: "Informações",
            },
            {
              title: "Conclusão",
            },
          ]}
        />
      </ConfigProvider>
    </div>
  );
};

export default UserType;
