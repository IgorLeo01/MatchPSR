import styled from "styled-components"
export const Page = styled.div`
    padding-top: 100px;
    h1{
        padding-left: 100px;
        color: #01A7E1;
    }
    .vagas{
        
    }
`;
export const Content = styled.div`
    .cabecalho{
        display: flex;
        justify-content: space-between;
        input{
            margin-left: 650px;
            margin-top: 25px;
            height: 30px;
            width: 350px;
            border-radius: 50px;
            border: none;
            background-color: #fff;
            -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.13);
            -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.13);
            box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.13);
            margin-right: auto
        }
        input::placeholder{
            padding-left: 20px;
        }
    }
    .cabecalhoInfo{
        p{
            margin-left: 100px;
        }
    }
    .list{
        display: grid;
        grid-template-columns: 430px 430px 430px;
        li{
            list-style-type: none;
        }
    }
`;