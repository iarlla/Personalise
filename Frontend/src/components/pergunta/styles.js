import styled from "styled-components";

export const ContainerPergunta = styled.div`
  margin: 50px;
`;

export const Pergunta = styled.h4`
  margin-bottom: 10px;
  font-size: 20px;
`;

export const ContainerResposta = styled.div`
  display: flex;
  flex-direction: row; /* Itens em linha para telas maiores */
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column; /* Itens em coluna para telas menores */
    align-items: flex-start;
  }
`;

export const RespostaWrapper = styled.div`
  display: flex;
  align-items: center; /* Alinha verticalmente o input e o label */
  margin-bottom: 10px; /* Espaçamento entre os grupos de radio button */
`;

export const Resposta = styled.input.attrs({ type: "radio" })`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

export const LabelResposta = styled.label`
  margin-right: 80px;
  font-size: 17px;

  @media (max-width: 768px) {
    margin-right: 0; /* Remover o espaçamento à direita para telas menores */
    margin-bottom: 10px; /* Adicionar espaçamento inferior para organizar melhor */
  }
`;
