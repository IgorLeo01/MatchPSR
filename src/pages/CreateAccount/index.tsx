import React from 'react';
import * as S from './style';
import MultiStepForm from './MultiStepsForms'; // Corrija o nome do componente importado

const CreateAccount: React.FC = () => {
  return(
    <S.SingUpPage>      
      <S.Container>
        <h1>Crie sua conta</h1>
        <MultiStepForm/>
      </S.Container>
    </S.SingUpPage>
  )
}

export default CreateAccount;
