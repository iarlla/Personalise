import { useState, useEffect } from "react";
import Navbar from "../../../components/navBar";
import { useParams, useNavigate } from "react-router-dom";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";
import Pergunta from "../../../components/pergunta";
import Button from "../../../components/button";
import axios from "axios";

const EditarQuest = () => {
  // Estado para armazenar as perguntas
  const [questions, setQuestions] = useState([
    { num: 1, pergunta: "Pergunta 1", nomeLabel: "pergunta-1" },
    { num: 2, pergunta: "Pergunta 2", nomeLabel: "pergunta-2" },
    { num: 3, pergunta: "Pergunta 3", nomeLabel: "pergunta-3" },
    { num: 4, pergunta: "Pergunta 4", nomeLabel: "pergunta-4" },
    { num: 5, pergunta: "Pergunta 5", nomeLabel: "pergunta-5" },
    { num: 6, pergunta: "Pergunta 6", nomeLabel: "pergunta-6" },
    { num: 7, pergunta: "Pergunta 7", nomeLabel: "pergunta-7" },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [disciplinas, setDisciplinas] = useState({});
  const [turma, setTurma] = useState([]);
  const { idDisc, idturma } = useParams();

  useEffect(() => {
    const fetchDataDisc = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/disciplinas/${idDisc}`
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
          `http://localhost:3001/api/turmas/${idturma}`
        );
        setTurma(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataTurma();
  }, [idturma]);

  const handleAddQuestion = () => {
    const newQuestionNum = questions.length + 1;
    const newQuestion = {
      num: newQuestionNum,
      pergunta: `Pergunta ${newQuestionNum}`,
      nomeLabel: `pergunta-${newQuestionNum}`,
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleEditQuestion = (index) => {
    setEditingIndex(index);
    setEditingText(questions[index].pergunta);
  };

  const handleSaveQuestion = (index) => {
    const updatedQuestions = questions.map((question, i) =>
      i === index ? { ...question, pergunta: editingText } : question
    );
    setQuestions(updatedQuestions);
    setEditingIndex(null);
    setEditingText("");
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = questions.filter((question, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/questions/preQuest/editar",
        { questions }
      );
      console.log("Resposta do servidor:", response.data);
      navigate(`/sessao/${idDisc}/${idturma}/preQuest/enviado`);
    } catch (error) {
      console.error("Erro ao enviar perguntas:", error);
    }
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
          <C.textoAbertura>Questionário aberto até: 18/08/2024</C.textoAbertura>
        </C.Content>
        <C.ContentQuest>
          <C.titleQuest>Questionário Pré-Aula</C.titleQuest>
          <C.line />
          <img
            src={`${window.location.origin}/adicionar.png`}
            style={{
              marginLeft: "95%",
              marginTop: "20px",
              marginBottom: "-30px",
              cursor: "pointer",
            }}
            onClick={handleAddQuestion}
          ></img>
          <C.PerguntasQuest>
            {questions.map((question, index) => (
              <div key={index}>
                {editingIndex === index ? (
                  <div>
                    <h3 style={{ marginTop: "10px" }}>Edite a pergunta: </h3>
                    <input
                      style={{
                        margin: "10px",
                        borderRadius: "10px",
                        padding: "10px",
                      }}
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                    />
                    <button
                      style={{
                        padding: "13px",
                        width: "100px",
                        border: "none",
                        borderRadius: "10px",
                        backgroundColor: "green",
                        color: "white",
                        cursor: "pointer",
                      }}
                      onClick={() => handleSaveQuestion(index)}
                    >
                      Salvar
                    </button>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Pergunta
                      num={question.num}
                      pergunta={question.pergunta}
                      nomeLabel={question.nomeLabel}
                    />
                    <img
                      style={{
                        width: "20px",
                        height: "20px",
                        marginTop: "20px",
                        marginLeft: "-20px",
                        cursor: "pointer",
                      }}
                      src={`${window.location.origin}/editar.png`}
                      onClick={() => handleEditQuestion(index)}
                    />
                    <img
                      style={{
                        width: "20px",
                        height: "20px",
                        marginTop: "20px",
                        marginLeft: "10px",
                        cursor: "pointer",
                      }}
                      src={`${window.location.origin}/deletar.png`}
                      onClick={() => handleDeleteQuestion(index)}
                    />
                  </div>
                )}
              </div>
            ))}
          </C.PerguntasQuest>

          <div style={{ margin: "30px" }}>
            <Button Text="Liberar Questionário" onClick={handleSubmit} />
          </div>
        </C.ContentQuest>
      </C.Container>
    </>
  );
};

export default EditarQuest;
