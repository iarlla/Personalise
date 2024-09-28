import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as C from "./styles"; // Use updated styles with media queries
import Pergunta from "../../components/pergunta";
import Button from "../../components/button";

const StudentForm = () => {
  const [perguntas, setPerguntas] = useState([]);
  const [respostas, setRespostas] = useState([]); // State to hold the answers
  const { hash } = useParams(); // Get the hash from the URL
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/questionario/${hash}`,
          {
            headers: {
              tipoQuestionario: "PRE",
            },
          }
        );
        setPerguntas(res.data);
      } catch (error) {
        console.log("Erro ao buscar perguntas:", error);
      }
    };

    fetchData();
  }, [hash]);

  const handleInputChange = (index, value) => {
    const updatedValues = [...respostas];
    updatedValues[index] = value; // Store the answer in the respostas array
    setRespostas(updatedValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/respostas`, {
        hash, // Include the hash in the request
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
        <C.textoAbertura>Questionário aberto até: 18/08/2024</C.textoAbertura>
      </C.Content>
      <C.ContentQuest>
        <C.titleQuest>Questionário Pós-Aula</C.titleQuest>
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
