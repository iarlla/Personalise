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
  margin-left: 20px;
  margin-bottom: 20px;
  color: #00396d;
`;

export const TextSejaBemvindo = styled.h1`
  font-size: 40px;
`;

export const MainContainer = styled.div`
  margin-left: 85px;
  margin-right: 5%;
  margin-top: -20px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
`;

export const MainLeftContainer = styled.div`
  background-color: white;
  border-radius: 30px;
  color: white;
  font-size: 25px;
  margin-right: 35px;
  height: 725px;
  width: 645px;
`;

export const line = styled.hr`
  color: #00396d;
  margin-left: 40px;
  width: 96%;
  border: 2px solid;
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
  margin-top: 30px;
`;

export const MainLeftImg = styled.img`
  width: 105%;
  margin-top: 20px;
  margin-right: 50px;
`;

export const MainRightContainer = styled.div`
  background-color: white;
  width: 66%;
  border-radius: 30px;
  padding: 40px;
  justify-content: center;
  color: #00396d;
`;
