import Navbar from "../../../components/navBar";
import ButtonPrincipal from "../../../components/ButtonPrincipal";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const TelaMateria = () => {
  const [disciplinas, setDisciplinas] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchDataDisc = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/disciplinas/usuario/${currentUser.id}`
        );
        setDisciplinas(res.data);
        console.log(disciplinas);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataDisc();
  }, []);

  return (
    <C.Container>
      <Navbar Text="Professor" />
      <C.Content>
        <MiniMenu TitleOne="Minhas materias" urlOne="/materiasP" />
        <C.ContainerSejaBemvindo>
          <C.TextSejaBemvindo>Seja bem-vindo, professor(a)!</C.TextSejaBemvindo>
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
                  to={`/turmas/${disciplina.id_disciplina}`}
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

export default TelaMateria;
