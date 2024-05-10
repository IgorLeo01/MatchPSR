import styled from 'styled-components';

export const Page = styled.div`
  padding-top: 100px;
  h1 {
    color: #01A7E1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column; // Mantém a coluna para alinhamento
  align-items: center; // Centraliza o conteúdo
  padding: 20px;

  .icone {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%; // Deixa a imagem redonda
    }
  }

  .info {
    display: flex;
    flex-direction: column; // Para manter uma coluna
    align-items: center; // Centraliza horizontalmente para geral
    padding: 20px;
    max-width: 600px;

    h1 {
      font-size: 2rem; // Aumenta o tamanho do primeiro título
      font-weight: bold; // Deixa o título mais proeminente
      margin-bottom: 10px; // Espaçamento entre título e subtítulos
    }
    
    .profileInfo {
      text-align: left; // Alinha subtítulos à esquerda
      width: 100%; // Garante que ocupe a largura total do container

      h1 {
        font-size: 1.5rem;
        color: #333;
        margin-bottom: 10px;
      }

      h2 {
        background-color: #e0f7fa;
        padding: 5px 10px;
        border-radius: 5px;
        color: #004d40;
        margin-bottom: 15px;
      }
    }
  }

  .editButton {
    margin-top: 20px; // Espaçamento entre as informações e o botão
    display: flex;
    justify-content: center;

    button {
      background-color: #01A7E1; // Cor azul
      color: white;
      border: none;
      border-radius: 20px; // Bordas arredondadas
      padding: 10px 20px;
      cursor: pointer;
      font-size: 1rem;
      transition: 0.3s; // Transição para hover
      
      &:hover {
        background-color: #008bbf; // Cor mais escura no hover
      }
    }
  }
`;
