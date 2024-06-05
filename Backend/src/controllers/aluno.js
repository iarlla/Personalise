import { db } from "../database/db.js";

export const getAlunos = (_, res) => {
  const q = "SELECT * FROM alunos";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const getAlunoID = (req, res) => {
  const { alunoId } = req.body; // Obtém o id do aluno a partir do corpo da requisição

  // Realiza um JOIN para obter o id do aluno correspondente ao id_usuario
  const q1 = `
    SELECT idalunos
    FROM alunos
    JOIN usuarios ON usuarios.id = alunos.id_usuario
    WHERE alunos.id_usuario = ?
  `;

  db.query(q1, [alunoId], (err, data) => {
    if (err) {
      console.error("Erro ao buscar aluno:", err);
      return res.status(500).json(err);
    }

    if (data.length === 0) {
      return res.status(404).json("Aluno não encontrado");
    }

    return res.status(200).json(data[0].idalunos);
  });
};
