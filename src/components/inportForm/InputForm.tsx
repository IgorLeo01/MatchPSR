import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

interface CustomInputProps {
    name: string;
    value: string;
    required: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInputStyle = styled.div`
    font-size: 10px;
    font-weight: 100;
    margin-bottom: 10px;
`;

const InputForm: React.FC<CustomInputProps> = ({ name, value, onChange, required }) => {
    return (
        <CustomInputStyle>
            <h3>{name}</h3>
            <Input
                required={required}
                name={value}
                onChange={onChange}
            />
        </CustomInputStyle>
    );
};

export default InputForm;
