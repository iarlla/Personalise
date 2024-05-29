import React from 'react';
import Navbar from "../../../components/navBar";
import ButtonPrincipal from "../../../components/ButtonPrincipal";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";
import { Link } from "react-router-dom";

const TelaMateriaAluno = () => {
  return (
    <C.Container>
      <Navbar Text="Aluno" />
      <C.Content>
        <MiniMenu TitleOne="Minhas matérias" urlOne="/materiasA" />
        <C.ContainerSejaBemvindo>
          <C.TextSejaBemvindo>Seja bem-vindo, aluno(a)!</C.TextSejaBemvindo>
        </C.ContainerSejaBemvindo>

        <C.MainContainer>
          <C.MainLeftContainer>
            <C.MainLeftTextoDiv>
              <h3>Selecione, ao lado, a matéria desejada</h3>
            </C.MainLeftTextoDiv>
            <C.MainLeftImg src="rafiki.png" alt="Imagem ilustrativa" />
          </C.MainLeftContainer>
          <C.MainRightContainer>
            <C.CenteredTitle>
              <h1>Minhas matérias</h1>
            </C.CenteredTitle>
            <C.Line />
            <C.ContainerButtons>
              <Link to="/materias/eng-software">
                <ButtonPrincipal Text="Engenharia de Software" />
              </Link>
              <Link to="/materias/design-software">
                <ButtonPrincipal Text="Design de Software" />
              </Link>
              <Link to="/materias/sistemas-operacionais">
                <ButtonPrincipal Text="Sistemas Operacionais" />
              </Link>
              <Link to="/materias/redes-computadores">
                <ButtonPrincipal Text="Redes de Computadores" />
              </Link>
              <Link to="/materias/novas-tecnologias">
                <ButtonPrincipal Text="Novas Tecnologias" />
              </Link>
            </C.ContainerButtons>
          </C.MainRightContainer>
        </C.MainContainer>
      </C.Content>
    </C.Container>
  );
};

export default TelaMateriaAluno;
