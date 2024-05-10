import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importing Axios
import * as s from './style';
import { NavLink } from 'react-router-dom';
import { Modal, Button, Form, Input } from 'antd';

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
  const [editData, setEditData] = useState<UserInfo | null>(null);
  // Fetch user data on component mount
  useEffect(() => {
    const id = localStorage.getItem('userId');
    axios.get<UserInfo>(`http://localhost:8080/users/${id}`)
      .then((response) => {
        setUserInfo(response.data);
        setEditData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
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

  const handleUpdateProfile = () => {
    if (editData) {
      const id = localStorage.getItem('userId');
      axios.put(`http://localhost:8080/users/${id}`, editData)
        .then((response) => {
          setUserInfo(response.data); // Atualiza o estado com os novos dados
          setModalOpen(false); // Fecha o modal após a atualização
        })
        .catch((error) => {
          console.error('Erro ao atualizar dados do usuário:', error);
        });
    }
  };

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <s.Page>
      <s.Content>
        <div className='icone'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
            alt='User Icon'
          />
        </div>
        <div className='info'>
          <h1>{userInfo.nome}</h1>
          <div className='profileInfo'>
            
            <h1>Sobre mim</h1>
            <h2>{userInfo.description || 'No description provided.'}</h2>
            <h1>Nome</h1>
            <h2>{userInfo.nome || 'No name provided.'}</h2>
            <h1>Email</h1>
            <h2>{userInfo.email || 'No email provided.'}</h2>
            <h1>Telefone</h1>
            <h2>{userInfo.contato_info || 'No telefone provided.'}</h2>
            <h1>Endereço</h1>
            <h2>{userInfo.endereco || 'Address endereço provided.'}</h2>
            <h1>Cep</h1>
            <h2>{userInfo.cep || 'No cep provided.'}</h2>
          </div>
        </div>

        <div className='editButton'>
          <button onClick={handleOpenModal}>Editar</button> {/* You may add NavLink or other functionality here */}
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
          <Form.Item label="Descrição" name="description" initialValue={editData?.description}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" initialValue={editData?.email}>
            <Input />
          </Form.Item>
          <Form.Item label="Telefone" name="contato_info" initialValue={editData?.contato_info}>
            <Input />
          </Form.Item>
          <Form.Item label="Endereço" name="endereco" initialValue={editData?.endereco}>
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
