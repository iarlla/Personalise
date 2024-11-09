import { db } from "../database/db.js";

export const postPreQuestoes = (req, res) => {
  postQuestoes(req, res, "PRE");
};

export const postPosQuestoes = (req, res) => {
  postQuestoes(req, res, "POS");
};

function postQuestoes(req, res, tipo) {
  const { questions, professorId, idturma, idDisc, hash } = req.body; // Now also receiving the hash

  // Realize o JOIN para obter o id_professor correspondente ao id_usuario
  const q1 = `
      SELECT idprofessores
      FROM professores
      LEFT JOIN usuarios ON usuarios.id = professores.id_usuario
      WHERE usuarios.id = ?
  `;

  db.query(q1, [professorId], (err, data) => {
    if (err) {
      console.error("Erro ao buscar professor:", err);
      return res.status(500).json(err);
    }

    if (data.length === 0) {
      return res.status(404).json("Professor não encontrado");
    }

    const idProfessor = data[0].idprofessores;

    // Obtenha o id_professor_turma correspondente
    const q2 = `
      SELECT id 
      FROM turma_disciplina_professor tdp 
      WHERE tdp.idprofessor = ? 
        AND tdp.idturma = ? 
        AND tdp.iddisciplina = ?
    `;

    db.query(q2, [idProfessor, idturma, idDisc], (err, data) => {
      if (err) {
        console.error("Erro ao buscar professor_turma:", err);
        return res.status(500).json(err);
      }

      if (data.length === 0) {
        return res.status(404).json("Professor_Turma não encontrado");
      }

      const idProfessorTurma = data[0].id;

      // Now, insert the new questionario with hash into the database
      const q3 = `
        INSERT INTO questionario (id_turma_disciplina_professor, perguntas, tipo, codigo) 
        VALUES (?, ?, ?, ?)
      `;

      db.query(
        q3,
        [idProfessorTurma, JSON.stringify(questions), tipo, hash], // Including the hash value
        (err, data) => {
          if (err) {
            console.error("Erro ao inserir dados no banco de dados:", err);
            return res.status(500).json(err);
          }
          return res.status(200).json({ message: "Perguntas inseridas com sucesso", data });
        }
      );
    });
  });
}

