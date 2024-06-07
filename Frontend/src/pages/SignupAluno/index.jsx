import { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import * as C from "./styles";
import Axios from "axios";

const Signup = () => {
  const [error, setError] = useState(null);

  const [inputs, setInputs] = useState({
    email: "",
    emailConf: "",
    senha: "",
    nome: "",
    curso: "",
    matricula: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    for (const key in inputs) {
      if (inputs[key] === "") {
        setError("Todos os campos devem ser preenchidos!");
        return;
      }
    }

    if (inputs.email !== inputs.emailConf) {
      setError("Os emails não são iguais!");
      return;
    }

    try {
        const response = await Axios.post("http://localhost:3001/api/auth/cadastro-aluno", {
            email: inputs.email,
            nome: inputs.nome,
            senha: inputs.senha,
            matricula: inputs.matricula,
            curso: inputs.curso,
        });

        if (response.status === 201) {
            console.log(response);
            alert("Usuário cadastrado com sucesso!");
            navigate("/");

        } else {
            console.log(response);
            alert("Falha ao cadastrar aluno " + response.status);
        }

    } catch (error) {
        alert(error.response?.data?.message || "Erro desconhecido");
        setError(error.response?.data?.message || "Erro desconhecido");
    }
  };

  return (
    <C.Container>
      <C.Content>
        <C.LabelSignup>Cadastro</C.LabelSignup>
        <C.LabelTitle>Nome completo</C.LabelTitle>
        <Input
          type="nome"
          placeholder="Digite o seu nome"
          name="nome"
          onChange={handleChange}
        />
        <C.LabelTitle>Matrícula</C.LabelTitle>
        <Input
          type="matricula"
          placeholder="Digite a sua matricula"
          name="matricula"
          onChange={handleChange}
        />
        <C.LabelTitle>Curso</C.LabelTitle>
        <Input
          type="curso"
          placeholder="Digite o seu curso"
          name="curso"
          onChange={handleChange}
        />
        <C.LabelTitle>Email</C.LabelTitle>
        <Input
          type="email"
          placeholder="Digite o seu E-mail"
          name="email"
          onChange={handleChange}
        />
        <C.LabelTitle>Confirme seu Email</C.LabelTitle>
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          name="emailConf"
          onChange={handleChange}
        />
        <C.LabelTitle>Senha</C.LabelTitle>
        <Input
          type="password"
          placeholder="Digite sua Senha"
          name="senha"
          onChange={handleChange}
        />
        <C.labelError>{error && error}</C.labelError>
        <div
          style={{
            display: "flex",
            gap: "15px",
            padding: "15px 0px 15px",
            justifyContent: "center",
          }}
        >
          <Button Text="Inscrever-se" onClick={handleSignup} />
        </div>
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
      <C.Image src="image.png" alt="Descrição da imagem" />
    </C.Container>
  );
};

export default Signup;
