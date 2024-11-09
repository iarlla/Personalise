import { db } from "../database/db.js";

export const getTurmas = (_, res) => {
  const q = "SELECT * FROM turma";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const getTurma = (req, res) => {
  const q = "SELECT `nome` FROM turma WHERE idturma = ?";

  db.query(q, [req.params.idturma], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const getTurmasByIdUsuario = (req, res) => {
  const { iddisc, idprofessor } = req.params;

  const q = `
    SELECT DISTINCT t.idturma, t.nome
    FROM turma t
    LEFT JOIN turma_disciplina_professor tdp ON t.idturma = tdp.idturma
    LEFT JOIN professores p ON p.idprofessores = tdp.idprofessor
    WHERE p.idprofessores = ? AND tdp.iddisciplina = ?;
  `;

  db.query(q, [idprofessor, iddisc], (err, data) => {
    if (err)
      return res
        .status(500)
        .json({ error: "Erro ao buscar turmas", details: err });

    return res.status(200).json(data);
  });
};
