import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import disciplinasRoutes from "./routes/disciplinas.js";
import turmasRoutes from "./routes/turmas.js";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/disciplinas", disciplinasRoutes);
app.use("/api/turmas", turmasRoutes);

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
