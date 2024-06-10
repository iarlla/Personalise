import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../components/navBar";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";
import useAuth from "../../../hooks/useAuth";

const DashboardAluno = () => {
  const [disciplinas, setDisciplinas] = useState({});
  const [questionario, setQuestionario] = useState([]);
  const { idDisc, idturma, relatorio } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchDataDisc = async () => {
      try {
        const res = await axios.get(
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
    const fetchDataTurma = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/respostas/relatorio/${idDisc}`,
          {
            headers: {
              idusuario: currentUser.id,
            },
          }
        );
        setQuestionario(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataTurma();
  }, [idDisc]);

  return (
    <C.Container>
      <Navbar Text="Aluno" />
      <C.Content>
        <MiniMenu
          TitleOne="Minhas matérias"
          urlOne="/materiasA"
          symbolOne=">"
          TitleThree="Sessões"
          urlThree={`/disciplina/${idDisc}`}
          symbolThree=">"
          TitleFour="Relatorio"
        />
        <C.ContainerSejaBemvindo>
          <C.titlePage>{disciplinas.nome}</C.titlePage>
        </C.ContainerSejaBemvindo>

        <C.MainContainer>
          <C.MainTopContainer>
            
          <C.ContainerBlue>
              <C.BlueBox>
              <C.MainLeftImg src={`${window.location.origin}/catolica.svg`}></C.MainLeftImg>
              </C.BlueBox>
              <C.BlueBox>
                <h1>+20.000</h1>
                <h4>Alunos realizando sonhos</h4>
              </C.BlueBox>
              <C.BlueBox>
                <h1>+50</h1>
                <h4>anos de tradição</h4>
              </C.BlueBox>
              <C.BlueBox>
                <h1>+42</h1> 
                <h4>cursos de graduação</h4>
              </C.BlueBox>
            </C.ContainerBlue>

            {questionario.length === 0 ? (
              <C.ContainerWhite>
                <C.WhiteBox>
                  <h3>Nao existem questionario para essa turma.</h3>
                </C.WhiteBox>
              </C.ContainerWhite>
            ) : (
              questionario
                .reduce((acc, pergunta, index) => {
                  const groupIndex = Math.floor(index / 2);
                  if (!acc[groupIndex]) {
                    acc[groupIndex] = [];
                  }
                  acc[groupIndex].push(
                    <C.WhiteBox key={index}>
                      <h3>{pergunta.pergunta}</h3>
                      {pergunta.resposta &&
                        pergunta.resposta.map((resposta, idx) => (
                          <p key={idx}>{resposta.resposta}</p>
                        ))}
                    </C.WhiteBox>
                  );
                  return acc;
                }, [])
                .map((group, index) => (
                  <C.ContainerWhite key={index}>{group}</C.ContainerWhite>
                ))
            )}
          </C.MainTopContainer>
        </C.MainContainer>
      </C.Content>
    </C.Container>
  );
};

export default DashboardAluno;
