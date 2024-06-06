// import { useState, useContext } from "react";
// import Input from "../../components/input";
// import Button from "../../components/button";
// import * as C from "./styles";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import axios from "axios";

// // import enviarEmail from "../../../../Backend/src/controllers/redSenha"

// const RedefinirSenha = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { verify } = location.state || {};

//   const [error, setError] = useState(null);

//   const [input, setInput] = useState({
//     email: ""
//   });

//   const handleChange = (e) => {
//     setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const { login } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:3001/api/",
//         {
//           email;
//         },
//         { withCredentials: true } // Para enviar cookies junto com a requisição
//       );
//     } catch (error) {
//       console.error("Erro ao enviar perguntas:", error);
//     }
//   };

//   return (
//     <>
//       <C.Container>
//         <C.Content>
//           <C.LabelSignin>Esqueceu sua senha?</C.LabelSignin>
//           <C.Describe>
//             Digite seu email, que encaminharemos um codigo de verificação.
//           </C.Describe>
//           <C.LabelTitle>Email</C.LabelTitle>
//           <Input
//             type="email"
//             placeholder="Digite o seu E-mail"
//             name="email"
//             onChange={handleChange}
//           />
//           <C.labelError>{error && error}</C.labelError>
//           <Button Text="Enviar" onClick={handleSubmit}></Button>
//         </C.Content>
//         <C.Image src="image.png" alt="Descrição da imagem" />
//       </C.Container>
//     </>
//   );
// };

// export default RedefinirSenha;

import { useState, useContext } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import * as C from "./styles";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ButtonReverse from "../../components/ButtonReverse";

const RedefinirSenha = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { verify } = location.state || {};

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

  const { login } = useAuth();

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
      console.log("Successo! Instruçoes enviada para email.");
    } catch (error) {
      console.error("Erro ao verificar email:", error);
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
          <ButtonReverse Text="Voltar para login" onClick={voltarTela}></ButtonReverse>
          </div>
        </C.Content>
        <C.Image src="image.png" alt="Descrição da imagem" />
      </C.Container>
    </>
  );
};

export default RedefinirSenha;
