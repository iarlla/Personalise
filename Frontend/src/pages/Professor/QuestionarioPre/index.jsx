import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../components/navBar";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";
import Pergunta from "../../../components/pergunta";
import Button from "../../../components/button";

const QuestionarioPre = () => {
  const [disciplinas, setDisciplinas] = useState({});
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


  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/sessao/${idDisc}/${idturma}/preQuest/editar`);
  };


  return (
    <>
      <C.Container>
        <Navbar Text="Professor" />
        <MiniMenu
          TitleOne="Minhas materias"
          urlOne="/materiasP"
          symbolOne=">"
          TitleTwo="Minhas turmas"
          urlTwo={`/turmas/${idDisc}`}
          symbolTwo=">"
          TitleThree="Sessões"
          urlThree={`/turmas/${idDisc}/${idturma}`}
          symbolThree=">"
          TitleFour="Questionário pré-aula"
        />
        <C.Content>
          <C.titlePage>{disciplinas.nome}</C.titlePage>
          <C.textoAbertura>Questionário aberto até: 18/08/2024</C.textoAbertura>
        </C.Content>
        <C.ContentQuest>
          <C.titleQuest>Questionário Pré-Aula</C.titleQuest>
          <C.line />
          <C.PerguntasQuest>
            <Pergunta num="1" pergunta="Pergunta 1" nomeLabel="pergunta-1" />
            <Pergunta num="2" pergunta="Pergunta 2" nomeLabel="pergunta-2" />
            <Pergunta num="3" pergunta="Pergunta 3" nomeLabel="pergunta-3" />
            <Pergunta num="4" pergunta="Pergunta 4" nomeLabel="pergunta-4" />
            <Pergunta num="5" pergunta="Pergunta 5" nomeLabel="pergunta-5" />
            <Pergunta num="6" pergunta="Pergunta 6" nomeLabel="pergunta-6" />
            <Pergunta num="7" pergunta="Pergunta 7" nomeLabel="pergunta-7" />
          </C.PerguntasQuest>

          <div style={{ margin: "30px" }}>
            <Button Text="Preparar" onClick={handleClick} />
          </div>
        </C.ContentQuest>
      </C.Container>
    </>
  );
};

export default QuestionarioPre;
