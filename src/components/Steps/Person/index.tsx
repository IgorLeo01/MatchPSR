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
    updateFielHandler("nascimento", dateStr);
  };
  return (
    <>
      <S.formPersonInformation>
        <InputForm name='Nome' value={data.nome} onChange={(e)=>handleInputChange(e, "nome")} required/>
        <InputForm name='CPF' value={data.cpf} onChange={(e)=>handleInputChange(e, "cpf")} required/>
        <CustomInputStyle>
            <h3>Data de Naciemnto</h3>
            <DatePicker
                format={dateFormat} 
                onChange={onChange} 
                placeholder='__/__/___' style={{ width: '100%' }} 
                name={data.nascimento}
            />
        </CustomInputStyle>
        <InputForm name='Telefone' value={data.contato_info} onChange={(e)=>handleInputChange(e, "contato_info")} required/>
        <InputForm name='Email' value={data.email} onChange={(e)=>handleInputChange(e, "email")} required/>
        <InputForm name='Senha' isPassword={true} value={data.senha} onChange={(e)=>handleInputChange(e, "senha")} required/>
        <InputForm name='Endereço' value={data.endereco} onChange={(e)=>handleInputChange(e, "endereco")} required/>
        <InputForm name='Cidade' value={data.cidade} onChange={(e)=>handleInputChange(e, "cidade")} required/>
        <InputForm name='Cep' value={data.cep} onChange={(e)=>handleInputChange(e, "cep")} required/>
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