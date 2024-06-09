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


    const q = `
    SELECT DISTINCT q.id_questionario, perguntas
        from questionario q
        left join turma_disciplina_professor td on td.id = q.id_turma_disciplina_professor
        left join turma t on t.idturma = td.idturma
        left join aluno_turma at2 on at2.idturma = t.idturma
        left join alunos a on a.idaluno = at2.idaluno
        left join professores p on p.idprofessores = td.idprofessor
        left join usuarios u on (a.id_usuario = u.id or p.id_usuario = u.id)
        where u.id = ?
        and td.iddisciplina = ?
        and (? is null or t.idturma = ?)
    `;

    db.query(q, [idusuario, idDisciplina, idturma, idturma], (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.length === 0) {
            return res.status(404).json("Questionário não encontrado");
        }
        const perguntas = []

        data.forEach((d) => {
            const perguntasArray = d.perguntas;
            perguntasArray.forEach((pergunta) => {
                perguntas.push({
                    id: d.id_questionario,
                    num: pergunta.num,
                    pergunta: pergunta.pergunta
                });
            });
        });

        const distinctIds = [...new Set(perguntas.map(pergunta => pergunta.id))];

        const q2 = `
            SELECT rq.num, rq.resposta
            FROM respostas r
            LEFT JOIN respostas_questionario rq on rq.idrespostas = r.idrespostas
            WHERE r.idquestionario in (${distinctIds.join(", ")})
            ORDER BY rq.num, rq.resposta
        `;

        db.query(q2, [req.params.idquestionario], (err, data) => {
            if (err) return res.status(500).json(err);

            const respostas = data.map((d) => ({ num: d.num, resposta: d.resposta }));
            const result = perguntas.map((p) => {
                const respostasDaPergunta = respostas.filter((r) => r.num === p.num);
                let obj = {"pergunta": p.pergunta, "tipo": p.tipo};
                if (p.tipo === "MULTIPLA_ESCOLHA" || p.tipo == null || p.tipo == undefined) {
                    let count0 = 0, count1 = 0, count2 = 0;

                    respostasDaPergunta.forEach((r) => {
                        if (r.resposta === 0) count0++;
                        else if (r.resposta === 1) count1++;
                        else if (r.resposta === 2) count2++;
                    });
                    const sum = count0 + count1 + count2;
                    obj.resposta = [
                        { id: 0, resposta: `${count0} alunos concordagem totalmente (${sum > 0 ? ((1.0 * count0) / sum * 100).toFixed(2) : '0.00'}%)` },
                        { id: 1, resposta: `${count1} alunos concordagem parcialmente (${sum > 0 ? ((1.0 * count1) / sum * 100).toFixed(2) : '0.00'}%)` },
                        { id: 2, resposta: `${count2} alunos discordam totalmente (${sum > 0 ? ((1.0 * count2) / sum * 100).toFixed(2) : '0.00'}%)` }
                    ];
                } else if (p.tipo === "SIM_NAO") {
                    const trueCount = respostasDaPergunta.reduce((count, r) => count + (r.resposta == 1 || r.resposta === true ? 1 : 0), 0);
                    obj.resposta = trueCount;
                }
                return obj;
            })

            return res.status(200).json(result);
        })
    });


};



export const postResposta = (req, res) => {
  const { disciplina, idUsuario, respostas, tipo } = req.body;


    db.query(`
        SELECT idaluno
        FROM alunos
        LEFT JOIN usuarios ON usuarios.id = alunos.id_usuario
        WHERE usuarios.id = ?
    `, [idUsuario], (err, data) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (data === null || data.length === 0) {
            return res.status(404).json("Aluno não encontrado");
        }

        const idAluno = data[0].idaluno;

        db.query(`
            SELECT q.id_questionario
          from questionario q
          left join turma_disciplina_professor pt on pt.id = q.id_turma_disciplina_professor
          left join turma t on t.idturma = pt.idturma
          left join aluno_turma at2 on at2.idturma = at2.idturma
          left join alunos a on a.idaluno = at2.idaluno
          left join usuarios u on u.id = a.id_usuario
          WHERE u.id = ?
          and pt.iddisciplina = ?
          and q.tipo = ?
        `, [idAluno, disciplina, tipo], (err, data) => {

            if (err) {
                return res.status(500).json(err);
            }

            if (data === null || data.length === 0 || data[0].id_questionario === undefined) {
                return res.status(404).json("Questionário não encontrado");
            }

            const idQuestionario = data[0].id_questionario;


            const queryInsertResposta = "INSERT INTO respostas (idaluno, idquestionario) VALUES (?, ?)";
            db.query(queryInsertResposta, [idAluno, idQuestionario], (err, data) => {
                if (err) {
                    return res.status(500).json(err);
                }

                const idResposta = data.insertId;

                respostas.forEach((r) => {
                    const queryInsertRespostaQuestionario = "INSERT INTO respostas_questionario (idrespostas, num, resposta) VALUES (?, ?, ?)";
                    db.query(queryInsertRespostaQuestionario, [idResposta, r.num, r.resposta], (err) => {
                        if (err) {
                            return res.status(500).json(err);
                        }
                    });
                });

                return res.status(201).json({ message: "Respostas inseridas com sucesso", data });
            });

        });

    });


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
};