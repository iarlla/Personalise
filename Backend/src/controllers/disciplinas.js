import { db } from "../database/db.js";

export const getDisciplinas = (_, res) => {
  const q = "SELECT * FROM disciplinas";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const getDisciplina = (req, res) => {
  const q = "SELECT `nome` from disciplinas WHERE id_disciplina = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};
