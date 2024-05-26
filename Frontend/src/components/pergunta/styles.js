import styled from "styled-components";

export const ContainerPergunta = styled.div`
  margin: 50px;
`;

export const Pergunta = styled.h4`
  margin-bottom: 10px;
  font-size: 20px;
`;

export const ContainerResposta = styled.div``;

export const Resposta = styled.input.attrs({ type: "radio" })`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  margin-left: 5px;
  margin-top: 5px;
`;

export const LabelResposta = styled.label`
  margin-right: 80px;
  font-size: 17px;
`;
