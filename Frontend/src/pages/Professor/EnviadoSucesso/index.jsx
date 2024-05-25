import Navbar from "../../../components/navBar";
import MiniMenu from "../../../components/miniMenu";
import sucessoImage from "../../../../public/sucesso.png"
import Button from "../../../components/button"
import { Link } from "react-router-dom";
import * as C from "./styles";

const EnviadoSucesso = () => {
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
            <C.imagemSucesso src={sucessoImage} />
            <C.containerTextoSucesso>
                <C.parabens> Parabens! </C.parabens>
                <C.textoSucesso> Questionário enviado com sucesso! </C.textoSucesso>
            </C.containerTextoSucesso>
            <Link to="/home">
                <Button Text="Voltar"></Button>
            </Link>
          </C.containerSucesso>
        </C.ContentQuest>
      </C.Container>
    </>
  );
};

export default EnviadoSucesso;
