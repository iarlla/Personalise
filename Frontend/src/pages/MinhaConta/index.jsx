import { useState } from "react";
import * as C from "./styles";
import Navbar from "../../components/navBar";

const MinhaConta = () => {
  const [name, setName] = useState("Rebeca Maria");
  const [email, setEmail] = useState("rebeca.guimaraes@a.ucb.br");
  const [matricula, setMatricula] = useState("UC2389999");
  const [curso, setCurso] = useState("Engenharia");

  const handleEdit = (field, setField) => {
    const newValue = prompt(`Edit ${field}`, field);
    if (newValue) {
      setField(newValue);
    }
  };

  return (
    <>
      <C.Container>
        <C.Content>
          <C.Title>Minha conta</C.Title>
          <C.Info>
            <C.InfoItem>
              <div>
                <C.Label>Nome completo</C.Label>
              </div>
              <C.Value>{name}</C.Value>
              <C.EditButton onClick={() => handleEdit(name, setName)}>
                ✏️
              </C.EditButton>
            </C.InfoItem>
            <C.InfoItem>
              <div>
                <C.Label>Email</C.Label>
              </div>
              <C.Value>{email}</C.Value>
              <C.EditButton onClick={() => handleEdit(email, setEmail)}>
                ✏️
              </C.EditButton>
            </C.InfoItem>
            <C.InfoItem>
              <div>
                <C.Label>Matricula</C.Label>
              </div>
              <C.Value>{matricula}</C.Value>
              <C.EditButton onClick={() => handleEdit(matricula, setMatricula)}>
                ✏️
              </C.EditButton>
            </C.InfoItem>
            <C.InfoItem>
              <div>
                <C.Label>Curso</C.Label>
              </div>
              <C.Value>{curso}</C.Value>
              <C.EditButton onClick={() => handleEdit(curso, setCurso)}>
                ✏️
              </C.EditButton>
            </C.InfoItem>
          </C.Info>
          <C.ButtonSection>
            <C.ActionButton>Alterar senha</C.ActionButton>
            <C.ActionButton>Editar dados</C.ActionButton>
          </C.ButtonSection>
        </C.Content>
        <C.Image src="rafikii.png" alt="Descrição da imagem" />
      </C.Container>
    </>
  );
};

export default MinhaConta;
