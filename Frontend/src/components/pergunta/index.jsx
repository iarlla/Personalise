import * as C from "./styles";

const Pergunta = ({ nomeLabel, pergunta, num }) => {
  return (
    <C.ContainerPergunta>
      <C.Pergunta>
        {num}. {pergunta}
      </C.Pergunta>
      <C.ContainerResposta>
        <C.Resposta name={nomeLabel} />
        <C.LabelResposta> Concordo</C.LabelResposta>
        <C.Resposta name={nomeLabel} />
        <C.LabelResposta> Concordo Parcialmente</C.LabelResposta>
        <C.Resposta name={nomeLabel} />
        <C.LabelResposta> Não Concordo</C.LabelResposta>
      </C.ContainerResposta>
    </C.ContainerPergunta>
  );
};

export default Pergunta;
