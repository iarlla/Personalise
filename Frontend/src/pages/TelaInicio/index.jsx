import * as C from "./styles";
import Button from "../../components/button";

const TelaInicio = () => {
  return (
    <>
      <C.Container>
        <C.Content>
          <C.Titulo>
            <C.TxtBranco>Person</C.TxtBranco>
            <C.TxtAzul>álise</C.TxtAzul>
          </C.Titulo>
          <div
            style={{ display: "flex", margin: "0px 0px 10px -150px",  padding: "0px 0px 30px"  }}  //Margin para colocar fora da tela e padding para afastar do texto de baixo
          >
            <C.Linha></C.Linha>
          </div>
          <C.SubTitulo>
            <C.TxtBranco>Unimos </C.TxtBranco>
            <C.TxtAzul>professores inspirados </C.TxtAzul>
            <C.TxtBranco> e </C.TxtBranco>
            <C.TxtAzul>alunos interessados :)</C.TxtAzul>
          </C.SubTitulo>
          <div
            style={{ display: "flex", gap: "15px", padding: "30px 0px 30px" }}
          >
            <Button Text="Sou aluno" />
            <Button Text="Sou professor" />
          </div>
        </C.Content>
        <C.Image src="image.png" alt="Descrição da imagem" />
      </C.Container>
    </>
  );
};

export default TelaInicio;
