import { db } from "../database/db.js";

export const getRespostas = (_, res) => {
  const q = "SELECT * FROM respostas";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const getRespostaByIdQuestionario = (req, res) => {
  const { idDisciplina } = req.params;
  let { idusuario, idturma } = req.headers;

  if (idturma === undefined) {
    idturma = null;
  }

  // Query to retrieve the questions (perguntas) for the given professor (based on idusuario) and discipline (idDisciplina)
  const q = `
    SELECT DISTINCT q.id_questionario, perguntas
    FROM questionario q
    LEFT JOIN turma_disciplina_professor td ON td.id = q.id_turma_disciplina_professor
    LEFT JOIN turma t ON t.idturma = td.idturma
    LEFT JOIN professores p ON p.idprofessores = td.idprofessor
    LEFT JOIN usuarios u ON p.id_usuario = u.id
    WHERE u.id = ?
    AND td.iddisciplina = ?
    AND (? IS NULL OR t.idturma = ?);
  `;

  // Execute the query to fetch questions based on the provided parameters
  db.query(q, [idusuario, idDisciplina, idturma, idturma], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length === 0) {
      return res.status(404).json("Questionário não encontrado");
    }

    // Extract the questions (perguntas) from the results
    const perguntas = [];
    data.forEach((d) => {
      const perguntasArray = d.perguntas;
      perguntasArray.forEach((pergunta) => {
        perguntas.push({
          id: d.id_questionario,
          num: pergunta.num,
          pergunta: pergunta.pergunta,
        });
      });
    });

    // Get distinct question IDs
    const distinctIds = [...new Set(perguntas.map((pergunta) => pergunta.id))];

    // Query to fetch the answers (respostas) based on the question IDs
    const q2 = `
      SELECT rq.num, rq.resposta, r.idquestionario
      FROM respostas r
      LEFT JOIN respostas_questionario rq ON rq.idrespostas = r.idrespostas
      WHERE r.idquestionario IN (${distinctIds.join(", ")})
      ORDER BY rq.num, rq.resposta;
    `;

    db.query(q2, [req.params.idquestionario], (err, data) => {
      if (err) return res.status(500).json(err);

      // Map answers to the corresponding question numbers
      const respostas = data.map((d) => ({
        num: d.num,
        resposta: d.resposta,
        id_questionario: d.idquestionario,
      }));

      // Construct the final result mapping questions to their answers
      const result = perguntas.map((p) => {
        const respostasDaPergunta = respostas.filter(
          (r) => r.num === p.num && r.id_questionario === p.id
        );

        let obj = { pergunta: p.pergunta, tipo: p.tipo };
        if (
          p.tipo === "MULTIPLA_ESCOLHA" ||
          p.tipo == null ||
          p.tipo == undefined
        ) {
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
              resposta: `${count0} respostas concordam totalmente (${
                sum > 0 ? (((1.0 * count0) / sum) * 100).toFixed(2) : "0.00"
              }%)`,
            },
            {
              id: 1,
              resposta: `${count1} respostas concordam parcialmente (${
                sum > 0 ? (((1.0 * count1) / sum) * 100).toFixed(2) : "0.00"
              }%)`,
            },
            {
              id: 2,
              resposta: `${count2} respostas discordam totalmente (${
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

      // Return the final result
      return res.status(200).json(result);
    });
  });
};

export const postResposta = (req, res) => {
  const { hash, respostas } = req.body;

  // Step 1: Get the questionario ID based on the hash
  const getQuestionarioIdQuery = `
    SELECT id_questionario
    FROM questionario
    WHERE codigo = ?;
  `;

  db.query(getQuestionarioIdQuery, [hash], (err, data) => {
    if (err) {
      console.log("AQUI 1");
      return res.status(500).json(err);
    }

    if (data.length === 0) {
      return res.status(404).json("Questionário não encontrado");
    }

    const idQuestionario = data[0].id_questionario;

    // Step 2: Insert the response into the respostas table
    const insertRespostaQuery = `
      INSERT INTO respostas (idquestionario) VALUES (?);
    `;

    db.query(insertRespostaQuery, [idQuestionario], (err, data) => {
      if (err) {
        console.log("AQUI 2");
        return res.status(500).json(err);
      }

      const idResposta = data.insertId; // This is the idresposta we just created

      // Step 3: Insert each response into respostas_questionario
      const insertRespostaQuestionarioQueries = respostas.map((r) => {
        return new Promise((resolve, reject) => {
          const insertRespostaQuestionarioQuery = `
            INSERT INTO respostas_questionario (idrespostas, num, resposta) VALUES (?, ?, ?);
          `;
          db.query(
            insertRespostaQuestionarioQuery,
            [idResposta, r.num, r.resposta],
            (err) => {
              if (err) {
                console.log("AQUI 3");
                return reject(err);
              }
              resolve();
            }
          );
        });
      });

      // Wait for all insert operations to complete
      Promise.all(insertRespostaQuestionarioQueries)
        .then(() => {
          return res.status(201).json({ message: "Respostas inseridas com sucesso" });
        })
        .catch((error) => {
          console.error("Error inserting respostas_questionario:", error);
          return res.status(500).json(error);
        });
    });
  });
};
  // const q2 = "INSERT INTO respostas (idaluno, idquestionario) VALUES (?, ?)";
  // db.query(q2, [idAluno, id_questionario], (err, data) => {
  //     if (err) {
  //         return res
  //         .status(500)
  //         .json({ message: "Erro no servidor", error: err });
  //     }
  //     const idResposta = data.insertId;

  //     respostas.forEach((r) => {
  //         const q3 = "INSERT INTO respostas_questionario (idrespostas, num, resposta) VALUES (?, ?, ?)";
  //         if (r.resposta === undefined || r.resposta === null) {
  //             return
  //         }
  //         db.query(q3, [idResposta, r.num, r.resposta], (err) => {
  //             if (err) {
  //                 return res
  //                 .status(500)
  //                 .json({ message: "Erro no servidor", error: err });
  //             }
  //         });
  //     });
  //     return res.status(201).json({ message: "Respostas inseridas com sucesso", data });
  // });

  // });
