import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../components/navBar";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";
import Pergunta from "../../../components/pergunta";
import Button from "../../../components/button";

const QuestionarioPosAluno = () => {
  const [disciplinas, setDisciplinas] = useState({});
  const [turma, setTurma] = useState([]);
  const [respostas, setRespostas] = useState({});
  const { idDisc, idturma } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataDisc = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/disciplinas/${idDisc}`
        );
        setDisciplinas(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataDisc();
  }, [idDisc]);

  useEffect(() => {
    const fetchDataTurma = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/turmas/${idturma}`
        );
        setTurma(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataTurma();
  }, [idturma]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/api/respostas`, {
        idDisc,
        idturma,
        respostas,
      });
      navigate(`/sessaoA/${idDisc}/${idturma}/posQuest/enviado`);
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
          <C.PerguntasQuest>
            <Pergunta
              num="1"
              pergunta="Pergunta 1"
              nomeLabel="pergunta-1"
              onChange={handleInputChange}
            />
            <Pergunta
              num="2"
              pergunta="Pergunta 2"
              nomeLabel="pergunta-2"
              onChange={handleInputChange}
            />
            <Pergunta
              num="3"
              pergunta="Pergunta 3"
              nomeLabel="pergunta-3"
              onChange={handleInputChange}
            />
            <Pergunta
              num="4"
              pergunta="Pergunta 4"
              nomeLabel="pergunta-4"
              onChange={handleInputChange}
            />
            <Pergunta
              num="5"
              pergunta="Pergunta 5"
              nomeLabel="pergunta-5"
              onChange={handleInputChange}
            />
            <Pergunta
              num="6"
              pergunta="Pergunta 6"
              nomeLabel="pergunta-6"
              onChange={handleInputChange}
            />
            <Pergunta
              num="7"
              pergunta="Pergunta 7"
              nomeLabel="pergunta-7"
              onChange={handleInputChange}
            />
          </C.PerguntasQuest>

          <div style={{ margin: "30px" }}>
            <Button Text="Enviar" onClick={handleSubmit} />
          </div>
        </C.ContentQuest>
      </C.Container>
    </>
  );
};

export default QuestionarioPosAluno;
