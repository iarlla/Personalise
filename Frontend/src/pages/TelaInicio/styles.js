import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-around;
  flex-direction: row;
  gap: 10px;
  padding-left: 50px;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
  padding: 20px;
  border-radius: 5px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 950px;
  height: auto;
  margin-top: 50px;
  margin-left: 20px;
`;

export const TxtAzul = styled.span`
  color: #00396D;
`;

export const TxtBranco = styled.span`
  color: #c4c4c4;
`;

export const Titulo = styled.h1`
font-size: 70px
`;

export const SubTitulo = styled.h2`
// font-size: 30px
`;

export const Linha = styled.hr`
  width: 70%;
  height: 1px;
  border: 3px solid #00396D;
  border-radius: 10px
`;