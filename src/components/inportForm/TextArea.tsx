import React from "react";
import styled from "styled-components";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";

interface CustomInputProps {
  name: string;
  value: string;
  required: boolean;
  placeHolder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInputStyle = styled.div`
  font-size: 10px;
  font-weight: 100;
  margin-bottom: 10px;
  width: 350px;
  height: 300px;
  padding-top: 10px;
  padding-bottom: 20px;
`;

const TextAreaComponent: React.FC<CustomInputProps> = ({
  name,
  value,
  required,
  placeHolder,
  onChange,
}) => {
  return (
    <CustomInputStyle>
      <h3>{name}</h3>
      <TextArea
        required={required}
        name={value}
        onChange={
          onChange as unknown as React.ChangeEventHandler<HTMLTextAreaElement>
        }
        style={{ width: "100%", height: "100%", borderColor: "#01A7E1" }}
        placeholder={placeHolder}
      />
    </CustomInputStyle>
  );
};

export default TextAreaComponent;
