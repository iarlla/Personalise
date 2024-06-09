import React from "react";
import * as C from "./styles.js";
import useAuth from "../../hooks/useAuth.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = ({ Text }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (Text === "Professor") {
      navigate("/materiasP");
    } else if (Text === "Aluno") {
      navigate("/materiasA");
    }
  };

  const handleNavigatePerfil = () => {
    if (Text === "Professor") {
      navigate("/minhaContaProfessor");
    } else if (Text === "Aluno") {
      navigate("/minhaContaAluno");
    }
  };

  return (
    <C.Container>
      <a onClick={handleNavigate}>
        <img
          src={`${window.location.origin}/Logo.png`}
          alt="logo"
          width="150px"
          style={{ maxHeight: "100%", cursor: "pointer" }} // Ajustar a altura máxima da imagem
        />
      </a>
      <C.ContainerPerfil>
        <a onClick={handleNavigatePerfil}>
          <img
            src={`${window.location.origin}/User.png`}
            alt="user"
            width="35px"
            style={{ maxHeight: "100%", cursor: "pointer" }} // Ajustar a altura máxima da imagem
          />
        </a>
        <div
          style={{
            display: "flex",
            alignItems: "left",
            flexDirection: "column",
            marginLeft: "15px",
          }}
        >
          <span>
            <b>{currentUser.nome}</b>
          </span>
          <p style={{ fontSize: "12px" }}>{Text}</p>
        </div>
      </C.ContainerPerfil>
    </C.Container>
  );
};

export default Navbar;
