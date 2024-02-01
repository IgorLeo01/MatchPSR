import React, { FC, useState } from 'react';
import InputForm from '../../inportForm/InputForm';
import { StepProps } from '../../../hooks/StepsProps';
import { ConfigProvider, Steps } from 'antd';
import * as S from './style';
import DatePickerForm from '../../inportForm/DatePickerForm';


const Person: FC<StepProps> = ({data, updateFielHandler}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFielHandler(name, value);
    console.log("FORM ", name, value);
  };
  const handleBirthChange = (value: any) => {
    updateFielHandler("dateOfBirth", value);
    console.log("FORM ", name, value);
  };

  return (
    <>
      <S.formPersonInformation>
        <InputForm name='Nome' value={data.name} onChange={handleInputChange} required/>
        <InputForm name='CPF' value={data.document} onChange={handleInputChange} required/>
        <DatePickerForm  name='Data de Naciemnto' value={data.dateOfBirth} onChange={(e: any) => (handleBirthChange(e.target.value))} required={true} />
        <InputForm name='Telefone' value={data.phone} onChange={handleInputChange} required/>
        <InputForm name='Email' value={data.email} onChange={handleInputChange} required/>
        <InputForm name='Senha' value={data.password} onChange={handleInputChange} required/>
        <InputForm name='Endereço' value={data.address} onChange={handleInputChange} required/>
        <InputForm name='Cidade' value={data.city} onChange={handleInputChange} required/>
        <InputForm name='Cep' value={data.zipCode} onChange={handleInputChange} required/>
      </S.formPersonInformation>
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
              title: 'Informações Pessoais',
            },
            {
              title: 'Informações Profissionais',
            },
          ]}
        />
      </ConfigProvider>
    </>
  );
};

export default Person;