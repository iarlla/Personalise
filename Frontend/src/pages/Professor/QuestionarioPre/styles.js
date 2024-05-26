import styled from "styled-components";

export const titlePage = styled.h2`
  color: #00396d;
  font-size: 40px;
  margin-left: 20px;
`;

export const titleQuest = styled.h2`
  color: #00396d;
  font-size: 30px;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 10px;
`;

export const line = styled.hr`
  color: #00396d;
  margin-left: 40px;
  margin-right: 40px;
  border: 2px solid;
`;

export const PerguntasQuest = styled.div`
  padding: 5px 0px 0px 40px;
  margin-left: 10px;
  p {
    color: #797979;
    font-size: 25px;
    margin-top: 40px;
  }
`;

export const Content = styled.div`
  flex: 1; /* Faz com que o conteúdo ocupe todo o espaço disponível */
  display: flex;
  justify-content: space-between;
`;

export const textoAbertura = styled.p`
  padding-top: 1%;
  margin-right: 30px;
  color: #797979;
`;

export const ContentQuest = styled.div`
  flex: 100; /* Faz com que o conteúdo ocupe todo o espaço disponível */
  background-color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 30px;
  max-width: calc(100% - 60px); /* Limitar a largura ao espaço disponível */
  border-radius: 15px;
`;

export const Container = styled.div`
  background-color: #e9e9e9;
  min-height: 100vh; /* Garante que o container ocupe toda a altura da tela */
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;
