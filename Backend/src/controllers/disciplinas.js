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
  db.query(q, [req.params.idDisc], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};

export const createDisciplinasByIdUsuario = (req, res) => {
  const q = "SELECT `nome` from disciplinas WHERE id_disciplina = ?";
  db.query(q, [req.params.idDisc], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};

/**
 * Retorna as disciplinas de um usuário, seja ele professor ou aluno.
 */
export const getDisciplinasByIdUsuario = (req, res) => {
  const q = `
        SELECT DISTINCT d.id_disciplina, d.nome, d.descricao, d.carga_horaria
        FROM disciplinas d
        LEFT JOIN turma_disciplina_professor td on d.id_disciplina = td.iddisciplina
        LEFT JOIN professores p ON p.idprofessores = td.idprofessor
        LEFT JOIN turma t on td.idturma = t.idturma
        LEFT JOIN aluno_turma at ON at.idturma = t.idturma
        LEFT JOIN alunos a ON a.idaluno = at.idaluno
        LEFT JOIN usuarios u ON (u.id = p.id_usuario OR u.id = a.id_usuario)
        WHERE u.id = ?;
    `;

  db.query(q, [req.params.idusuario], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};
