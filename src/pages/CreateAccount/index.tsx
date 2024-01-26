import React, { useState } from 'react';
import * as S from './style';

import UserType from '../../components/Steps/UserType';
import Person from '../../components/Steps/Person';
import Professional from '../../components/Steps/professional';

import { useForm } from '../../hooks/useForm';

const formData = {
  userType: 0,
  name: "",
  document: "",
  email: "",
  birth: "",
  phone: "",
  adress: "",
  city: "",
  cep: "",
  cnh: false,
  skills: "",
  professionalExperience: "",
}

const CreateAccount: React.FC = () => {
  const [data, setData] = useState(formData);

  const formComponents: React.ComponentType<any>[] = [
    UserType , 
    Person , 
    Professional,
  ];
  
  const { currentStep, currentComponent, changeStep, isLastStep } = useForm(formComponents);
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeStep(currentStep + 1, e);
  };
  const updateFielHandler = (key: string, value: any) => {
    setData((prev) =>{
      return{...prev, [key]: value};
    });
  }

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
