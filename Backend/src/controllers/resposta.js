import { db } from "../database/db.js";

export const getRespostas = (_, res) => {
  const q = "SELECT * FROM respostas";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};





export const postResposta = (req, res) => {
  const { id_questionario, id_usuario, respostas } = req.body;

    const q1 = `
        SELECT idaluno
        FROM alunos
        LEFT JOIN usuarios ON usuarios.id = alunos.id_usuario
        WHERE usuarios.id = ?
    `;

    db.query(q1, [id_usuario], (err, data) => {
        if (err) {
            console.error("Erro ao buscar aluno:", err);
            return res.status(500).json(err);
        }

        if (data.length === 0) {
            console.log(id_usuario)
            return res.status(404).json("Aluno não encontrado");
        }

        const idAluno = data[0].idaluno;

        const q2 = "INSERT INTO respostas (idaluno, idquestionario) VALUES (?, ?)";
        db.query(q2, [idAluno, id_questionario], (err, data) => {
            if (err) {
                return res
                .status(500)
                .json({ message: "Erro no servidor", error: err });
            }
            const idResposta = data.insertId;

            respostas.forEach((r) => {
                const q3 = "INSERT INTO respostas_questionario (idrespostas, num, resposta) VALUES (?, ?, ?)";
                if (r.resposta === undefined || r.resposta === null) {
                    return
                }
                db.query(q3, [idResposta, r.num, r.resposta], (err) => {
                    if (err) {
                        return res
                        .status(500)
                        .json({ message: "Erro no servidor", error: err });
                    }
                });
            });
            return res.status(201).json({ message: "Respostas inseridas com sucesso", data });
        });

    });
};
