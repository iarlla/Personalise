import { db } from "../database/db.js";

export const getRespostas = (_, res) => {
  const q = "SELECT * FROM respostas";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const getRespostaByIdQuestionario = (req, res) => {
  const q = "SELECT perguntas FROM questionario where id_questionario = ?";

  db.query(q, [req.params.idquestionario], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length === 0) {
      return res.status(404).json("Questionário não encontrado");
    }

    const perguntas = JSON.parse(data[0].perguntas);
    const q2 = `
            SELECT rq.num, rq.resposta
            FROM respostas r
            LEFT JOIN respostas_questionario rq on rq.idrespostas = r.idrespostas
            WHERE r.idquestionario = ?
            ORDER BY rq.num, rq.resposta
        `;

    db.query(q2, [req.params.idquestionario], (err, data) => {
      if (err) return res.status(500).json(err);

      if (data.length === 0) {
        return res.status(404).json("Questionário não encontrado");
      }

      const respostas = data.map((d) => ({ num: d.num, resposta: d.resposta }));
      const result = perguntas.map((p) => {
        const respostasDaPergunta = respostas.filter((r) => r.num === p.num);
        let obj = { pergunta: p.pergunta, tipo: p.tipo };
        if (p.tipo === "MULTIPLA_ESCOLHA") {
          let count0 = 0,
            count1 = 0,
            count2 = 0;

          respostasDaPergunta.forEach((r) => {
            if (r.resposta === 0) count0++;
            else if (r.resposta === 1) count1++;
            else if (r.resposta === 2) count2++;
          });
          const sum = count0 + count1 + count2;
          obj.resposta = [
            {
              id: 0,
              resposta: `${count0} alunos concordagem totalmente (${
                sum > 0 ? (((1.0 * count0) / sum) * 100).toFixed(2) : "0.00"
              }%)`,
            },
            {
              id: 1,
              resposta: `${count1} alunos concordagem parcialmente (${
                sum > 0 ? (((1.0 * count1) / sum) * 100).toFixed(2) : "0.00"
              }%)`,
            },
            {
              id: 2,
              resposta: `${count2} alunos discordam totalmente (${
                sum > 0 ? (((1.0 * count2) / sum) * 100).toFixed(2) : "0.00"
              }%)`,
            },
          ];
        } else if (p.tipo === "SIM_NAO") {
          const trueCount = respostasDaPergunta.reduce(
            (count, r) =>
              count + (r.resposta == 1 || r.resposta === true ? 1 : 0),
            0
          );
          obj.resposta = trueCount;
        }
        return obj;
      });

      return res.status(200).json(result);
    });
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
      return res.status(500).json(err);
    }

    if (data.length === 0) {
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
        const q3 =
          "INSERT INTO respostas_questionario (idrespostas, num, resposta) VALUES (?, ?, ?)";
        if (r.resposta === undefined || r.resposta === null) {
          return;
        }
        db.query(q3, [idResposta, r.num, r.resposta], (err) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "Erro no servidor", error: err });
          }
        });
      });
      return res
        .status(201)
        .json({ message: "Respostas inseridas com sucesso", data });
    });
  });
};
