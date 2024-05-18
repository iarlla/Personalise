import { useState } from "react";
import * as C from "./styles";

const MinhaConta = () => {
  const [name, setName] = useState("Rebeca Maria");
  const [email, setEmail] = useState("rebeca.guimaraes@a.ucb.br");
  const [matricula, setMatricula] = useState("UC2389999");

  const handleEdit = (field, setField) => {
    const newValue = prompt(`Edit ${field}`, field);
    if (newValue) {
      setField(newValue);
    }
  };

  return (
    <C.Container>
      <C.Header>
        <C.Title>Minha conta</C.Title>
        <C.CloseButton>X</C.CloseButton>
      </C.Header>
      <C.Content>
        <C.ProfilePicture>
          <C.EditPhoto>Editar foto</C.EditPhoto>
        </C.ProfilePicture>
        <C.Info>
          <C.InfoItem>
            <div>
              <C.Label>Nome completo</C.Label>
              <C.Value>{name}</C.Value>
            </div>
            <C.EditButton onClick={() => handleEdit(name, setName)}>
              ✏️
            </C.EditButton>
          </C.InfoItem>
          <C.InfoItem>
            <div>
              <C.Label>Email</C.Label>
              <C.Value>{email}</C.Value>
            </div>
            <C.EditButton onClick={() => handleEdit(email, setEmail)}>
              ✏️
            </C.EditButton>
          </C.InfoItem>
          <C.InfoItem>
            <div>
              <C.Label>Matricula</C.Label>
              <C.Value>{matricula}</C.Value>
            </div>
            <C.EditButton onClick={() => handleEdit(matricula, setMatricula)}>
              ✏️
            </C.EditButton>
          </C.InfoItem>
        </C.Info>
      </C.Content>
    </C.Container>
  );
};

export default MinhaConta;
