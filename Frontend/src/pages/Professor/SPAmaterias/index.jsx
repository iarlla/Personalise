import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../components/navBar";
import ButtonPrincipal from "../../../components/ButtonPrincipal";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";

const Turmas = () => {
  const [disciplinas, setDisciplinas] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchDataDisc = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/disciplinas/${id}`
        );
        setDisciplinas(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataDisc();
  }, [id]);

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
                <ButtonPrincipal Text="turma vinda do banco"></ButtonPrincipal>
                <ButtonPrincipal Text="turma vinda do banco"></ButtonPrincipal>
                <ButtonPrincipal Text="turma vinda do banco"></ButtonPrincipal>
                <ButtonPrincipal Text="turma vinda do banco"></ButtonPrincipal>
                <ButtonPrincipal Text="turma vinda do banco"></ButtonPrincipal>
              </C.ContainerButtons>
            </C.MainRightContainer>
          </C.MainContainer>
        </C.Content>
      </C.Container>
    </>
  );
};

export default Turmas;
