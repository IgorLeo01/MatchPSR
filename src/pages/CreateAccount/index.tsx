import React from 'react';
import * as S from './style';

import UserType from '../../components/Steps/UserType';
import Person from '../../components/Steps/Person';
import Professional from '../../components/Steps/professional';

import { useForm } from '../../hooks/useForm';

const CreateAccount: React.FC = () => {
  const formComponents: React.ComponentType<any>[] = [UserType, Person, Professional];
  const { currentStep, currentComponent, changeStep } = useForm(formComponents);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeStep(currentStep + 1, e);
  };

  return (
    <S.SingUpPage>
      <S.Container>
        <h1 style={{ padding: '15px' }}>Crie sua conta</h1>
        <form onSubmit={handleSubmit}>
          {React.createElement(currentComponent, { onNextStep: changeStep })}
          {currentStep > 0 && (
            <S.Actions>
              <button type="submit">Voltar</button>
              <button type="submit">Avançar</button>
            </S.Actions>
          )}
        </form>
      </S.Container>
    </S.SingUpPage>
  );
};

export default CreateAccount;
