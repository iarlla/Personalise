import { db } from "../database/db.js";

export const postPreQuestoes = (req, res) => {
  postQuestoes(req, res, 'PRE');
};

export const postPosQuestoes = (req, res) => {
  postQuestoes(req, res, 'POS');
};


function postQuestoes(req, res, tipo) {
    // NOTA: o professorId passado é na verdade o id do usuário
    const { questions, professorId, idturma } = req.body; // Obtenha o idturma do corpo da requisição

    // Realize o JOIN para obter o id_professor correspondente ao id_usuario
    const q1 = `
        SELECT idprofessores
        FROM professores
        LEFT JOIN usuarios ON usuarios.id = professores.id_usuario
        WHERE usuarios.id = ?
    `;

    db.query(q1, [professorId], (err, data) => {
        if (err) {
            console.error("Erro ao buscar professor:", err);
            return res.status(500).json(err);
        }

        if (data.length === 0) {
            return res.status(404).json("Professor não encontrado");
        }

        const idProfessor = data[0].idprofessores;

        // Obtenha o id_professor_turma correspondente
        const q2 = "SELECT id FROM professor_turma WHERE idprofessor = ? AND idturma = ?";

        db.query(q2, [idProfessor, idturma], (err, data) => {
            if (err) {
                console.error("Erro ao buscar professor_turma:", err);
                return res.status(500).json(err);
            }

            if (data.length === 0) {
                return res.status(404).json("Professor_Turma não encontrado");
            }

            const idProfessorTurma = data[0].id;

            // Insira as perguntas na tabela questionario
            const q3 = "INSERT INTO questionario (id_professor_turma, perguntas, tipo) VALUES (?, ?, ?)";

            db.query(q3, [idProfessorTurma, JSON.stringify(questions), tipo], (err, data) => {
                if (err) {
                    console.error("Erro ao inserir dados no banco de dados:", err);
                    return res.status(500).json(err);
                }
                return res.status(200).json({ message: "Perguntas inseridas com sucesso", data });
            });
        });
    });
}




function getQuestoes(req, res, tipo) {
    const { questions, idusuario, idturma } = req.body; // Obtenha o idturma do corpo da requisição

    // Realize o JOIN para obter o id_professor correspondente ao id_usuario
    const q1 = `
        SELECT idaluno
        FROM alunos
        LEFT JOIN usuarios ON usuarios.id = alunos.id_usuario
        WHERE usuarios.id = ?
    `;

    db.query(q1, [idusuario], (err, data) => {
        if (err) {
            console.error("Erro ao buscar aluno:", err);
            return res.status(500).json(err);
        }

        if (data.length === 0) {
            return res.status(404).json("Aluno não encontrado");
        }

        const idAluno = data[0].idaluno;

        // Obtenha o id_professor_turma correspondente
        const q2 = "SELECT id FROM professor_turma WHERE idprofessor = ? AND idturma = ?";

        db.query(q2, [idAluno, idturma], (err, data) => {
            if (err) {
                console.error("Erro ao buscar professor_turma:", err);
                return res.status(500).json(err);
            }

            if (data.length === 0) {
                return res.status(404).json("Professor_Turma não encontrado");
            }

            const idProfessorTurma = data[0].id;

            // Insira as perguntas na tabela questionario
            const q3 = "INSERT INTO questionario (id_professor_turma, perguntas, tipo) VALUES (?, ?, ?)";

            db.query(q3, [idProfessorTurma, JSON.stringify(questions), tipo], (err, data) => {
                if (err) {
                    console.error("Erro ao inserir dados no banco de dados:", err);
                    return res.status(500).json(err);
                }
                return res.status(200).json({ message: "Perguntas inseridas com sucesso", data });
            });
        });
    });
}


