import React, { FC } from 'react';
import InputForm from '../../inportForm/InputForm';
import { StepProps } from '../../../hooks/StepsProps';
import { ConfigProvider, Steps } from 'antd';
import * as S from './style ';

const Institution: FC<StepProps> = ({ data, updateFielHandler }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const { value } = e.target;
    updateFielHandler(name, value);
  };

  return (
    <>
      <S.formInstitutionInformation>
        <InputForm name='Nome' value={data.nome} onChange={(e)=>handleInputChange(e, "nome")} required/>
        <InputForm name='CNPJ' value={data.cnpj} onChange={(e)=>handleInputChange(e, "cnpj")} required/>
        <InputForm name='Número de funcionarios' value={data.numeroFuncionarios} onChange={(e)=>handleInputChange(e, "numeroFuncionarios")} required/>
        <InputForm name='Telefone' value={data.contato_info} onChange={(e)=>handleInputChange(e, "contato_info")} required/>
        <InputForm name='Email' value={data.email} onChange={(e)=>handleInputChange(e, "email")} required/>
        <InputForm name='Senha' value={data.senha} onChange={(e)=>handleInputChange(e, "senha")} required/>
        <InputForm name='Endereço' value={data.endereco} onChange={(e)=>handleInputChange(e, "endereco")} required/>
        <InputForm name='Cidade' value={data.cidade} onChange={(e)=>handleInputChange(e, "cidade")} required/>
        <InputForm name='CEP' value={data.cep} onChange={(e)=>handleInputChange(e, "cep")} required/>
      </S.formInstitutionInformation>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#01A7E1',
          },
        }}
      >
        <Steps
          style={{ width: '750px', marginLeft: '10%', paddingTop: '100px', paddingBottom:'100px' }}
          size="small"
          current={1}
          items={[
            {
              title: 'Identificação',
            },
            {
              title: 'Informações',
            },
          ]}
        />
      </ConfigProvider>
    </>
  );
};

export default Institution;