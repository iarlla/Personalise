import { db } from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  const { email, nome, senha, matricula, curso } = req.body;

  const q = "SELECT * FROM usuarios WHERE email = ?";

  db.query(q, [email], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (data.length) {
      return res.status(409).json("Usuário já cadastrado!");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(senha, salt);

    const q2 =
      "INSERT INTO usuarios (nome, matricula, curso, email, senha) VALUES (?, ?, ?, ?, ?)";

    db.query(
      q2,
      [nome, matricula, curso, email, hashedPassword],
      (err, data) => {
        if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).json("Usuário foi criado!");
      }
    );
  });
};

export const login = (req, res) => {
  const { email, senha } = req.body;

  const q = "SELECT * FROM usuarios WHERE email = ?";

  db.query(q, [email], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length === 0)
      return res.status(404).json("Usuário não encontrado");

    const senhaArmazenada = data[0].senha;

    const checkPassword = bcrypt.compareSync(senha, senhaArmazenada);

    if (!checkPassword) {
      return res.status(400).json("Senha ou email incorretos!");
    }

    const token = jwt.sign({ id: data[0].id }, "secretKey");

    const { senha: senhaUsuario, ...others } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: false,
      sameSite: "none",
    })
    .status(200)
    .json("Usuario desconectado!");
};
