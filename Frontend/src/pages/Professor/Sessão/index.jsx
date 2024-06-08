import { useState, useEffect } from "react";
import Navbar from "../../../components/navBar";
import ButtonPrincipal from "../../../components/ButtonPrincipal";
import MiniMenu from "../../../components/miniMenu";
import useAuth from "../../../hooks/useAuth";
import * as C from "./styles";
import { useParams, Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const Sessao = () => {
  const [turma, setTurma] = useState({});
  const [disciplinas, setDisciplinas] = useState({});
  const [professor, setProfessor] = useState({});
  const [questionario, setQuestionario] = useState({});
  const { idDisc, idturma } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchDataDisc = async () => {
      try {
        const res = await Axios.get(
          `${import.meta.env.VITE_API_URL}/disciplinas/${idDisc}`
        );
        setDisciplinas(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataDisc();
  }, [idDisc]);

  useEffect(() => {
    const fetchDataDisc = async () => {
      try {
        const res = await Axios.get(
          `${import.meta.env.VITE_API_URL}/turmas/${idturma}`
        );
        setTurma(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataDisc();
  }, [idturma]);

  useEffect(() => {
    const fetchDataID = async () => {
      try {
        const res = await Axios.post(
          `${import.meta.env.VITE_API_URL}/professor/id`,
          {
            professorId: currentUser.id,
          }
        );
        setProfessor(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataID();
  }, [currentUser.id]);

  useEffect(() => {
    const fetchDataQuestID = async () => {
      try {
        const res = await Axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/questionario/byDiscTurmaProfessor/${professor}/${idDisc}/${idturma}`
        );
        setQuestionario(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataQuestID();
  }, [professor]);

  const handleClickRedirect = async (e) => {
    e.preventDefault();
    try {
      if (questionario.length > 0) {
        navigate(`/sessao/${idDisc}/${idturma}/preQuest/meuQuest`);
      } else {
        navigate(`/sessao/${idDisc}/${idturma}/preQuest`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <C.Container>
        <Navbar Text="Professor" />
        <C.Content>
          <MiniMenu
            TitleOne="Minhas materias"
            urlOne="/materiasP"
            symbolOne=">"
            TitleTwo="Minhas turmas"
            urlTwo={`/turmas/${idDisc}`}
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
                  Text="Questionario pré-aula"
                  onClick={handleClickRedirect}
                ></ButtonPrincipal>
                <Link to={`/sessao/${idDisc}/${idturma}/posQuest`}>
                  <ButtonPrincipal Text="Questionario pós-aula"></ButtonPrincipal>
                </Link>
                <Link to={`/sessao/${idDisc}/${idturma}/relatorio`}>
                  <ButtonPrincipal Text="Relatórios da turma"></ButtonPrincipal>
                </Link>
              </C.ContainerButtons>
            </C.MainRightContainer>
          </C.MainContainer>
        </C.Content>
      </C.Container>
    </>
  );
};

export default Sessao;
