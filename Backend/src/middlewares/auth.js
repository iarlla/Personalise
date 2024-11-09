import { db } from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerProfessor = async (req, res) => {
  const { email, nome, senha, matricula } = req.body;
  let connection;

  try {
    connection = await db.promise().getConnection();
    await connection.beginTransaction();

    const [existingUser] = await connection.execute(
      "SELECT * FROM usuarios WHERE email = ?",
      [email]
    );

    if (existingUser.length) {
      await connection.rollback();
      return res
        .status(409)
        .json({ message: "Usuário com esse email já cadastrado!" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(senha, salt);

    const [result] = await connection.execute(
      "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
      [nome, email, hashedPassword]
    );

    const usuarioID = result.insertId;

    const [resultProfessor] = await connection.execute(
      "INSERT INTO professores (id_usuario, matricula) VALUES (?, ?)",
      [usuarioID, matricula]
    );

    await connection.commit();
    console.log("Professor cadastrado com sucesso!");
    return res
      .status(201)
      .json({ message: "Professor foi cadastrado com sucesso!" });
  } catch (err) {
    if (connection) {
      await connection.rollback();
    }
    const duplicateEntryRegex =
      /Duplicate entry '([^']*)' for key 'professores\.matricula_UNIQUE'/;
    let errorMessage = err.message;
    const match = errorMessage.match(duplicateEntryRegex);
    if (match) {
      errorMessage = `Item ja existe: ${match[1]}`;
    }
    return res.status(500).json({ message: "Erro: " + errorMessage });
  } finally {
    if (connection) {
      await connection.release();
    }
  }
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
        secure: false, // Defina como true em produção
        sameSite: "strict",
      })
      .status(200)
      .json(others);
  });
};

export const logout = (_, res) => {
  res
    .clearCookie("accessToken", {
      secure: false,
      sameSite: "none",
    })
    .status(200)
    .json("Usuario desconectado!");
};
