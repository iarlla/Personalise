import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD

// Importações de Autenticação
import useAuth from "../hooks/useAuth";

// Importações gerais
=======
>>>>>>> main
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/SignupAluno";
import SignupProfessor from "../pages/SignupProfessor";
<<<<<<< HEAD
import MinhaConta from "../pages/MinhaConta";
import TelaInicio from "../pages/TelaInicio";

// Importações de Páginas do Professor
import TelaMateria from "../pages/Professor/TelaMateria";
import QuestionarioPre from "../pages/Professor/QuestionarioPre";
import Turmas from "../pages/Professor/SPAmaterias";
import Sessao from "../pages/Professor/Sessao";
=======
import useAuth from "../hooks/useAuth";
import TelaMateria from "../pages/Professor/TelaMateria";
import QuestionarioPre from "../pages/Professor/QuestionarioPre";
import TelaInicio from "../pages/TelaInicio";
import MinhaConta from "../pages/MinhaConta";
import Turmas from "../pages/Professor/SPAmaterias";
import Sessao from "../pages/Professor/Sessão";
>>>>>>> main
import EnviadoSucesso from "../pages/Professor/EnviadoSucesso";
import DeletadoSucesso from "../pages/Professor/DeletadoSucesso";
import EditarQuest from "../pages/Professor/EditarQuest";
import MeuQuestionario from "../pages/Professor/MeuQuestionario";

<<<<<<< HEAD
// Importações de Páginas do Aluno
import TelaMateriaAluno from "../pages/Aluno/TelaMateria";
import QuestionarioPreAluno from "../pages/Aluno/QuestionarioPre";
import SessaoAluno from "../pages/Aluno/Sessao";
import EnviadoSucessoAluno from "../pages/Aluno/EnviadoSucesso";
import DeletadoSucessoAluno from "../pages/Aluno/DeletadoSucesso";
import EditarQuestAluno from "../pages/Aluno/EditarQuest";
import DashBoardAluno from "../pages/Aluno/DashBoard";

// Componente Private para proteger rotas que exigem autenticação
=======
>>>>>>> main
const Private = ({ Item }) => {
  const { currentUser } = useAuth();

  return !currentUser ? <TelaInicio /> : <Item />;
};

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
<<<<<<< HEAD
          {/* Rotas de Autenticação */}
          <Route path="/signin" element={<Signin />} />
          <Route exact path="/cadastroAluno" element={<Signup />} />
          <Route exact path="/cadastroProfessor" element={<SignupProfessor />}/>

          {/* Rotas Comuns */}
          <Route exact path="/home" element={<Home />} />
          <Route path="/minha-conta" element={<MinhaConta />} />
          <Route path="*" element={<TelaInicio />} />
          
          {/* Rotas do Professor */}
          <Route path="/materiasP" element={<TelaMateria />} />
          <Route path="/preQuest" element={<QuestionarioPre />} />
          <Route path="/turmas/:idDisc" element={<Turmas />} />
          <Route path="/turmas/:idDisc/:idturma" element={<Sessao />} />
          <Route path="/sessao/:idDisc/:idturma/preQuest" element={<QuestionarioPre />} />
          <Route path="/sessao/:idDisc/:idturma/preQuest/enviado" element={<EnviadoSucesso />} />
          <Route path="/sessao/:idDisc/:idturma/preQuest/deletado" element={<DeletadoSucesso />} />
          <Route path="/sessao/:idDisc/:idturma/preQuest/editar" element={<EditarQuest />} />
          <Route path="/sessao/:idDisc/:idturma/preQuest/meuQuest" element={<MeuQuestionario />} />

          {/* Rotas do Aluno */}
          <Route path="/materiasA" element={<TelaMateriaAluno />} />
          <Route path="/turmas/:idDisc/:idturma" element={<SessaoAluno />} />
          <Route path="/sessaoA/:idDisc/:idturma/preQuest" element={<QuestionarioPreAluno />} />
          <Route path="/sessaoA/:idDisc/:idturma/preQuest/enviado" element={<EnviadoSucessoAluno />} />
          <Route path="/sessaoA/:idDisc/:idturma/preQuest/deletado" element={<DeletadoSucessoAluno />} />
          <Route path="/sessaoA/:idDisc/:idturma/preQuest/editar" element={<EditarQuestAluno />} />
          <Route path="/dashboardAluno" element={<DashBoardAluno/>}/>
=======
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/preQuest" element={<QuestionarioPre />} />
          <Route path="/signin" element={<Signin />} />
          <Route exact path="/cadastroAluno" element={<Signup />} />
          <Route
            exact
            path="/cadastroProfessor"
            element={<SignupProfessor />}
          />
          <Route path="/minha-conta" element={<MinhaConta />} />
          <Route path="*" element={<TelaInicio />} />
          <Route path="/materiasP" element={<TelaMateria />} />
          <Route path="/turmas/:idDisc" element={<Turmas />} />
          <Route path="/turmas/:idDisc/:idturma" element={<Sessao />} />
          <Route
            path="/sessao/:idDisc/:idturma/preQuest"
            element={<QuestionarioPre />}
          />
          <Route
            path="/sessao/:idDisc/:idturma/preQuest/enviado"
            element={<EnviadoSucesso />}
          />
          <Route
            path="/sessao/:idDisc/:idturma/preQuest/deletado"
            element={<DeletadoSucesso />}
          />
          <Route
            path="/sessao/:idDisc/:idturma/preQuest/editar"
            element={<EditarQuest />}
          />
          <Route
            path="/sessao/:idDisc/:idturma/preQuest/meuQuest"
            element={<MeuQuestionario />}
          />
>>>>>>> main
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RouteApp;
