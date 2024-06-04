import Navbar from "../../../components/navBar";
import ButtonPrincipal from "../../../components/ButtonPrincipal";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const TelaMateriaAluno = () => {
  const [disciplinas, setDisciplinas] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchDataDisc = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/disciplinas/usuario/${currentUser.id}`
        );
        setDisciplinas(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataDisc();
  }, [currentUser.id]);



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
                {disciplinas.map((disciplina) => (
                    <Link
                        key={disciplina.id_disciplina}
                        to={`/disciplina/${disciplina.id_disciplina}`}
                    >
                        <ButtonPrincipal Text={disciplina.nome} />
                    </Link>
                ))}
            </C.ContainerButtons>
          </C.MainRightContainer>
        </C.MainContainer>
      </C.Content>
    </C.Container>
  );
};

export default TelaMateriaAluno;
