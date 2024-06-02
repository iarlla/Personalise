import Navbar from "../../../components/navBar";
import ButtonPrincipal from "../../../components/ButtonPrincipal";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";
import { Link } from "react-router-dom";

const dashboardAluno = () => {
    return (
        <C.Container>
          <Navbar Text="Aluno" />
          <C.Content>
            <MiniMenu TitleOne="DashBoard" urlOne="/dashboardAluno" />
            <C.ContainerSejaBemvindo>
              <C.TextSejaBemvindo>Prog</C.TextSejaBemvindo>
            </C.ContainerSejaBemvindo>
    
            <C.MainContainer>

            </C.MainContainer>
          </C.Content>
        </C.Container>
      );
}

export default dashboardAluno;