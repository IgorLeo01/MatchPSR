/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import axios from "axios"; // Importing Axios
import * as s from "./style";
import { Modal, Form, Input, Space, Alert } from "antd";
import VacanciesComponent from "../../components/VacanciesComponent";

// Define an interface for user information
interface UserInfo {
  nome: string;
  description?: string; // Optional
  endereco?: string; // Optional
  cep?: string; // Optional
  email?: string; // Optional
  senha?: string; // Optional
  contato_info?: string; // Optional
}

const Profile: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [vacancies, setVacancies] = useState([]);
  const [editData, setEditData] = useState<UserInfo | null>(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<
    "success" | "error" | "info" | "warning" | undefined
  >();
  // Fetch user data on component mount
  useEffect(() => {
    const id = localStorage.getItem("userId");
    axios
      .get<UserInfo>(`https://matchpsr-api.onrender.com/users/${id}`)
      .then((response) => {
        setUserInfo(response.data);
        setEditData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
    axios
      .get(`https://matchpsr-api.onrender.com/api/vagas/empresa/${id}`)
      .then((response) => {
        setVacancies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching vacancies:", error);
      });
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleFormChange = (changedFields: any) => {
    if (editData) {
      setEditData({
        ...editData,
        ...changedFields, // Atualiza apenas os campos que mudaram
      });
    }
  };
  const handleDelete = (idVaga: string) => {
    axios
      .delete(`https://matchpsr-api.onrender.com/api/vagas/${idVaga}`)
      .then(() => {
        setAlertMessage("Vaga finalizada com sucesso.");
        setAlertType("success");
        setTimeout(() => {
          setAlertMessage("");
        }, 1000);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
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

  const handleUpdateProfile = () => {
    if (editData) {
      const id = localStorage.getItem("userId");
      axios
        .put(`https://matchpsr-api.onrender.com/users/${id}`, editData)
        .then((response) => {
          setUserInfo(response.data); // Atualiza o estado com os novos dados
          setModalOpen(false); // Fecha o modal após a atualização
        })
        .catch((error) => {
          console.error("Erro ao atualizar dados do usuário:", error);
        });
    }
  };

  if (!userInfo) {
    return <div>Loading...</div>;
  }

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
        <div className="icone">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User Icon"
          />
        </div>
        <div className="info">
          <h1>{userInfo.nome}</h1>
          <div className="profileInfo">
            <h1>Sobre mim</h1>
            <h2>{userInfo.description || "No description provided."}</h2>
            <h1>Nome</h1>
            <h2>{userInfo.nome || "No name provided."}</h2>
            <h1>Email</h1>
            <h2>{userInfo.email || "No email provided."}</h2>
            <h1>Telefone</h1>
            <h2>{userInfo.contato_info || "No telefone provided."}</h2>
            <h1>Endereço</h1>
            <h2>{userInfo.endereco || "Address endereço provided."}</h2>
            <h1>Cep</h1>
            <h2>{userInfo.cep || "No cep provided."}</h2>
          </div>
        </div>

        <div className="editButton">
          <button onClick={handleOpenModal}>Editar</button>{" "}
          {/* You may add NavLink or other functionality here */}
        </div>

        <div className="vagas">
          <ul className="list">
            {vacancies.map((item: any, index) => (
              <li key={index}>
                <VacanciesComponent
                  cargo={item.cargo}
                  nomeEmpresa={item.nomeEmpresa}
                  localizacao={item.localizacao}
                  competencias={item.competencias}
                  numeroVagas={item.numeroVagas}
                  tipoVaga={item.tipoVaga}
                  tipoTrabalho={item.tipoTrabalho}
                  descricao={item.descricao}
                  handleDelete={() => handleDelete(item.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </s.Content>

      <Modal
        open={modalOpen}
        title="Editar Perfil"
        onOk={handleUpdateProfile}
        onCancel={handleCloseModal}
      >
        <Form layout="vertical" onFieldsChange={handleFormChange}>
          <Form.Item label="Nome" name="nome" initialValue={editData?.nome}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Descrição"
            name="description"
            initialValue={editData?.description}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" initialValue={editData?.email}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Telefone"
            name="contato_info"
            initialValue={editData?.contato_info}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Endereço"
            name="endereco"
            initialValue={editData?.endereco}
          >
            <Input />
          </Form.Item>
          <Form.Item label="CEP" name="cep" initialValue={editData?.cep}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </s.Page>
  );
};

export default Profile;
