import React, { FC, useState } from 'react';
import InputForm from '../../inportForm/InputForm';
import { StepProps } from '../../../hooks/StepsProps';
import { ConfigProvider, DatePicker, Steps } from 'antd';
import * as S from './style';
import type { DatePickerProps } from 'antd';
import styled from 'styled-components';
export const CustomInputStyle = styled.div`
    font-size: 10px;
    font-weight: 100;
    margin-bottom: 10px;
    `;


const Person: FC<StepProps> = ({data, updateFielHandler}) => {
  const dateFormat = 'DD/MM/YYYY';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const { value } = e.target;
    updateFielHandler(name, value);
  };

  const onChange: DatePickerProps['onChange'] = (_, dateStr) => {
    console.log(dateStr);
    updateFielHandler("birth", dateStr);
  };

  return (
    <>
      <S.formPersonInformation>
        <InputForm name='Nome' value={data.name} onChange={(e)=>handleInputChange(e, "name")} required/>
        <InputForm name='CPF' value={data.document} onChange={(e)=>handleInputChange(e, "document")} required/>
        <CustomInputStyle>
            <h3>Data de Naciemnto</h3>
            <DatePicker
                format={dateFormat} 
                onChange={onChange} 
                placeholder='__/__/___' style={{ width: '100%' }} 
                name={data.birth}
            />
        </CustomInputStyle>
        <InputForm name='Telefone' value={data.phone} onChange={(e)=>handleInputChange(e, "phone")} required/>
        <InputForm name='Email' value={data.email} onChange={(e)=>handleInputChange(e, "email")} required/>
        <InputForm name='Senha' isPassword={true} value={data.password} onChange={(e)=>handleInputChange(e, "password")} required/>
        <InputForm name='Endereço' value={data.address} onChange={(e)=>handleInputChange(e, "address")} required/>
        <InputForm name='Cidade' value={data.city} onChange={(e)=>handleInputChange(e, "city")} required/>
        <InputForm name='Cep' value={data.zip} onChange={(e)=>handleInputChange(e, "zip")} required/>
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