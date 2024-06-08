import Navbar from "../../../components/navBar";
import { useState, useEffect } from "react";
import Button from "../../../components/button";
import Axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as C from "./styles";

const DeletadoSucesso = () => {
  const navigate = useNavigate();

  const [turma, setTurma] = useState({});
  const [disciplinas, setDisciplinas] = useState({});
  const { idDisc, idturma } = useParams();

  useEffect(() => {
    const fetchDataDisc = async () => {
      try {
        const res = await Axios.get(
          `${import.meta.env.VITE_API_URL}/disciplinas/${idDisc}`
        );
        setDisciplinas(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataDisc();
  }, [idDisc]);

  useEffect(() => {
    const fetchDataDisc = async () => {
      try {
        const res = await Axios.get(
          `${import.meta.env.VITE_API_URL}/turmas/${idturma}`
        );
        setTurma(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataDisc();
  }, [idturma]);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/sessao/${idDisc}/${idturma}/preQuest`);
  };
  return (
    <>
      <C.Container>
        <Navbar Text="Professor" />
        <C.Content>
          <C.titlePage>Questionário Deletado</C.titlePage>
        </C.Content>
        <C.ContentQuest>
          <C.containerSucesso>
            <C.imagemSucesso src={`${window.location.origin}/deletado.png`} />
            <C.containerTextoSucesso>
              <C.textoSucesso>
                {" "}
                Questionário Deletado Com Sucesso!
              </C.textoSucesso>
            </C.containerTextoSucesso>
            <Button Text="Voltar" onClick={handleClick}></Button>
          </C.containerSucesso>
        </C.ContentQuest>
      </C.Container>
    </>
  );
};

export default DeletadoSucesso;
