import { db } from "../database/db.js";

export const getDisciplinas = (_, res) => {
  const q = "SELECT * FROM disciplinas";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};
