import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importações de Autenticação
import useAuth from "../hooks/useAuth";

// Importações gerais
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/SignupAluno";
import SignupProfessor from "../pages/SignupProfessor";
import TelaInicio from "../pages/TelaInicio";
import RedefinirSenha from "../pages/RedefinirSenha";

// Importações de Páginas do Professor
import MinhaContaProfessor from "../pages/Professor/MinhaContaProf";
import DeletadoSucesso from "../pages/Professor/DeletadoSucesso";
import EditarQuest from "../pages/Professor/EditarQuest";
import EnviadoSucesso from "../pages/Professor/EnviadoSucesso";
import MeuQuestionario from "../pages/Professor/MeuQuestionario";
import QuestionarioPre from "../pages/Professor/QuestionarioPre";
import Turmas from "../pages/Professor/SPAmaterias";
import Sessao from "../pages/Professor/Sessao";
import TelaMateria from "../pages/Professor/TelaMateria";

// Importações de Páginas do Aluno
import DashBoardAluno from "../pages/Aluno/DashBoard";
import DeletadoSucessoAluno from "../pages/Aluno/DeletadoSucesso";
import EnviadoSucessoAluno from "../pages/Aluno/EnviadoSucesso";
import QuestionarioPosAluno from "../pages/Aluno/QuestionarioPos";
import QuestionarioPreAluno from "../pages/Aluno/QuestionarioPre";
import SessaoAluno from "../pages/Aluno/Sessao";
import TelaMateriaAluno from "../pages/Aluno/TelaMateria";
import DashboardProfessor from "../pages/Professor/DashBoard";
import QuestionarioPos from "../pages/Professor/QuestionarioPos";
import EditarQuestPos from "../pages/Professor/EditarQuestPos";
import MeuQuestionarioPos from "../pages/Professor/MeuQuestionarioPos";
import MinhaContaAluno from "../pages/MinhaConta"

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
          <Route path="*" element={<TelaInicio />} />
          <Route path="/redefinirSenha" element={<RedefinirSenha />} />

          {/* Rotas do Professor */}
          <Route path="/materiasP" element={<TelaMateria />} />
          <Route path="/preQuest" element={<QuestionarioPre />} />
          <Route path="/turmas/:idDisc" element={<Turmas />} />
          <Route path="/turmas/:idDisc/:idturma" element={<Sessao />} />
          <Route path="/sessao/:idDisc/:idturma/relatorio" element={<DashboardProfessor />} />
          <Route path="/sessao/:idDisc/:idturma/preQuest" element={<QuestionarioPre />} />
          <Route path="/sessao/:idDisc/:idturma/posQuest" element={<QuestionarioPos />} />
          <Route path="/sessao/:idDisc/:idturma/preQuest/enviado" element={<EnviadoSucesso />} />
          <Route path="/sessao/:idDisc/:idturma/preQuest/deletado" element={<DeletadoSucesso />} />
          <Route path="/sessao/:idDisc/:idturma/posQuest/deletado" element={<DeletadoSucesso />} />
          <Route path="/sessao/:idDisc/:idturma/preQuest/editar" element={<EditarQuest />} />
          <Route path="/sessao/:idDisc/:idturma/posQuest/editar" element={<EditarQuestPos />} />
          <Route path="/sessao/:idDisc/:idturma/preQuest/meuQuest" element={<MeuQuestionario />} />
          <Route path="/sessao/:idDisc/:idturma/posQuest/meuQuest" element={<MeuQuestionarioPos />} />
          <Route path="/minhaContaProfessor" element={<MinhaContaProfessor />} />

          {/* Rotas do Aluno */}
          <Route path="/materiasA" element={<TelaMateriaAluno />} />
          <Route path="/preQuestAluno" element={<QuestionarioPreAluno />} />
          <Route path="/disciplina/:idDisc/" element={<SessaoAluno />} />

          <Route path="/sessaoA/:idDisc/preQuest" element={<QuestionarioPreAluno />} />
          <Route path="/sessaoA/:idDisc/preQuest/enviado" element={<EnviadoSucessoAluno />} />
          <Route path="/sessaoA/:idDisc/preQuest/deletado" element={<DeletadoSucessoAluno />} />

          <Route path="/sessaoA/:idDisc/posQuest" element={<QuestionarioPosAluno />} />
          <Route path="/sessaoA/:idDisc/posQuest/enviado" element={<EnviadoSucessoAluno />} />
          <Route path="/sessaoA/:idDisc/posQuest/deletado" element={<DeletadoSucessoAluno />} />

          <Route path="/sessaoA/:idDisc/relatorio" element={<DashBoardAluno />} />
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/minhaContaAluno" element={<MinhaContaAluno />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RouteApp;
