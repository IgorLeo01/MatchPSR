import React from 'react';
import styled from 'styled-components';
import { DatePicker } from 'antd';

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

const DatePickerForm: React.FC<CustomInputProps> = ({ name, value, onChange }) => {
    const dateFormat = 'DD/MM/YYYY';
    return (
        <CustomInputStyle>
            <h3>{name}</h3>
            <DatePicker
                format={dateFormat} 
                onChange={(e:any) => (onChange(e.target.value))} 
                placeholder='__/__/___' style={{ width: '100%' }} 
                name={value}
            />
        </CustomInputStyle>
    );
};

export default DatePickerForm;
