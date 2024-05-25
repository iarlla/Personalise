import Navbar from "../../../components/navBar";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";
import Pergunta from "../../../components/pergunta";
import Button from "../../../components/button";


const EditarQuest = () => {
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
          <C.textoAbertura>Questionário aberto até: 18/08/2024</C.textoAbertura>
        </C.Content>
        <C.ContentQuest>
          <C.titleQuest>Questionário Pré-Aula</C.titleQuest>
          <C.line />
          <C.PerguntasQuest style={{ maxHeight: '570px', overflowY: 'auto' }}>
            <Pergunta num="1" pergunta="Pergunta 1" nomeLabel="pergunta-1" />
            <Pergunta num="2" pergunta="Pergunta 2" nomeLabel="pergunta-2" />
            <Pergunta num="3" pergunta="Pergunta 3" nomeLabel="pergunta-3" />
            <Pergunta num="4" pergunta="Pergunta 4" nomeLabel="pergunta-4" />
            <Pergunta num="5" pergunta="Pergunta 5" nomeLabel="pergunta-5" />
            <Pergunta num="6" pergunta="Pergunta 6" nomeLabel="pergunta-6" />
            <Pergunta num="7" pergunta="Pergunta 7" nomeLabel="pergunta-7" />
          </C.PerguntasQuest>

          <div style={{ margin: "30px" }}>
            <Button Text="Preparar" />
          </div>
        </C.ContentQuest>
      </C.Container>
    </>
  );
};

export default EditarQuest;
