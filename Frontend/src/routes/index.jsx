import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import useAuth from "../hooks/useAuth";
import TelaMateria from "../pages/Professor/TelaMateria";
import QuestionarioPre from "../pages/Professor/QuestionarioPre";
import TelaMateria from "../pages/Professor/TelaMateria";
import QuestionarioPre from "../pages/Professor/QuestionarioPre";

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
          <Route exact path="/cadastro" element={<Signup />} />
          <Route path="*" element={<Signin />} />
          <Route path="/materiasP" element={<TelaMateria />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RouteApp;
