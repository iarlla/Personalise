import Navbar from "../../../components/navBar";
import Button from "../../../components/button";
import { Link } from "react-router-dom";
import * as C from "./styles";

const EnviadoSucesso = () => {
  // Função para processar o envio do formulário (pode ser ajustado conforme necessário)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Processar as perguntas aqui (enviar para o banco de dados, etc.)
    console.log("Perguntas:", questions);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // navigate(`/sessao/${idDisc}/${idturma}/preQuest/editar`);
  };

  return (
    <>
      <C.Container>
        <Navbar Text="Professor" />
        <C.Content>
          <C.titlePage>Questionário Enviado</C.titlePage>
        </C.Content>
        <C.ContentQuest>
          <C.containerSucesso>
            <C.imagemSucesso src={`${window.location.origin}/sucesso.png`} />
            <C.containerTextoSucesso>
              <C.parabens> Parabens! </C.parabens>
              <C.textoSucesso>
                {" "}
                Questionário enviado com sucesso!{" "}
              </C.textoSucesso>
            </C.containerTextoSucesso>
            <Button Text="Voltar" onClick={handleClick}></Button>
          </C.containerSucesso>
        </C.ContentQuest>
      </C.Container>
    </>
  );
};

export default EnviadoSucesso;
