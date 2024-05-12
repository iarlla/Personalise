import Navbar from "../../../components/navBar";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";

const QuestionarioPre = () => {
  return (
    <>
      <C.BackgroundPattern>
        <Navbar Text="Professor" />
        <MiniMenu
          TitleOne="Minhas materias"
          symbolOne=">"
          urlOne="/MateriasP"
          TitleTwo="Sessões"
          symbolTwo=">"
          TitleThree="Questionário Pré-Aula"
        />
        <C.titlePage>Progamação Orientada a objetos</C.titlePage>
      </C.BackgroundPattern>
    </>
  );
};

export default QuestionarioPre;
