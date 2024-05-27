import { db } from "../database/db.js";

export const getProfessores = (_, res) => {
  const q = "SELECT * FROM professores";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const getProfessorID = (req, res) => {
  const { professorId } = req.body; // Obtenha o idturma do corpo da requisição

  // Realize o JOIN para obter o id_professor correspondente ao id_usuario
  const q1 = `
    SELECT idprofessores
    FROM professores
    JOIN usuarios ON usuarios.id = professores.id_usuario
    WHERE professores.id_usuario = ?
  `;

  db.query(q1, [professorId], (err, data) => {
    if (err) {
      console.error("Erro ao buscar professor:", err);
      return res.status(500).json(err);
    }

    if (data.length === 0) {
      return res.status(404).json("Professor não encontrado");
    }

    return res.status(200).json(data[0].idprofessores);
  });

  //   const q = "SELECT `nome` from disciplinas WHERE id_disciplina = ?";

  //   db.query(q, [req.params.idDisc], (err, data) => {
  //     if (err) return res.status(500).json(err);

  //     return res.status(200).json(data[0]);
  //   });
};
