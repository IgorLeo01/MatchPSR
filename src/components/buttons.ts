import styled, { css } from 'styled-components';

interface ButtonProps {
  isOutline?: boolean; 
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.isOutline ? 'transparent' : '#fff')};
  color: ${(props) => (props.isOutline ? '#fff' : '#01A7E1')};
  border:  ${(props) => (props.isOutline ? '2px solid #ffff' : 'none')};
  border-radius: 35px;
  width: 175px;
  height: 33px;
  font-size: 15px;
  font-weight: 750;
  cursor: pointer;
  transition: background-color 0.4s, color 0.4s;

  &:hover {
    background-color: ${(props) => (props.isOutline ? '#fff' : '#2B4759')};
    color:  ${(props) => (props.isOutline ? '#01A7E1' : '#fff')};
  }
`;
