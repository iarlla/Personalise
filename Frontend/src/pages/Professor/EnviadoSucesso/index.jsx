import Navbar from "../../../components/navBar";
import { useState, useEffect } from "react";
import Button from "../../../components/button";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import * as C from "./styles";

const EnviadoSucesso = () => {
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
    const currentPath = window.location.pathname;

    if (currentPath.includes("preQuest")) {
      navigate(`/sessao/${idDisc}/${idturma}/preQuest/meuQuest`);
    } else if (currentPath.includes("posQuest")) {
      navigate(`/sessao/${idDisc}/${idturma}/posQuest/meuQuest`);
    }
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
              <C.parabens> Parabéns! </C.parabens>
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
