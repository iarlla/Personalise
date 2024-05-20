import { db } from "../database/db.js";

export const getTurmas = (_, res) => {
  const q = "SELECT * FROM turma";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const getTurma = (req, res) => {
  res.json("From controller");
};
