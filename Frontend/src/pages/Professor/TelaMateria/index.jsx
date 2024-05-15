import { useState, useContext } from "react";
import Navbar from "../../../components/navBar";
import ButtonPrincipal from "../../../components/ButtonPrincipal";
import * as C from "./styles";

const telaMateria = () => {
  return (
    <>
      <C.Container>
        <Navbar Text="Professor" />
        <C.Content>
          <C.ContainerSejaBemvindo>
            <C.TextSejaBemvindo>
              Seja bem-vindo, professor(a)!
            </C.TextSejaBemvindo>
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
              <hr></hr>
              <C.ContainerButtons>
                <ButtonPrincipal Text="Engenharia de Software"></ButtonPrincipal>
                <ButtonPrincipal Text="Design de Software"></ButtonPrincipal>
                <ButtonPrincipal Text="Sistemas Operacionais"></ButtonPrincipal>
                <ButtonPrincipal Text="Redes de Computadores"></ButtonPrincipal>
                <ButtonPrincipal Text="Novas tecnologias"></ButtonPrincipal>
              </C.ContainerButtons>
            </C.MainRightContainer>
          </C.MainContainer>
        </C.Content>
      </C.Container>
    </>
  );
};

export default telaMateria;
