import React, { FC } from 'react';
import FormProps from '../../FormProps';
import InputForm from '../../../../components/inportForm/InputForm';


const Person: FC<FormProps> = ({ setForm, formData, navigation }) => {
  const { Name, phone, email, password,  city, address } = formData;
  const { previous, next } = navigation;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...formData, [name]: value });
    console.log("FORM ", formData);
  };

  return (
    <>
      <div className="form">
        <InputForm name='Nome' value={Name} onChange={handleInputChange} required/>
        <InputForm name='Telefone' value={phone} onChange={handleInputChange} required/>
        <InputForm name='Email' value={email} onChange={handleInputChange} required/>
        <InputForm name='Senha' value={password} onChange={handleInputChange} required/>
        <InputForm name='Endereço' value={address} onChange={handleInputChange} required/>
        <InputForm name='Cidade' value={city} onChange={handleInputChange} required/>
      </div>
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </>
  );
};

export default Person;