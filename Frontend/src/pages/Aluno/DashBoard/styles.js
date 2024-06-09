import styled from "styled-components";

export const titlePage = styled.h2`
  color: #00396d;
  font-size: 40px;
  margin-left: 20px;
`;

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
  padding: 0px;
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

export const ContainerBlue = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-around;
  h3 {
    color: #00396d; 
  }
  p {
    color: #797979; 
  }
  `;

export const BlueBox = styled.div`
  padding: 45px 40px;
  outline: none;
  border: none;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  background-color: #00396d;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  margin: 15px;
`;

export const ContainerWhite = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-around;
  h3 {
    color: #00396d; 
  }
  p {
    color: #797979; 
  }
  `;

  export const WhiteBox = styled.div`
  background-color: white;
  padding: 16px 20px;
  outline: none;
  border-color: #00396d;
  border-radius: 5px;
  width: 682.23px;  // ajuste manual
  cursor: pointer;
  color: #00396d;
  font-weight: 600;
  font-size: 16px;
  width: 100%;
  margin: 15px;
`;


export const MainLeftImg = styled.img`
  width: 105%;
  margin-top: 20px;
  margin-right: 50px;
`;

export const MainTopContainer = styled.div`
  width: 100%;
  border-radius: 30px;
  padding: 40px;
  justify-content: center;
  color: #00396d;
  
`;

