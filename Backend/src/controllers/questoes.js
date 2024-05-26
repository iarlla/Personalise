import { db } from "../database/db.js";

export const getQuestoes = (req, res) => {
  const { questions } = req.body;

  const q =
    "INSERT INTO questionario (id_professor_turma, perguntas) VALUES (?, ?)";

  db.query(q, [1, JSON.stringify(questions)], (err, data) => {
    if (err) {
      console.error("Erro ao inserir dados no banco de dados:", err);
      return res.status(500).json(err);
    }
    return res
      .status(200)
      .json({ message: "Perguntas inseridas com sucesso", data });
  });
};
