import { useState, useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../components/navBar";
import MiniMenu from "../../../components/miniMenu";
import * as C from "./styles";

const dashboardAluno = () => {
    const [disciplinas, setDisciplinas] = useState({});
    const [turma, setTurma] = useState([]);
    const { idDisc, idturma, relatorio} = useParams();
    
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDataDisc = async () => {
          try {
            const res = await axios.get(
              `http://localhost:3001/api/disciplinas/${idDisc}`
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
              `http://localhost:3001/api/turmas/${idturma}`
            );
            setTurma(res.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchDataTurma();
      }, [idturma]);

    return (
        <C.Container>
          <Navbar Text="Aluno" />
          <C.Content>
          <MiniMenu
          TitleOne="Minhas matérias"
          urlOne="/materiasA"
          symbolOne=">"
          TitleThree="Sessões"
          urlThree={`/disciplina/${idDisc}`}
          symbolThree=">"
          TitleFour="Relatorio"
            />
            <C.ContainerSejaBemvindo>
              <C.titlePage>{disciplinas.nome}</C.titlePage>
            </C.ContainerSejaBemvindo>

            <C.MainContainer>
                <C.MainTopContainer>

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
