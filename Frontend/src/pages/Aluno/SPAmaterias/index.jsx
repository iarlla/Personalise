import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../components/navBar";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";

const TurmasDoAluno = () => {
  const [turmas, setTurmas] = useState([]);
  const { idAluno, idDisc } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchTurmasDoAluno = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/alunos/${idAluno}/turma`);
        setTurmas(res.data);

        if (res.data.length > 0) {
          // Redirecionar para a primeira turma da lista
          const primeiraTurma = res.data[0];
          history.push(`/turmas/${idDisc}/${primeiraTurma.idturma}`);
        } else {
          // Tratar o caso em que o aluno não tem nenhuma turma cadastrada
          console.log("Aluno não está cadastrado em nenhuma turma.");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchTurmasDoAluno();
  }, [idAluno, idDisc, history]);

  return (
    <C.Container>
      <Navbar Text="Aluno" />
      <C.Content>
        <MiniMenu TitleOne="Minhas matérias" urlOne="/materiasA" symbolOne=">" TitleTwo="Minhas turmas" />
        <C.ContainerSejaBemvindo>
          <C.TextSejaBemvindo>Verificando suas turmas...</C.TextSejaBemvindo>
        </C.ContainerSejaBemvindo>
      </C.Content>
    </C.Container>
  );
};

export default TurmasDoAluno;
