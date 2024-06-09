import * as C from "./styles";
import React, { useState } from 'react';

const Pergunta = ({ nomeLabel, pergunta, num, onChange }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        if (onChange) {
            onChange(value);
        }
    };

  return (
    <C.ContainerPergunta>
      <C.Pergunta>
        {num}. {pergunta}
      </C.Pergunta>
      <C.ContainerResposta>
        <C.Resposta
            name={nomeLabel}
            value="0"
            checked={selectedOption === '0'}
            onChange={handleOptionChange}
        />
        <C.LabelResposta> Concordo</C.LabelResposta>

        <C.Resposta
            name={nomeLabel}
            value="1"
            checked={selectedOption === '1'}
            onChange={handleOptionChange}
        />
        <C.LabelResposta> Concordo Parcialmente</C.LabelResposta>

        <C.Resposta
            name={nomeLabel}
            value="2"
            checked={selectedOption === '2'}
            onChange={handleOptionChange}
        />
        <C.LabelResposta> Não Concordo</C.LabelResposta>
      </C.ContainerResposta>
    </C.ContainerPergunta>
  );
};

export default Pergunta;
