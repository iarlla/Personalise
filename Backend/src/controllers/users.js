import { db } from "../database/db.js";
import bcrypt from "bcryptjs";

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

export const updateInfoOfUser = (req, res) => {
  const { nome, email } = req.body;

  const query = "UPDATE usuarios SET nome = ? , email = ? WHERE id = ? ";
  db.query(query, [nome, email, req.params.idusuario], (err, data) => {
    if (err) return res.status(500).json(err);
    return res
      .status(200)
      .json({ message: "Dados alterados com sucesso", data });
  });
};

export const updatePassOfUser = (req, res) => {
  const { oldSenha, senha, confirmSenha } = req.body;

  if (senha !== confirmSenha) {
    return res.status(400).json({
      message: "A nova senha e a confirmação da senha não coincidem.",
    });
  }

  const userId = req.params.idusuario;
  const getUserQuery = "SELECT senha FROM usuarios WHERE id = ?";

  db.query(getUserQuery, [userId], async (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Erro no servidor ao buscar usuário", error: err });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const user = results[0];
    const passwordMatch = await bcrypt.compare(oldSenha, user.senha);

    if (!passwordMatch) {
      return res.status(400).json({ message: "Senha antiga incorreta" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedSenha = bcrypt.hashSync(senha, salt);

    const updateQuery = "UPDATE usuarios SET senha = ? WHERE id = ?";
    db.query(updateQuery, [hashedSenha, userId], (updateErr) => {
      if (updateErr) {
        return res.status(500).json({
          message: "Erro no servidor ao atualizar senha",
          error: updateErr,
        });
      }

      return res.status(200).json({ message: "Senha alterada com sucesso" });
    });
  });
};
