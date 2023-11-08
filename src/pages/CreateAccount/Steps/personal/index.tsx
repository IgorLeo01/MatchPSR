import React, { FC } from 'react';
import FormProps from '../../FormProps';
// import * as S from "./style";
import InputForm from '../../../../components/inportForm/InputForm';


const Personal: FC<FormProps> = ({ setForm, formData, navigation }) => {
  const { Name, phone, email, password,  city, address } = formData;
  const { previous, next } = navigation;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="form">
        <InputForm name='Nome' value={Name} onChange={handleInputChange} />
        <InputForm name='Telefone' value={phone} onChange={handleInputChange} />
        <InputForm name='Email' value={email} onChange={handleInputChange} />
        <InputForm name='Senha' value={password} onChange={handleInputChange} />
        <InputForm name='Endereço' value={address} onChange={handleInputChange} />
        <InputForm name='Cidade' value={city} onChange={handleInputChange} />
      </div>
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </>
  );
};

export default Personal;

