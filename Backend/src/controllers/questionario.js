import { db } from "../database/db.js";



export const getQuestionarios = (_, res) => {
  const q = "SELECT * FROM questionario";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};



export const getQuestionario = (req, res) => {
  const q = "SELECT perguntas FROM questionario where id_questionario = ?";

  db.query(q, [req.params.idquestionario], (err, data) => {
    if (err) return res.status(500).json(err);

    if (!data || data.length === 0)
      return res.status(404).json("Questionario nao encontrado")

    try {
      return res.status(200).json(data[0].perguntas);
    } catch (parseErr) {
      return res.status(500).json({ error: "Failed to parse JSON" });
    }
  });
};



export const getQuestionarioByDiscTurmaProfessor = (req, res) => {
  const { idProfessor, idDisc, idTurma } = req.params;

  const q = `
    SELECT q.id_questionario
    FROM questionario q
    JOIN professor_turma pt ON q.id_professor_turma = pt.id
    WHERE pt.idprofessor = ? AND q.id_disciplina = ? AND pt.idturma = ?;
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
      WHERE pt.idprofessor = ? AND q.id_disciplina = ? AND pt.idturma = ?;
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




export const getQuestionarioDaTurmaByIdUsuarioAndIdDisciplina = (req, res) => {
  const query = `
      SELECT distinct q.perguntas, q.id_questionario
      from questionario q
      left join professor_turma pt on pt.id = q.id_professor_turma 
      left join turma t on t.idturma = pt.idturma 
      left join turma_disciplina td on td.idturma = t.idturma 
      left join disciplinas d on d.id_disciplina = td.iddisciplina 
      left join aluno_turma at2 on at2.idturma = at2.idturma 
      left join alunos a on a.idaluno = at2.idaluno 
      left join usuarios u on u.id = a.id_usuario 
      WHERE u.id = ?
      and d.id_disciplina = ?
      and q.tipo = ?
    `

    const { idDisciplina } = req.params;
    const { idusuario: idUsuario, tipoquestionario: tipoQuestionario } = req.headers;


    db.query(query, [idUsuario, idDisciplina, tipoQuestionario], (err, data) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Erro ao buscar o perguntas", error: err });
  
      if (data.length === 0)
        return res.status(404).json({ message: "Perguntas não encontrada" });

      return res.status(200).json(data[0].perguntas);
    });
  
}