import { db } from "../database/db.js";

export const getUsers = (_, res) => {
  const query = `
    SELECT
      u.id,
      u.nome,
      u.email,
      u.senha,
      CASE
          WHEN a.idaluno IS NOT NULL THEN 'aluno'
          WHEN p.idprofessores IS NOT NULL THEN 'professor'
          ELSE 'None'
      END AS role
      FROM usuarios u
    LEFT JOIN alunos a ON a.id_usuario = u.id
    LEFT JOIN professores p ON p.id_usuario = u.id;
  `;

  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};



export const getInfoOfUser = (req, res) => {
  const query = `
      SELECT
        u.nome,
        u.email,
        CASE
            WHEN a.idaluno IS NOT NULL THEN a.matricula
            WHEN p.idprofessores IS NOT NULL THEN p.matricula
            ELSE 'None'
        END AS matricula,
        CASE
            WHEN a.idaluno IS NOT NULL THEN 'aluno'
            WHEN p.idprofessores IS NOT NULL THEN 'professor'
            ELSE 'None'
        END AS role
        FROM usuarios u
      LEFT JOIN alunos a ON a.id_usuario = u.id
      LEFT JOIN professores p ON p.id_usuario = u.id
      WHERE u.id = ?;
    `;
  db.query(query, [req.params.idusuario], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
