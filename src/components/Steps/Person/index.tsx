import React, { FC, useState } from 'react';
import InputForm from '../../inportForm/InputForm';
import { StepProps } from '../../../hooks/StepsProps';


const Person: FC<StepProps> = ({data, updateFielHandler}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFielHandler(name, value);
    console.log("FORM ", name, value);
  };

  return (
    <>
      <div className="form">
        <InputForm name='Nome' value={data.name} onChange={handleInputChange} required/>
        <InputForm name='Telefone' value={data.phone} onChange={handleInputChange} required/>
        <InputForm name='Email' value={data.email} onChange={handleInputChange} required/>
        <InputForm name='Senha' value={data.password} onChange={handleInputChange} required/>
        <InputForm name='Endereço' value={data.address} onChange={handleInputChange} required/>
        <InputForm name='Cidade' value={data.city} onChange={handleInputChange} required/>
      </div>
    </>
  );
};

export default Person;