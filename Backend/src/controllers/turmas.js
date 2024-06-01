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
    const q = `
    SELECT DISTINCT t.nome
        FROM turma t
    LEFT JOIN professor_turma pt ON t.idturma = pt.idturma
    LEFT JOIN professores p ON p.idprofessores = pt.idprofessor
    LEFT JOIN aluno_turma at ON at.idturma = t.idturma
    LEFT JOIN alunos a ON a.idaluno = at.idaluno
    LEFT JOIN usuarios u ON (u.id = p.id_usuario OR u.id = a.id_usuario)
    WHERE u.id = ?;
    `;

    db.query(q, [req.params.idusuario], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
}
