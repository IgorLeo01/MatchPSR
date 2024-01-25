/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from 'antd';
import React, { FC } from 'react';


const Professional: FC = () => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("FORM ", name, value);
  };

  return (
    <div className="form">
      <h3>Nome</h3>
        <Input
          name="Name" 
          value={Name}
          onChange={handleInputChange}
        /> 
      </div>
    );
};

export default Professional;
