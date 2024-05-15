import Navbar from "../../../components/navBar";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";

const QuestionarioPre = () => {
  // Função para processar o envio do formulário (pode ser ajustado conforme necessário)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Processar as perguntas aqui (enviar para o banco de dados, etc.)
    console.log("Perguntas:", questions);
  };
  return (
    <>
      <C.Container>
        <Navbar Text="Professor" />
        <MiniMenu
          TitleOne="Minhas materias"
          symbolOne=">"
          urlOne="/MateriasP"
          TitleTwo="Sessões"
          symbolTwo=">"
          TitleThree="Questionário Pré-Aula"
        />
        <C.Content>
          <C.titlePage>Progamação Orientada a objetos</C.titlePage>
        </C.Content>
        <C.ContentQuest>
          <C.titleQuest>Questionário Pré-Aula</C.titleQuest>
          <C.line />
          <C.PerguntasQuest></C.PerguntasQuest>
        </C.ContentQuest>
      </C.Container>
    </>
  );
};

export default QuestionarioPre;
