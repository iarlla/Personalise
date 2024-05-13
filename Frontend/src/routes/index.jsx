import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import useAuth from "../hooks/useAuth";
import TelaMateria from "../pages/Professor/TelaMateria";
import QuestionarioPre from "../pages/Professor/QuestionarioPre";
import SignupProfessor from "../pages/Signup/SignupProfessor";
import TelaInicio from "../pages/TelaInicio";

const Private = ({ Item }) => {
  const { currentUser } = useAuth();

  return !currentUser ? <Signin /> : <Item />;
};

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/preQuest" element={<QuestionarioPre />} />
          <Route path="/preQuest" element={<QuestionarioPre />} />
          <Route path="/" element={<Signin />} />
          <Route path="/cadastro" element={<Signup />} />
          <Route path="*" element={<Signin />} />
          <Route path="/materiasP" element={<TelaMateria />} />
          <Route path="/cadastroProfessor" element={<SignupProfessor />} />
          <Route exact path="/TelaInicio" element={<TelaInicio />} />
          <Route path="*" element={<TelaInicio />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RouteApp;
