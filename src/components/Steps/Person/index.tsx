import React, { FC, useState } from 'react';
import InputForm from '../../inportForm/InputForm';


const Person: FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const { name, value } = e.target;
    console.log("FORM ", name, value);
  };

  return (
    <>
      <div className="form">
        <InputForm name='Nome' value={name} onChange={(e: any) =>setName(e)} required/>
        <InputForm name='Telefone' value={phone} onChange={(e: any) =>setPhone(e)} required/>
        <InputForm name='Email' value={email} onChange={(e: any) =>setEmail(e)} required/>
        <InputForm name='Senha' value={password} onChange={(e: any) =>setPassword(e)} required/>
        <InputForm name='Endereço' value={address} onChange={(e: any) =>setAddress(e)} required/>
        <InputForm name='Cidade' value={city} onChange={(e: any) =>setCity(e)} required/>
      </div>
    </>
  );
};

export default Person;