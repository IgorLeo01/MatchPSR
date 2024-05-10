import styled from "styled-components";

export const Content = styled.div`
  width: 420px;
  height: 200px;
  border-radius: 24px;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.29);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.29);
  .cabecalho {
    height: 40px;
    margin-left: 20px;
    padding-top: 15px;
    span {
      font-size: 15px;
      padding-top: -20px;
      margin-left: -185px;
    }
    h1 {
      font-size: 17px;
      margin-left: -285px;
      color: #2b4759;
    }
  }
  .cabecalhoInfo {
    width: 150px;
  }
  color: #2b4759;
  margin-left: 100px;
  margin-top: 30px;

  .description {
    padding-top: 35px;
    padding-left: 30px;
    font-size: 13px;
  }
  .descriptionButtons {
    padding-top: 15px;
    padding-left: 55px;
    display: flex;
  }
`;
