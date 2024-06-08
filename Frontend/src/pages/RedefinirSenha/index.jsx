import { useContext, useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ButtonReverse from "../../components/ButtonReverse";

const RedefinirSenha = () => {
  const navigate = useNavigate();

  const [logs, setLogs] = useState([]);
  const [error, setError] = useState(null);
  const [input, setInput] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const voltarTela = (e) => {
    e.preventDefault();
    navigate("/Signin");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api/redefinicaoSenha",
        {
          email: input.email,
        },
        { withCredentials: true }
      );
      setLogs(response.data);
      console.log("Successo! Instruçoes enviada para email.", logs);
      navigate("/");
    } catch (error) {
      console.error("Erro ao verificar email:", error);
      setError(error.response.data);
    }
  };

  return (
    <>
      <C.Container>
        <C.Content>
          <C.LabelSignin>Esqueceu sua senha?</C.LabelSignin>
          <C.Describe>
            Digite seu email, que enviaremos uma nova senha por lá. Não se
            preocupe voce poderá mudar após entrar na sua conta.
          </C.Describe>
          <C.LabelTitle>Email</C.LabelTitle>
          <Input
            type="email"
            placeholder="Digite o seu E-mail"
            name="email"
            onChange={handleChange}
          />
          <C.labelError>{error && error}</C.labelError>
          <div
            style={{ display: "flex", gap: "15px", padding: "30px 0px 30px" }}
          >
            <Button Text="Enviar" onClick={handleSubmit}></Button>
            <ButtonReverse
              Text="Voltar para login"
              onClick={voltarTela}
            ></ButtonReverse>
          </div>
        </C.Content>
        <C.Image src="image.png" alt="Descrição da imagem" />
      </C.Container>
    </>
  );
};

export default RedefinirSenha;
