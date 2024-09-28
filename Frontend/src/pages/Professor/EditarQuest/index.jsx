import { useState, useEffect } from "react";
import Navbar from "../../../components/navBar";
import { useParams, useNavigate } from "react-router-dom";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";
import Pergunta from "../../../components/pergunta";
import Button from "../../../components/button";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import QRCode from "react-qr-code";

const EditarQuest = () => {
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
  const [qrCodeUrl, setQrCodeUrl] = useState(""); 
  const { idDisc, idturma } = useParams();
  
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

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

  const generateRandomHash = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let hash = '';
    for (let i = 0; i < 100; i++) { // Length of the hash can be adjusted
      hash += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return hash;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Generate a random hash for the form
    const randomHash = generateRandomHash();
    console.log(randomHash)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/questions/preQuest/editar`,
        {
          questions,
          professorId: currentUser.id,
          idDisc,
          idturma,
          hash: randomHash  // Send the random hash to the backend
        },
        { withCredentials: true }
      );
      
      console.log("Resposta do servidor:", response.data);
  
      // Set the QR code URL with the random hash
      const qrUrl = `http://localhost:5173/${randomHash}`;
      setQrCodeUrl(qrUrl);
  
      setShowModal(true);
  
    } catch (error) {
      console.error("Erro ao enviar perguntas:", error);
    }
  };
  

  const handleProntoClick = () => {
    setShowModal(false);
    navigate(`/sessao/${idDisc}/${idturma}/preQuest/meuQuest`);
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
          <C.titleQuest>Questionário Pós-Aula</C.titleQuest>
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
          />
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

          {showModal && (
            <div style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <div style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
                width: "700px"
              }}>
                <h3 style={{ fontSize:"28px" }}>Escaneie o QR Code para acessar responder ao formulario:</h3> <br></br>
                <QRCode value={qrCodeUrl} size={600} />
                <button
                  style={{
                    marginTop: "20px",
                    padding: "20px 100px",
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize:"25px"
                  }}
                  onClick={handleProntoClick}
                >
                  Pronto
                </button>
              </div>
            </div>
          )}
        </C.ContentQuest>
      </C.Container>
    </>
  );
};

export default EditarQuest;
