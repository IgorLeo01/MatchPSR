import styled from "styled-components";

export const Container = styled.div`
    width: 800px;
    height: 500px;
    background-color: #FFF;
    border-radius: 40px;
    display: flex;
`;

export const loginInformation = styled.div`

    width: 55%;
    height: 100%;
    background-color: #01A7E1;
    border-radius: 40px 0 0 40px;

`;
export const FormContainer = styled.div`
    justify-content: end; 
    width: 45%;
    height: 100%;
    border-radius: 0 40px 40px 0;
    padding-left: 50px;
    padding-top: 25px;
`;

export const ImputsForm = styled.div`
    justify-content: center;
    width: 100%;
    align-items: center;
`;
export const Title = styled.h2`
    padding-left: 50px;
    padding-top: 120px;
    font-size: 22px;
    color: #FFFFFF;
`;

export const LoginPage = styled.div`
    background-color: #F3F3F3;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`