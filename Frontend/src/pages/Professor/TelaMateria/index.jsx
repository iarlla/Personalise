import { useState, useContext } from "react";
import Navbar from "../../../components/navBar";
import ButtonPrincipal from "../../../components/ButtonPrincipal";
import * as C from "./styles";

const telaMateria = () => {
  return (
    <>
      <C.BackgroundPattern>
        <Navbar Text="Professor" />

        <C.ContainerSejaBemvindo>
          <C.TextSejaBemvindo>Seja bem-vindo, professor(a)!</C.TextSejaBemvindo>
        </C.ContainerSejaBemvindo>

        <C.MainContainer>
          <C.MainLeftContainer>
            <C.MainLeftTextoDiv>
              <h3>Selecione, ao lado, a matéria desejada</h3>
            </C.MainLeftTextoDiv>
            <C.MainLeftImg src="../../../../public/rafiki.png"></C.MainLeftImg>
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
            <div
              style={{ width: "100%", textAlign: "center", marginTop: "40px" }}
            >
              <ButtonPrincipal Text="Engenharia de Software"></ButtonPrincipal>
              <ButtonPrincipal Text="Design de Software"></ButtonPrincipal>
              <ButtonPrincipal Text="Sistemas Operacionais"></ButtonPrincipal>
              <ButtonPrincipal Text="Redes de Computadores"></ButtonPrincipal>
              <ButtonPrincipal Text="Novas tecnologias"></ButtonPrincipal>
            </div>
          </C.MainRightContainer>
        </C.MainContainer>
      </C.BackgroundPattern>
    </>
  );
};

export default telaMateria;
