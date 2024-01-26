/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from 'antd';
import React, { FC } from 'react';
import { StepProps } from '../../../hooks/StepsProps';


const Professional: FC<StepProps> = ({ data, updateFielHandler}) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFielHandler(name, value);
    console.log("FORM ", name, value);
  };

  return (
    <div className="form">
      <h3>Nome</h3>
        <Input
          name="Name" 
          value={data.name}
          onChange={handleInputChange}
        /> 
      </div>
    );
};

export default Professional;
