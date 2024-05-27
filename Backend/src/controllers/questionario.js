import { db } from "../database/db.js";

export const getQuestionarios = (_, res) => {
  const q = "SELECT * FROM questionario";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const getQuestionarioByDiscTurmaProfessor = (req, res) => {
  const { idProfessor, idDisc, idTurma } = req.params;

  const q = `
    SELECT q.id_questionario
    FROM questionario q
    JOIN professor_turma pt ON q.id_professor_turma = pt.id
    JOIN turma_disciplina td ON pt.idturma = td.idturma
    WHERE pt.idprofessor = ? AND td.iddisciplina = ? AND pt.idturma = ?;
  `;

  db.query(q, [idProfessor, idDisc, idTurma], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

export const deleteQuestionarioByDiscTurmaProfessor = (req, res) => {
  const { idProfessor, idDisc, idTurma } = req.params;

  // Primeiro, identifique o questionário
  const q = `
      SELECT q.id_questionario
      FROM questionario q
      JOIN professor_turma pt ON q.id_professor_turma = pt.id
      JOIN turma_disciplina td ON pt.idturma = td.idturma
      WHERE pt.idprofessor = ? AND td.iddisciplina = ? AND pt.idturma = ?;
    `;

  db.query(q, [idProfessor, idDisc, idTurma], (err, data) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Erro ao buscar o questionário", error: err });

    if (data.length === 0)
      return res.status(404).json({ message: "Questionário não encontrado" });

    const questionarioId = data[0].id_questionario;

    // Agora delete o questionário identificado
    const q2 = "DELETE FROM questionario WHERE id_questionario = ?";

    db.query(q2, [questionarioId], (err, result) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Erro ao deletar o questionário", error: err });

      return res
        .status(200)
        .json({ message: "Questionário deletado com sucesso" });
    });
  });
};
