import { useState, useEffect } from "react";
import Navbar from "../../../components/navBar";
import ButtonPrincipal from "../../../components/ButtonPrincipal";
import MiniMenu from "../../../components/miniMenu";
import useAuth from "../../../hooks/useAuth";
import * as C from "./styles";
import { useParams, Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const SessaoA = () => {
  const { idDisc } = useParams();
  const [disciplina, setDisciplina] = useState('');
  const [questionario, setQuestionario] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nomeDisciplina = await Axios.get(
          `http://localhost:3001/api/disciplinas/${idDisc}`
        );
        setDisciplina(nomeDisciplina.data.nome);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentUser.id, idDisc]);



  const handleClickRedirect = async (e) => {
    e.preventDefault();
    try {
        navigate(`/sessaoA/${idDisc}/preQuest`);
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
          TitleTwo="Sessões"
        />
        <C.ContainerSejaBemvindo>
          <C.TextSejaBemvindo>Sessão ({disciplina})</C.TextSejaBemvindo>
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
              <Link to={`/sessaoA/${idDisc}/posQuest`}>
                <ButtonPrincipal Text="Questionário pós-aula"></ButtonPrincipal>
              </Link>
              <Link to={`/sessaoA/${idDisc}/relatorio`}>
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
