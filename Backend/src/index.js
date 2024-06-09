import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import disciplinasRoutes from "./routes/disciplinas.js";
import turmasRoutes from "./routes/turmas.js";
import questionRoutes from "./routes/questoes.js";
import questionarioRoutes from "./routes/questionario.js";
import professorRoutes from "./routes/professor.js";
import respostaRoutes from "./routes/resposta.js";
import rdSenhaRoutes from "./routes/redSenha.js";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: process.env.APP_WEB_URL,
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/disciplinas", disciplinasRoutes);
app.use("/api/turmas", turmasRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/questionario", questionarioRoutes);
app.use("/api/professor", professorRoutes);
app.use("/api/respostas", respostaRoutes);
app.use("/api/redefinicaoSenha", rdSenhaRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("");
  console.log("Rodando na porta 3001");
});
