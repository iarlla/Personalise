import { useState, useContext } from "react";
import Navbar from "../../../components/navBar";
import ButtonPrincipal from "../../../components/ButtonPrincipal";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";
import { Link } from "react-router-dom";

const OpcoesQuest = () => {
  return (
    <>
      <C.Container>
        <Navbar Text="Professor" />
        <C.Content>
          <MiniMenu TitleOne="Minhas materias" urlOne="/materiasP" />
          <C.ContainerSejaBemvindo>
            <C.TextSejaBemvindo>
              Meus Questionários
            </C.TextSejaBemvindo>
          </C.ContainerSejaBemvindo>

          <C.MainContainer>
            <C.MainLeftContainer>
              <C.MainLeftTextoDiv>
                <h3>Selecione, ao lado, a sessão desejada</h3>
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
                <h1 style={{ marginBottom: "30px" }}>Sessões</h1>
              </div>
              <C.line />
              <C.ContainerButtons>
                <Link to="/home">
                    <ButtonPrincipal Text="Questionário Pré-aula"></ButtonPrincipal>
                </Link>
                <Link to="/home">
                    <ButtonPrincipal Text="Questionário pós-aula"></ButtonPrincipal>
                </Link>
                <Link to="/home">
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

export default OpcoesQuest;