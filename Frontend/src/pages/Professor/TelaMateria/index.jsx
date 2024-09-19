import Navbar from "../../../components/navBar";
import ButtonPrincipal from "../../../components/ButtonPrincipal";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import Input from "../../../components/input";

const TelaMateria = () => {
  const [disciplinas, setDisciplinas] = useState([]);
  const { currentUser } = useAuth();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputs, setInputs] = useState({
    materia: "",
    hora: "",
    descricao: "",
  });

  console.log(inputs);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/disciplinas/usuario/criar`,
        {
          materia: inputs.materia,
          hora: inputs.hora,
          descricao: inputs.descricao,
          professorId: currentUser.id,
        },
        { withCredentials: true } // Para enviar cookies junto com a requisição
      );
      console.log("Resposta do servidor:", response.data);
    } catch (error) {
      console.error("Erro ao enviar perguntas:", error);
    }
  };

  useEffect(() => {
    const fetchDataDisc = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/disciplinas/usuario/${
            currentUser.id
          }`
        );
        setDisciplinas(res.data);
        console.log(disciplinas);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataDisc();
  }, []);

  return (
    <C.Container>
      <Navbar Text="Professor" />
      <C.Content>
        <MiniMenu TitleOne="Minhas materias" urlOne="/materiasP" />
        <C.ContainerSejaBemvindo>
          <C.TextSejaBemvindo>Seja bem-vindo, professor(a)!</C.TextSejaBemvindo>
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
            <C.line />
            <C.ContainerButtons>
              {disciplinas.map((disciplina) => (
                <Link
                  key={disciplina.id_disciplina}
                  to={`/turmas/${disciplina.id_disciplina}`}
                >
                  <ButtonPrincipal Text={disciplina.nome} />
                </Link>
              ))}
            </C.ContainerButtons>
            <C.Button
              style={{
                marginTop: "350px",
                marginLeft: "80%",
              }}
              onClick={handleShow}
            >
              Criar Materia
            </C.Button>
          </C.MainRightContainer>
        </C.MainContainer>
      </C.Content>
      {show && (
        <C.ModalOverlay onClick={handleClose}>
          <C.ModalContent onClick={(e) => e.stopPropagation()}>
            <C.ModalHeader>
              <C.ModalTitle>Criar Matéria</C.ModalTitle>
              <C.ModalCloseButton onClick={handleClose}>
                &times;
              </C.ModalCloseButton>
            </C.ModalHeader>
            <C.ModalBody>
              <C.LabelTitle
                style={{
                  display: "flex",
                  marginTop: "15px",
                }}
              >
                Nome da matéria
              </C.LabelTitle>
              <Input
                type="materia"
                placeholder="Ex: Programação Web..."
                name="materia"
                onChange={handleChange}
              />
              <C.LabelTitle
                style={{
                  display: "flex",
                  marginTop: "15px",
                }}
              >
                Carga horária
              </C.LabelTitle>
              <Input
                type="hora"
                placeholder="Digite a carga horária"
                name="hora"
                onChange={handleChange}
              />
              <C.LabelTitle
                style={{
                  display: "flex",
                  marginTop: "15px",
                }}
              >
                Descrição
              </C.LabelTitle>
              <Input
                type="descricao"
                placeholder="Pequena descrição: Programação web com React"
                name="descricao"
                onChange={handleChange}
              />
            </C.ModalBody>
            <C.ModalFooter>
              <C.ModalCancelButton
                style={{
                  marginRight: "10px",
                }}
                onClick={handleClose}
              >
                Cancelar
              </C.ModalCancelButton>
              <C.ModalSaveButton onClick={handleSave}>Salvar</C.ModalSaveButton>
            </C.ModalFooter>
          </C.ModalContent>
        </C.ModalOverlay>
      )}
    </C.Container>
  );
};

export default TelaMateria;
