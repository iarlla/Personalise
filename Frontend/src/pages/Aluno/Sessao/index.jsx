import { useState, useEffect } from "react";
import Navbar from "../../../components/navBar";
import ButtonPrincipal from "../../../components/ButtonPrincipal";
import MiniMenu from "../../../components/miniMenu";
import useAuth from "../../../hooks/useAuth";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const SessaoA = () => {
  const [turma, setTurma] = useState({});
  const [questionario, setQuestionario] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const turmaId = currentUser.turmaId;

        // Buscar dados da turma
        const resTurma = await Axios.get(`http://localhost:3001/api/turmas/${turmaId}`);
        setTurma(resTurma.data);

        // Buscar questionários da turma
        const resQuestionario = await Axios.get(
          `http://localhost:3001/api/questionario/byTurma/${turmaId}`
        );
        setQuestionario(resQuestionario.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentUser.turmaId]);

  const handleClickRedirect = async (e) => {
    e.preventDefault();
    try {
        navigate(`/sessaoA/${turma.id}/preQuest`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <C.Container>
      <Navbar Text="Aluno" />
      <C.Content>
        <MiniMenu
          TitleOne="Minhas matérias"
          urlOne="/materiasA"
          symbolOne=">"
          TitleTwo="Minhas turmas"
          urlTwo={`/turmas/${turma.id}`}
          symbolTwo=">"
          TitleThree="Sessões"
        />
        <C.ContainerSejaBemvindo>
          <C.TextSejaBemvindo>Sessão (TURMA {turma.nome})</C.TextSejaBemvindo>
        </C.ContainerSejaBemvindo>

        <C.MainContainer>
          <C.MainLeftContainer>
            <C.MainLeftTextoDiv>
              <h3>Selecione, ao lado, a sessão desejada</h3>
            </C.MainLeftTextoDiv>
            <C.MainLeftImg
              src={`${window.location.origin}/rafiki.png`}
            ></C.MainLeftImg>
          </C.MainLeftContainer>
          <C.MainRightContainer>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <h1 style={{ marginBottom: "30px" }}>Sessões</h1>
            </div>
            <C.line />
            <C.ContainerButtons>
              <ButtonPrincipal
                Text="Questionário pré-aula"
                onClick={handleClickRedirect}
              ></ButtonPrincipal>
              <Link to={`/sessaoA/${turma.id}/posQuest`}>
                <ButtonPrincipal Text="Questionário pós-aula"></ButtonPrincipal>
              </Link>
              <Link to={`/sessaoA/${turma.id}/relatorio`}>
                <ButtonPrincipal Text="Relatórios da turma"></ButtonPrincipal>
              </Link>
            </C.ContainerButtons>
          </C.MainRightContainer>
        </C.MainContainer>
      </C.Content>
    </C.Container>
  );
};

export default SessaoA;
