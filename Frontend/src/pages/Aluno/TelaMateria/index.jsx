import Navbar from "../../../components/navBar";
import ButtonPrincipal from "../../../components/ButtonPrincipal";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const TelaMateriaAluno = () => {
  const [disciplinas, setDisciplinas] = useState({});
  const { idAluno, idDisc } = useParams();
  const [turmas, setTurmas] = useState([]);
  const { idDisc } = useParams();

  useEffect(() => {
    const fetchDataTurmas = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/aluno_turma/${idAluno}`);
        setTurmas(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataTurmas();
  }, []);

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

  
  return (
    <C.Container>
      <Navbar Text="Aluno" />
      <C.Content>
        <MiniMenu TitleOne="Minhas materias" urlOne="/materiasA" />
        <C.ContainerSejaBemvindo>
          <C.TextSejaBemvindo>Seja bem-vindo, aluno(a)!</C.TextSejaBemvindo>
        </C.ContainerSejaBemvindo>

        <C.MainContainer>
          <C.MainLeftContainer>
            <C.MainLeftTextoDiv>
              <h3>Selecione, ao lado, a matéria desejada</h3>
            </C.MainLeftTextoDiv>
            <C.MainLeftImg src="rafiki.png"></C.MainLeftImg>
          </C.MainLeftContainer>
          <C.MainRightContainer>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <h1 style={{ marginBottom: "30px" }}>Minhas matérias</h1>
            </div>
            <C.line />
            <C.ContainerButtons>
              <Link to="/turmasA/3/${turma.id}">
                <ButtonPrincipal Text="Engenharia de Software" />
              </Link>
              <Link to="/turmasA/4/${turma.idturma}">
                <ButtonPrincipal Text="Design de Software" />
              </Link>
              <Link to="/turmasA/5/${turma.idturma}">
                <ButtonPrincipal Text="Sistemas Operacionais" />
              </Link>
              <Link to="/turmasA/6/${turma.idturma}">
                <ButtonPrincipal Text="Redes de Computadores" />
              </Link>
              <Link to="/turmasA/2${turma.idturma}">
                <ButtonPrincipal Text="Novas tecnologias" />
              </Link>
            </C.ContainerButtons>
          </C.MainRightContainer>
        </C.MainContainer>
      </C.Content>
    </C.Container>
  );
};

export default TelaMateriaAluno;
