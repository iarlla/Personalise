import Navbar from "../../../components/navBar";
import ButtonPrincipal from "../../../components/ButtonPrincipal";
import ButtonReverse from "../../../components/ButtonReverse";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";
import { Link } from "react-router-dom";

const dashboardAluno = () => {
    return (
        <C.Container>
          <Navbar Text="Aluno" />
          <C.Content>
            <MiniMenu TitleOne="Relatório" urlOne="/relatorio" />
            <C.ContainerSejaBemvindo>
              <C.TextSejaBemvindo>Design de Software - GPE10101</C.TextSejaBemvindo>
            </C.ContainerSejaBemvindo>
    
            <C.MainContainer>
                <C.MainTopContainer>
                    
                    <C.ContainerBlue>
                        <C.BlueBox>
                            <h1>20 </h1>
                            <p>alunos fizeram a matéria de requisito</p>
                        </C.BlueBox> 
                        <C.BlueBox>
                            <h1>20 </h1>
                            <p>alunos fizeram a matéria de requisito</p>
                        </C.BlueBox> 
                        <C.BlueBox>
                            <h1>20 </h1>
                            <p>alunos fizeram a matéria de requisito</p>
                        </C.BlueBox> 
                        <C.BlueBox>
                            <h1>20 </h1>
                            <p>alunos fizeram a matéria de requisito</p>
                        </C.BlueBox> 
                        <C.BlueBox>
                            <h1>20 </h1>
                            <p>alunos fizeram a matéria de requisito</p>
                        </C.BlueBox> 
                    </C.ContainerBlue>
                    <C.ContainerWhite>
                        <C.WhiteBox>
                            <h3>Pergunta 1</h3>
                            <p>10% concordam totalmente</p>
                            <p>20% discordam totalmente</p>
                            <p>70% concordam parcialmente</p>
                        </C.WhiteBox>
                        <C.WhiteBox>
                            <h3>Pergunta 2</h3>
                            <p>10% concordam totalmente</p>
                            <p>20% discordam totalmente</p>
                            <p>70% concordam parcialmente</p>
                        </C.WhiteBox>
                    </C.ContainerWhite>
                    <C.ContainerWhite>
                        <C.WhiteBox>
                            <h3>Pergunta 3</h3>
                            <p>10% concordam totalmente</p>
                            <p>20% discordam totalmente</p>
                            <p>70% concordam parcialmente</p>
                        </C.WhiteBox>
                        <C.WhiteBox>
                            <h3>Pergunta 4</h3>
                            <p>10% concordam totalmente</p>
                            <p>20% discordam totalmente</p>
                            <p>70% concordam parcialmente</p>
                        </C.WhiteBox>
                        </C.ContainerWhite>
                        <C.ContainerWhite>
                        <C.WhiteBox>
                            <h3>Pergunta 5</h3>
                            <p>10% concordam totalmente</p>
                            <p>20% discordam totalmente</p>
                            <p>70% concordam parcialmente</p>
                        </C.WhiteBox>
                        <C.WhiteBox>
                            <h3>Pergunta 6</h3>
                            <p>10% concordam totalmente</p>
                            <p>20% discordam totalmente</p>
                            <p>70% concordam parcialmente</p>
                        </C.WhiteBox>
                    </C.ContainerWhite>
                </C.MainTopContainer>
            </C.MainContainer>
          </C.Content>
        </C.Container>
      );
}

export default dashboardAluno;
