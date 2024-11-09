import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
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

  return (
    <>
      <C.Container>
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
          </C.containerSucesso>
        </C.ContentQuest>
      </C.Container>
    </>
  );
};

export default EnviadoSucesso;
