import nodemailer from "nodemailer";
import { db } from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function verificarEmailEEnviarCodigo(req, res) {
  const { email } = req.body;

  const q = "SELECT * FROM usuarios WHERE email = ?";

  db.query(q, [email], (err, data) => {
    if (err) return res.status(500).json(err);

    const usuarioExiste = data[0];

    if (!usuarioExiste) {
      return res.status(404).json("Usuário não encontrado");
    }
    // Configurando transporter do Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "jp.cabralsantos28@gmail.com", //process.env.EMAIL_USER, // Utilize variável de ambiente para credenciais
        pass: "jlzd ncsl bike iehd", //process.env.EMAIL_PASS
      },
    });

    const codigo = gerarCodigo();

    const html = `<h1>Sua nova senha chegou</h1> <p>Sua nova senha é: ${codigo} (nao esqueça de alterar depois)</p>`;
    const text = `Sua nova senha é: ${codigo} (nao esqueça de alterar depois)`;

    transporter.sendMail({
      from: "Personalise <jp.cabralsantos28@gmail.com>",
      to: email,
      subject: "Redefinição de senha | Personalise",
      html,
      text,
    });

    console.log(`Email enviado com sucesso para: ${email}`);

    const salt = bcrypt.genSaltSync(10);
    const hashedCodigo = bcrypt.hashSync(codigo, salt);

    const q1 = "UPDATE usuarios SET `senha` = ? WHERE email = ? ";

    db.query(q1, [hashedCodigo, email], (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Erro no servidor", error: err });
      }
    });

    res.status(200).json({ message: "Email enviado com sucesso!" });
  });
}

function gerarCodigo() {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*,.;/";
  let codigo = "";
  for (let i = 0; i < 10; i++) {
    codigo += caracteres[Math.floor(Math.random() * caracteres.length)];
  }
  return codigo;
}

// enviarEmail("cabral.santosjp@hotmail.com");
