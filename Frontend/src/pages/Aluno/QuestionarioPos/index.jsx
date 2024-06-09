import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../components/navBar";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";
import Pergunta from "../../../components/pergunta";
import Button from "../../../components/button";
import useAuth from "../../../hooks/useAuth";

const QuestionarioPosAluno = () => {
  const [disciplinas, setDisciplinas] = useState({});
  const [perguntas, setPerguntas] = useState([]);
  const [respostas, setRespostas] = useState([]);
  const { idDisc, tipo } = useParams();
  const { currentUser } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rest = await axios.get(
          `${import.meta.env.VITE_API_URL}/disciplinas/${idDisc}`
        );
        setDisciplinas(rest.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentUser.id, idDisc]);

  useEffect(() => {
    const fetchDataDisc = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/questionario/aluno/${idDisc}`,
          {
            headers: {
              idUsuario: currentUser.id,
              tipoQuestionario: "POS",
            },
          }
        );
        setPerguntas(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataDisc();
  }, [currentUser.id, idDisc]);

  const handleInputChange = (index, value) => {
    const updatedValues = [...respostas];
    updatedValues[index] = value;
    setRespostas(updatedValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/respostas`, {
        disciplina: idDisc,
        idUsuario: currentUser.id,
        respostas: respostas
          .map((resposta, index) => ({ num: index + 1, resposta }))
          .filter((item) => item.resposta !== null),
        tipo: "POS",
      });
      setRespostas([]);
      navigate(`/sessaoA/${idDisc}/preQuest/enviado`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <C.Container>
        <Navbar Text="Aluno" />
        <MiniMenu
          TitleOne="Minhas matérias"
          urlOne="/materiasA"
          symbolOne=">"
          TitleThree="Sessões"
          urlThree={`/disciplina/${idDisc}`}
          symbolThree=">"
          TitleFour="Questionário pós-aula"
        />
        <C.Content>
          <C.titlePage>{disciplinas.nome}</C.titlePage>
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
              Nao existem questionario
            </div>
          )}
          <div style={{ margin: "30px" }}>
            <Button Text="Enviar" onClick={handleSubmit} />
          </div>
        </C.ContentQuest>
      </C.Container>
    </>
  );
};
export default QuestionarioPosAluno;
