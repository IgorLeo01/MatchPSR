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
        <InputForm name='Nome' value={data.name} onChange={(e)=>handleInputChange(e, "name")} required/>
        <InputForm name='CNPJ' value={data.document} onChange={(e)=>handleInputChange(e, "document")} required/>
        <InputForm name='Número de funcionarios' value={data.numberOfEmployees} onChange={(e)=>handleInputChange(e, "numberOfEmployees")} required/>
        <InputForm name='Telefone' value={data.phone} onChange={(e)=>handleInputChange(e, "phone")} required/>
        <InputForm name='Email' value={data.email} onChange={(e)=>handleInputChange(e, "email")} required/>
        <InputForm name='Senha' value={data.password} onChange={(e)=>handleInputChange(e, "password")} required/>
        <InputForm name='Endereço' value={data.address} onChange={(e)=>handleInputChange(e, "address")} required/>
        <InputForm name='Cidade' value={data.city} onChange={(e)=>handleInputChange(e, "city")} required/>
        <InputForm name='CEP' value={data.zip} onChange={(e)=>handleInputChange(e, "zips")} required/>
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