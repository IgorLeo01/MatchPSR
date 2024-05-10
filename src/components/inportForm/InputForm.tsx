import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

interface CustomInputProps {
    name: string;
    value: string;
    required: boolean;
    isPassword?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInputStyle = styled.div`
    font-size: 10px;
    font-weight: 100;
    margin-bottom: 10px;
`;

const InputForm: React.FC<CustomInputProps> = ({ name, value, onChange, required, isPassword }) => {
    return (
        <div>
            <CustomInputStyle>
                <h3>{name}</h3>
                {isPassword ? (
                    <Input.Password
                        required={required}
                        value={value}
                        onChange={onChange}
                    />
                ) : (
                    <Input
                        required={required}
                        value={value}
                        onChange={onChange}
                    />
                )}
            </CustomInputStyle>
        </div>
    );
};

export default InputForm;
