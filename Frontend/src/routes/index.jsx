import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importações de Autenticação
import useAuth from "../hooks/useAuth";

// Importações gerais
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/SignupAluno";
import SignupProfessor from "../pages/SignupProfessor";
import MinhaConta from "../pages/MinhaConta";
import TelaInicio from "../pages/TelaInicio";

// Importações de Páginas do Professor
import TelaMateria from "../pages/Professor/TelaMateria";
import QuestionarioPre from "../pages/Professor/QuestionarioPre";
import Turmas from "../pages/Professor/SPAmaterias";
import Sessao from "../pages/Professor/Sessao";
import EnviadoSucesso from "../pages/Professor/EnviadoSucesso";
import DeletadoSucesso from "../pages/Professor/DeletadoSucesso";
import EditarQuest from "../pages/Professor/EditarQuest";
import MeuQuestionario from "../pages/Professor/MeuQuestionario";

// Importações de Páginas do Aluno
import TelaMateriaAluno from "../pages/Aluno/TelaMateria";
import QuestionarioPreAluno from "../pages/Aluno/QuestionarioPre";
import SessaoAluno from "../pages/Aluno/Sessao";
import EnviadoSucessoAluno from "../pages/Aluno/EnviadoSucesso";
import DeletadoSucessoAluno from "../pages/Aluno/DeletadoSucesso";
import EditarQuestAluno from "../pages/Aluno/EditarQuest";
import DashBoardAluno from "../pages/Aluno/DashBoard";

// Componente Private para proteger rotas que exigem autenticação
const Private = ({ Item }) => {
  const { currentUser } = useAuth();

  return !currentUser ? <TelaInicio /> : <Item />;
};

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
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
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RouteApp;
