import { useState } from "react";
import * as C from "./styles";
import Navbar from "../../components/navBar";

const MinhaConta = () => {
  const [name, setName] = useState("Rebeca Maria");
  const [email, setEmail] = useState("rebeca.guimaraes@a.ucb.br");
  const [matricula, setMatricula] = useState("UC2389999");
  const [curso, setCurso] = useState("Engenharia");

  const handleEdit = () => {
    const newName = prompt("Edit Nome completo", name);
    if (newName) setName(newName);
    const newEmail = prompt("Edit Email", email);
    if (newEmail) setEmail(newEmail);
    const newMatricula = prompt("Edit Matricula", matricula);
    if (newMatricula) setMatricula(newMatricula);
    const newCurso = prompt("Edit Curso", curso);
    if (newCurso) setCurso(newCurso);
  };

  return (
    <>
      <C.Container>
        <C.Title>          </C.Title>
        <C.Content>
          <C.Title>Minha conta</C.Title>
          <C.Info>
            <C.InfoItem>
              <div>
                <C.Label>Nome completo</C.Label>
              </div>
              <C.Value>{name}</C.Value>
            </C.InfoItem>
            <C.InfoItem>
              <div>
                <C.Label>Email</C.Label>
              </div>
              <C.Value>{email}</C.Value>
            </C.InfoItem>
            <C.InfoItem>
              <div>
                <C.Label>Matricula</C.Label>
              </div>
              <C.Value>{matricula}</C.Value>
            </C.InfoItem>
            <C.InfoItem>
              <div>
                <C.Label>Curso</C.Label>
              </div>
              <C.Value>{curso}</C.Value>
            </C.InfoItem>
          </C.Info>
          <C.ButtonSection>
            <C.ActionButton>Alterar senha</C.ActionButton>
            <C.ActionButton onClick={handleEdit}>Editar dados</C.ActionButton>
          </C.ButtonSection>
        </C.Content>
        <C.Image src="rafikii.png" alt="Descrição da imagem" />
      </C.Container>
    </>
  );
};

export default MinhaConta;
