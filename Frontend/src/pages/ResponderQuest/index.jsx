import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as C from "./styles";
import Pergunta from "../../components/pergunta";
import Button from "../../components/button";

const StudentForm = () => {
  const [perguntas, setPerguntas] = useState([]);
  const [respostas, setRespostas] = useState([]);
  const [tipoQuestionario, setTipoQuestionario] = useState("");
  const { hash } = useParams();
  const navigate = useNavigate();

  // State para armazenar a data de fim do questionário
  const [dataFim, setDataFim] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/questionario/${hash}`
        );
        setPerguntas(res.data);
      } catch (error) {
        console.log("Erro ao buscar perguntas:", error);
      }
    };

    fetchData();

    // Cálculo da data de hoje + 1 dia
    const dataAtual = new Date();
    dataAtual.setDate(dataAtual.getDate() + 1); // Adiciona 1 dia à data atual
    const dataFormatada = dataAtual.toLocaleDateString("pt-BR"); // Formato dd/mm/aaaa
    setDataFim(dataFormatada); // Define a data de fim no estado
  }, [hash]);

  useEffect(() => {
    const fetchDataType = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/questionario/tipo/${hash}`
        );
        setTipoQuestionario(res.data);
      } catch (error) {
        console.log("Erro ao buscar tipo:", error);
      }
    };

    fetchDataType();
  }, [hash]);

  const handleInputChange = (index, value) => {
    const updatedValues = [...respostas];
    updatedValues[index] = value;
    setRespostas(updatedValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/respostas`, {
        hash,
        respostas: respostas.map((resposta, index) => ({
          num: index + 1,
          resposta,
        })),
      });
      setRespostas([]);
      navigate(`/enviado`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <C.Container>
      <C.Content>
        <C.titlePage>Questionário</C.titlePage>
        <C.textoAbertura>
          Questionário aberto até: {dataFim}
        </C.textoAbertura>{" "}
        {/* Exibe a data calculada */}
      </C.Content>
      <C.ContentQuest>
        <C.titleQuest>
          Questionário {tipoQuestionario === "PRE" ? "Pré-Aula" : "Pós-Aula"}
        </C.titleQuest>
        <C.line />
        {perguntas.length > 0 ? (
          <C.PerguntasQuest>
            {perguntas.map((pergunta, index) => (
              <Pergunta
                key={index}
                num={index + 1}
                pergunta={pergunta.pergunta}
                nomeLabel={`pergunta-${index + 1}`}
                onChange={(value) => handleInputChange(index, value)}
              />
            ))}
          </C.PerguntasQuest>
        ) : (
          <div style={{ textAlign: "center", marginTop: "28px" }}>
            Não existem questionários.
          </div>
        )}
        <C.ButtonContainer>
          <Button Text="Enviar" onClick={handleSubmit} />
        </C.ButtonContainer>
      </C.ContentQuest>
    </C.Container>
  );
};

export default StudentForm;
