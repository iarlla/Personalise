import nodemailer from "nodemailer";
import { db } from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// export async function alterarSenha(req, res) {
//   const { email } = req.body;

//   // Verifique se o email são válidos
//   const usuarioValido = await verificarCodigo(email);
//   if (!usuarioValido) {
//     return res.status(400).json("Email inválido");
//   }

//   const senhaHash = bcrypt.hashSync(novaSenha, 10); 

//   // Atualize a senha no banco de dados
//   const q = "UPDATE usuarios SET senha = ? WHERE email = ?";
//   db.query(q, [senhaHash, email], (err, result) => {
//     if (err) return res.status(500).json(err);

//     if (result.affectedRows === 0) {
//       return res.status(400).json("Erro ao atualizar senha");
//     }

//     res.status(200).json({ message: "Senha alterada com sucesso!" });
//   });
// }


export async function verificarEmailEEnviarCodigo(req, res) {
  const { email } = req.body;

  const q = "SELECT COUNT(*) FROM usuarios WHERE email = ?";

  db.query(q, [email], async (err, data) => {
    if (err) return res.status(500).json(err);

    const usuarioExiste = data[0].count > 0;

    if (!usuarioExiste) {
      return res.status(404).json("Usuário não encontrado");
    }

    await enviarEmail(email); // Envie o email com o código

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

// Função para enviar email com código de redefinição de senha
export async function enviarEmail(destinatario) {
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

  await transporter.sendMail({
    from: "Personalise <jp.cabralsantos28@gmail.com>",
    to: destinatario,
    subject: "Redefinição de senha | Personalise",
    html,
    text,
  });

  console.log(`Email enviado com sucesso para: ${destinatario}`);
}

enviarEmail("cabral.santosjp@hotmail.com");
