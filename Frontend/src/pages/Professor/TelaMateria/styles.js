import styled from "styled-components";

export const Content = styled.div`
  flex: 1; /* Faz com que o conteúdo ocupe todo o espaço disponível */
`;

export const Container = styled.div`
  background-color: #e9e9e9;
  min-height: 100vh; /* Garante que o container ocupe toda a altura da tela */
  display: flex;
  flex-direction: column;
`;

export const ContainerSejaBemvindo = styled.div`
  margin: 2%;
  margin-top: 90px;
  color: #00396d;
`;

export const TextSejaBemvindo = styled.h1``;

export const MainContainer = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  margin-top: -20px;
  padding: 30px;
  height: 78%;
  display: flex;
  justify-content: space-between;
`;

export const MainLeftContainer = styled.div`
  background-color: white;
  border-radius: 30px;
  color: white;
  font-size: 25px;
  width: 545px;
`;

export const MainLeftTextoDiv = styled.div`
  background-color: #00396d;
  padding: 30px;
  padding-bottom: 70px;
  padding-top: 40px;
  border-radius: 30px 30px 60% 0%;
`;

export const ContainerButtons = styled.div`
  text-align: center;
`;

export const MainLeftImg = styled.img`
  width: 100%;
  margin-top: 30px;
`;

export const MainRightContainer = styled.div`
  background-color: white;
  width: 66%;
  border-radius: 30px;
  padding: 40px;
  justify-content: center;
  color: #00396d;
`;
