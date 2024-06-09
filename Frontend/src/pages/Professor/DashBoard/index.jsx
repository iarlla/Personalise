import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../components/navBar";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";
import useAuth from "../../../hooks/useAuth";

const DashboardProfessor = () => {
  const [disciplinas, setDisciplinas] = useState({});
  const [questionario, setQuestionario] = useState([]);
  const { idDisc, idturma, relatorio } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

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
          `http://localhost:3001/api/respostas/relatorio/${idDisc}`,
          {
            headers: {
              idusuario: currentUser.id,
              idTurma: idturma,
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
          urlThree={`/turmas/${idDisc}/${idturma}`}
          symbolThree=">"
          TitleFour="Relatório da turma"
        />
        <C.ContainerSejaBemvindo>
          <C.titlePage>{disciplinas.nome}</C.titlePage>
        </C.ContainerSejaBemvindo>

        <C.MainContainer>
          <C.MainTopContainer>

            {questionario.length === 0 ? (
              <C.ContainerWhite>
                <C.WhiteBox>
                  <h3>Nao existem questionario para essa disciplina.</h3>
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

export default DashboardProfessor;
