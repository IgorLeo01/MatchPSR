import styled, { css } from 'styled-components';

interface ButtonProps {
  isOutline?: boolean; 
  isBlueOutline?: boolean; 
  isBlue?: boolean; 
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => {
    if (props.isOutline) {
      return 'transparent';
    } else if (props.isBlueOutline) {
      return 'transparent';
    }else if (props.isBlue) {
      return '#01A7E1';
    } else {
      return '#fff';
    }
  }};

  color: ${(props) => {
    if (props.isOutline) {
      return '#fff';
    } else if (props.isBlueOutline) {
      return '#01A7E1';
    } else if (props.isBlue) {
      return '#fff';
    } else {
      return '#01A7E1';
    }
  }};

  border: ${(props) => {
    if (props.isOutline) {
      return '2px solid #ffff';
    } else if (props.isBlueOutline) {
      return '2px solid #01A7E1';
    } else {
      return 'none';
    }
  }};
  border-radius: 35px;
  width: 175px;
  height: 33px;
  font-size: 15px;
  font-weight: 750;
  cursor: pointer;
  transition: background-color 0.4s, color 0.4s;

  &:hover {
    background-color: ${(props) => {
      if (props.isOutline) {
        return '#ffff';
      } else if (props.isBlueOutline) {
        return '#01A7E1';
      } else if (props.isBlue) {
        return '#2B4759';
      } else {
        return '#2B4759';
      }
    }};
    color: ${(props) => {
      if (props.isOutline) {
        return '#01A7E1';
      } else if (props.isBlueOutline) {
        return '#fff';
      } else if (props.isBlue) {
        return '#fff';
      } else {
        return '#fff';
      }
    }};
  }
`;
