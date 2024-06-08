import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../components/navBar";
import useAuth from "../../../hooks/useAuth";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";

const MeuQuestionario = () => {
  const [disciplinas, setDisciplinas] = useState({});
  const [turma, setTurma] = useState([]);
  const { idDisc, idturma } = useParams();
  const [professor, setProfessor] = useState({});
  const [questionario, setQuestionario] = useState({});
  const [show, setShow] = useState(false);
  const { currentUser } = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataDisc = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/disciplinas/${idDisc}`
        );
        setDisciplinas(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataDisc();
  }, [idDisc]);

  useEffect(() => {
    const fetchDataTurma = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/turmas/${idturma}`
        );
        setTurma(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataTurma();
  }, [idturma]);

  useEffect(() => {
    const fetchDataID = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/professor/id`,
          {
            professorId: currentUser.id,
          }
        );
        setProfessor(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataID();
  }, [currentUser.id]);

  useEffect(() => {
    const fetchDataQuestID = async () => {
      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/questionario/byDiscTurmaProfessor/${professor}/${idDisc}/${idturma}`
        );
        setQuestionario(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataQuestID();
  }, [professor]);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(
        `${
          import.meta.env.VITE_API_URL
        }/questionario/byDiscTurmaProfessor/${professor}/${idDisc}/${idturma}`
      );
      console.log(res.data.message); // Imprimir mensagem de sucesso
      navigate(`/sessao/${idDisc}/${idturma}/preQuest/deletado`);
    } catch (error) {
      console.error(
        error.response.data.message || "Erro ao deletar questionário"
      );
    }
    handleClose();
  };

  return (
    <>
      <C.Container>
        <Navbar Text="Professor" />
        <MiniMenu
          TitleOne="Minhas materias"
          urlOne="/materiasP"
          symbolOne=">"
          TitleTwo="Minhas turmas"
          urlTwo={`/turmas/${idDisc}`}
          symbolTwo=">"
          TitleThree="Sessões"
          urlThree={`/turmas/${idDisc}/${idturma}`}
          symbolThree=">"
          TitleFour="Questionário pré-aula"
        />
        <C.Content>
          <C.titlePage>{disciplinas.nome}</C.titlePage>
        </C.Content>
        <C.ContentQuest>
          <C.titleQuest>Questionário Pré-Aula</C.titleQuest>
          <C.line />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "20px",
              paddingTop: "20px",
            }}
          >
            <C.titleForm>Questionario Enviado</C.titleForm>

            <C.Button
              style={{
                marginRight: "40px",
              }}
              onClick={handleShow}
            >
              Excluir
            </C.Button>
          </div>
        </C.ContentQuest>
      </C.Container>

      {show && (
        <C.ModalOverlay onClick={handleClose}>
          <C.ModalContent onClick={(e) => e.stopPropagation()}>
            <C.ModalHeader>
              <C.ModalTitle>Confirmar Exclusão</C.ModalTitle>
              <C.ModalCloseButton onClick={handleClose}>
                &times;
              </C.ModalCloseButton>
            </C.ModalHeader>
            <C.ModalBody>
              Tem certeza de que deseja excluir este questionário?
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
              <C.ModalSaveButton onClick={handleDelete}>
                Excluir
              </C.ModalSaveButton>
            </C.ModalFooter>
          </C.ModalContent>
        </C.ModalOverlay>
      )}
    </>
  );
};

export default MeuQuestionario;
