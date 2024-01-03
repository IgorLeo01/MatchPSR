import React from 'react';
import * as S from './style';
import MultiStepForm from './MultiStepsForms'; 
const CreateAccount: React.FC = () => {
  return(
    <S.SingUpPage>      
      <S.Container>
        <h1 style={{padding: '15px'}}>Crie sua conta</h1>
        <MultiStepForm/>
      </S.Container>
    </S.SingUpPage>
  )
}

export default CreateAccount;
