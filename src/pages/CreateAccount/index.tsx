import React, { useState } from 'react';
import * as S from './style';

import UserType from '../../components/Steps/UserType';
import Person from '../../components/Steps/Person';
import Professional from '../../components/Steps/professional';

import { useForm } from '../../hooks/useForm';
import Institution from '../../components/Steps/Institution';
import instance from '../../axiosConfig';

const formData = {
  name: "",
  birth: "",
  email: "",
  phone: "",
  password: "",
  zip: "",
  city: "",
  document: 0, 
  address: "",
  skills: "", 
  professionalExperience: "", 
  numberOfEmployees: "",
};

const CreateAccount: React.FC = () => {
  const [data, setData] = useState(formData);

  const formComponents: React.ComponentType<any>[] = [
    UserType , 
    Person , 
    Professional,
    Institution,
  ];
  
  const { currentStep, currentComponent, changeStep, isLastStep } = useForm(formComponents);
 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Data to be sent:', data);
    try {
      const response = await instance.post('/ongs/cadastro', data, {
        headers: {
          'Content-Type': 'application/json',
      },
      });
  
      if (response.status === 201) {
        console.log('Empresa cadastrada com sucesso:', response.data);
      } else {
        console.error('Falha ao cadastrar empresa');
      }
    } catch (error) {
      console.error('Erro com dados da empresa:', error);
    }
  };
  const updateFielHandler = (key: string, value: any) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };
  

  return (
    <S.SingUpPage>
      <S.Container>
        <h1 style={{ padding: '15px' }}>Crie sua conta</h1>
        <form onSubmit={handleSubmit}>
          {React.createElement(currentComponent, { onNextStep: changeStep, data, updateFielHandler })}
          {currentStep > 0 && (
            <S.Actions>
              <button type="submit">Voltar</button>
              {!isLastStep ? (
                <button type="submit">Avançar</button>
              ):(
                <button type="button">Enviar</button>
              )}
            </S.Actions>
          )}
        </form>
      </S.Container>
    </S.SingUpPage>
  );
};

export default CreateAccount;
