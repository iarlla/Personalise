import Navbar from "../../../components/navBar";
import MiniMenu from "../../../components/miniMenu";
import deletadoImage from "/deletado.png"
import Button from "../../../components/button"
import { Link } from "react-router-dom";
import * as C from "./styles";

const DeletadoSucesso = () => {
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
          <C.titlePage>Questionário Deletado</C.titlePage>
          <C.textoAbertura>Questionário aberto até: 18/08/2024</C.textoAbertura>
        </C.Content>
        <C.ContentQuest>
          <C.containerSucesso>
            <C.imagemSucesso src={deletadoImage} />
            <C.containerTextoSucesso>
              <C.textoSucesso> Questionário Deletado Com Sucesso</C.textoSucesso>
            </C.containerTextoSucesso>
            <Link to="/MateriasP">
                <Button Text="Voltar"></Button>
            </Link>
          </C.containerSucesso>
        </C.ContentQuest>
      </C.Container>
    </>
  );
};

export default DeletadoSucesso;
