/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from 'antd';
import React, { FC } from 'react';
import FormProps from '../../FormProps';
// import * as S from "./style";


const Professional: FC<FormProps> = ({ setForm, formData, navigation }) => {
  const { Name } = formData;

  const { previous, next } = navigation;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...formData, [name]: value });
  };

  return (
    <div className="form">
      <h3>Nome</h3>
        <Input
          name="Name" 
          value={Name}
          onChange={handleInputChange}
        /> 
        <div>
          <button onClick={previous}>Previous</button>
          <button onClick={next}>Next</button>
        </div>
      </div>
    );
};

export default Professional;
