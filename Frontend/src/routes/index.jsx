import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import DashboardProfessor from "../pages/Professor/DashBoard";
import QuestionarioPos from "../pages/Professor/QuestionarioPos";
import EditarQuestPos from "../pages/Professor/EditarQuestPos";
import MeuQuestionarioPos from "../pages/Professor/MeuQuestionarioPos";

// Importações de Páginas do Aluno
import DashBoardAluno from "../pages/Aluno/DashBoard";
import DeletadoSucessoAluno from "../pages/Aluno/DeletadoSucesso";
import EnviadoSucessoAluno from "../pages/Aluno/EnviadoSucesso";
import QuestionarioPosAluno from "../pages/Aluno/QuestionarioPos";
import QuestionarioPreAluno from "../pages/Aluno/QuestionarioPre";
import SessaoAluno from "../pages/Aluno/Sessao";
import TelaMateriaAluno from "../pages/Aluno/TelaMateria";
import MinhaContaAluno from "../pages/Aluno/MinhaContaAluno";

// Componente Private para proteger rotas que exigem autenticação
const Private = ({ Item, allowedRoles }) => {
  const { currentUser, role } = useAuth();

  if (!currentUser) {
    return <TelaInicio />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <TelaInicio />;
  }

  return <Item />;
};

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          {/* Rotas de Autenticação */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/cadastroAluno" element={<Signup />} />
          <Route path="/cadastroProfessor" element={<SignupProfessor />} />

          {/* Rotas Comuns */}
          <Route path="/home" element={<Private Item={Home} />} />
          <Route path="/redefinirSenha" element={<RedefinirSenha />} />
          <Route path="*" element={<TelaInicio />} />

          {/* Rotas do Professor */}
          <Route
            path="/materiasP"
            element={
              <Private Item={TelaMateria} allowedRoles={["professor"]} />
            }
          />
          <Route
            path="/preQuest"
            element={
              <Private Item={QuestionarioPre} allowedRoles={["professor"]} />
            }
          />
          <Route
            path="/turmas/:idDisc"
            element={<Private Item={Turmas} allowedRoles={["professor"]} />}
          />
          <Route
            path="/turmas/:idDisc/:idturma"
            element={<Private Item={Sessao} allowedRoles={["professor"]} />}
          />
          <Route
            path="/minhaContaProfessor"
            element={
              <Private
                Item={MinhaContaProfessor}
                allowedRoles={["professor"]}
              />
            }
          />
          <Route
            path="/sessao/:idDisc/:idturma/relatorio"
            element={
              <Private Item={DashboardProfessor} allowedRoles={["professor"]} />
            }
          />
          <Route
            path="/sessao/:idDisc/:idturma/preQuest"
            element={
              <Private Item={QuestionarioPre} allowedRoles={["professor"]} />
            }
          />
          <Route
            path="/sessao/:idDisc/:idturma/posQuest"
            element={
              <Private Item={QuestionarioPos} allowedRoles={["professor"]} />
            }
          />
          <Route
            path="/sessao/:idDisc/:idturma/preQuest/enviado"
            element={
              <Private Item={EnviadoSucesso} allowedRoles={["professor"]} />
            }
          />
          <Route
            path="/sessao/:idDisc/:idturma/posQuest/enviado"
            element={
              <Private Item={EnviadoSucesso} allowedRoles={["professor"]} />
            }
          />
          <Route
            path="/sessao/:idDisc/:idturma/preQuest/deletado"
            element={
              <Private Item={DeletadoSucesso} allowedRoles={["professor"]} />
            }
          />
          <Route
            path="/sessao/:idDisc/:idturma/posQuest/deletado"
            element={
              <Private Item={DeletadoSucesso} allowedRoles={["professor"]} />
            }
          />
          <Route
            path="/sessao/:idDisc/:idturma/preQuest/editar"
            element={
              <Private Item={EditarQuest} allowedRoles={["professor"]} />
            }
          />
          <Route
            path="/sessao/:idDisc/:idturma/posQuest/editar"
            element={
              <Private Item={EditarQuestPos} allowedRoles={["professor"]} />
            }
          />
          <Route
            path="/sessao/:idDisc/:idturma/preQuest/meuQuest"
            element={
              <Private Item={MeuQuestionario} allowedRoles={["professor"]} />
            }
          />
          <Route
            path="/sessao/:idDisc/:idturma/posQuest/meuQuest"
            element={
              <Private Item={MeuQuestionarioPos} allowedRoles={["professor"]} />
            }
          />

          {/* Rotas do Aluno */}
          <Route
            path="/materiasA"
            element={
              <Private Item={TelaMateriaAluno} allowedRoles={["aluno"]} />
            }
          />
          <Route
            path="/preQuestAluno"
            element={
              <Private Item={QuestionarioPreAluno} allowedRoles={["aluno"]} />
            }
          />
          <Route
            path="/disciplina/:idDisc/"
            element={<Private Item={SessaoAluno} allowedRoles={["aluno"]} />}
          />
          <Route
            path="/minhaContaAluno"
            element={
              <Private Item={MinhaContaAluno} allowedRoles={["aluno"]} />
            }
          />
          <Route
            path="/sessaoA/:idDisc/preQuest"
            element={
              <Private Item={QuestionarioPreAluno} allowedRoles={["aluno"]} />
            }
          />
          <Route
            path="/sessaoA/:idDisc/preQuest/enviado"
            element={
              <Private Item={EnviadoSucessoAluno} allowedRoles={["aluno"]} />
            }
          />
          <Route
            path="/sessaoA/:idDisc/preQuest/deletado"
            element={
              <Private Item={DeletadoSucessoAluno} allowedRoles={["aluno"]} />
            }
          />
          <Route
            path="/sessaoA/:idDisc/posQuest"
            element={
              <Private Item={QuestionarioPosAluno} allowedRoles={["aluno"]} />
            }
          />
          <Route
            path="/sessaoA/:idDisc/posQuest/enviado"
            element={
              <Private Item={EnviadoSucessoAluno} allowedRoles={["aluno"]} />
            }
          />
          <Route
            path="/sessaoA/:idDisc/posQuest/deletado"
            element={
              <Private Item={DeletadoSucessoAluno} allowedRoles={["aluno"]} />
            }
          />
          <Route
            path="/sessaoA/:idDisc/relatorio"
            element={<Private Item={DashBoardAluno} allowedRoles={["aluno"]} />}
          />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RouteApp;
