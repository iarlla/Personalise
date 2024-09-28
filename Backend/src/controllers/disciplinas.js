import { db } from "../database/db.js";

export const getDisciplinas = (_, res) => {
  const q = "SELECT * FROM disciplinas";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const getDisciplina = (req, res) => {
  const q = "SELECT `nome` from disciplinas WHERE id_disciplina = ?";
  db.query(q, [req.params.idDisc], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};

export const createDisciplinasByIdUsuario = (req, res) => {
  const { materia, hora, descricao, professorId, turmas } = req.body;

  // Buscar o id do professor com base no id de usuário
  const q1 = `
    SELECT p.idprofessores
    FROM professores p
    LEFT JOIN usuarios u ON p.id_usuario = u.id
    WHERE u.id = ?
  `;

  db.query(q1, [professorId], (err, professorData) => {
    if (err) {
      console.error("Erro ao buscar professor:", err);
      return res.status(500).json({ message: "Erro ao buscar professor" });
    }

    if (professorData.length === 0) {
      return res.status(404).json({ message: "Professor não encontrado" });
    }

    const idProfessor = professorData[0].idprofessores; // ID do professor encontrado

    // Inserir a disciplina
    const insertDisciplinaQuery =
      "INSERT INTO disciplinas (nome, carga_horaria, descricao) VALUES (?, ?, ?)";

    db.query(
      insertDisciplinaQuery,
      [materia, hora, descricao],
      (err, disciplinaData) => {
        if (err) {
          console.error("Erro ao inserir disciplina: ", err);
          return res
            .status(500)
            .json({ message: "Erro ao inserir disciplina" });
        }

        const idDisciplina = disciplinaData.insertId; // Obtém o ID da disciplina recém-criada

        // Função auxiliar para inserir ou buscar o ID da turma
        const inserirOuBuscarTurma = (turmaNome, callback) => {
          const checkTurmaQuery = "SELECT idturma FROM turma WHERE nome = ?";

          db.query(checkTurmaQuery, [turmaNome], (err, turmaExistente) => {
            if (err) {
              console.error("Erro ao verificar turma: ", err);
              return res
                .status(500)
                .json({ message: "Erro ao verificar turma" });
            }

            if (turmaExistente.length > 0) {
              // Turma já existe
              const idTurma = turmaExistente[0].idturma;
              console.log(
                `Turma '${turmaNome}' já existe. Usando id existente.`
              );
              callback(idTurma);
            } else {
              // Turma não existe, inserimos uma nova
              const insertTurmaQuery = "INSERT INTO turma (nome) VALUES (?)";
              db.query(insertTurmaQuery, [turmaNome], (err, turmaData) => {
                if (err) {
                  console.error("Erro ao inserir turma: ", err);
                  return res
                    .status(500)
                    .json({ message: "Erro ao inserir turma" });
                }
                const idTurma = turmaData.insertId;
                console.log(`Turma '${turmaNome}' criada com id: ${idTurma}`);
                callback(idTurma);
              });
            }
          });
        };

        // Para cada turma, inserir ou buscar a turma e então criar o relacionamento
        turmas.forEach((turma) => {
          inserirOuBuscarTurma(turma.nome, (idTurma) => {
            // Inserir o relacionamento na tabela 'turma_disciplina_professor'
            const insertRelationshipQuery = `
              INSERT INTO turma_disciplina_professor (idprofessor, idturma, iddisciplina)
              VALUES (?, ?, ?)
            `;
            db.query(
              insertRelationshipQuery,
              [idProfessor, idTurma, idDisciplina],
              (err) => {
                if (err) {
                  console.error("Erro ao criar relacionamento: ", err);
                  return res
                    .status(500)
                    .json({ message: "Erro ao criar relacionamento" });
                }
              }
            );
          });
        });

        // Resposta de sucesso
        return res.status(200).json({
          message: "Disciplina e relacionamentos inseridos com sucesso!",
        });
      }
    );
  });
};

/**
 * Retorna as disciplinas de um usuário, seja ele professor.
 */
export const getDisciplinasByIdUsuario = (req, res) => {
  const q = `
        SELECT DISTINCT d.id_disciplina, d.nome, d.descricao, d.carga_horaria
        FROM disciplinas d
        LEFT JOIN turma_disciplina_professor td ON d.id_disciplina = td.iddisciplina
        LEFT JOIN professores p ON p.idprofessores = td.idprofessor
        LEFT JOIN turma t ON td.idturma = t.idturma
        WHERE p.id_usuario = ?;
    `;

  db.query(q, [req.params.idusuario], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
