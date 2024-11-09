import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../components/navBar";
import ButtonPrincipal from "../../../components/ButtonPrincipal";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";
import useAuth from "../../../hooks/useAuth";

const Turmas = () => {
  const [disciplinas, setDisciplinas] = useState({});
  const [turmas, setTurmas] = useState([]);
  const { idDisc } = useParams();
  const { currentUser } = useAuth();
  const [idprofessor, setIdprofessor] = useState({});

  useEffect(() => {
    const fetchIdProfessor = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/professor/${currentUser.id}`
        );
        setIdprofessor(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchIdProfessor();
  }, []);

  useEffect(() => {
    const fetchDataTurmas = async () => {
      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/turmas/disciplina/${idDisc}/professor/${idprofessor}`
        );
        setTurmas(res.data); // Turmas da disciplina
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataTurmas();
  }, [idprofessor]);

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

  return (
    <C.Container>
      <Navbar Text="Professor" />
      <C.Content>
        <MiniMenu
          TitleOne="Minhas materias"
          urlOne="/materiasP"
          symbolOne=">"
          TitleTwo="Minhas turmas"
        />
        <C.ContainerSejaBemvindo>
          <C.TextSejaBemvindo>{disciplinas.nome}</C.TextSejaBemvindo>
        </C.ContainerSejaBemvindo>
        <C.MainContainer>
          <C.MainLeftContainer>
            <C.MainLeftTextoDiv>
              <h3>Selecione, ao lado, a turma desejada</h3>
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
              <h1 style={{ marginBottom: "30px" }}>Minhas Turmas</h1>
            </div>
            <C.line />
            <C.ContainerButtons>
              {turmas.length > 0 ? (
                turmas.map((turma) => (
                  <Link
                    key={turma.idturma}
                    to={`/turmas/${idDisc}/${turma.idturma}`}
                  >
                    <ButtonPrincipal key={turma.idturma} Text={turma.nome} />
                  </Link>
                ))
              ) : (
                <p>Nenhuma turma encontrada.</p>
              )}
            </C.ContainerButtons>
          </C.MainRightContainer>
        </C.MainContainer>
      </C.Content>
    </C.Container>
  );
};

export default Turmas;
