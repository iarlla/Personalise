CREATE DATABASE IF NOT EXISTS personalise;
USE personalise;


DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` TEXT NOT NULL,
  `email` TEXT NOT NULL,
  `senha` TEXT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `usuarios` VALUES
    (1,'alex maxwel','alex@devteste.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),
    (2,'rafael','rafael@dev.com','$2a$10$Oj7pgmw.4HcNpBRIWptrMOHBl7b.rMpL5eugIttbCON6T8C26IR1y'),
    (3,'Pedro Nunes','pedro@aluno.com','$2a$10$8yTu9/kpQvp4cLQlzXDwNeSljVyqlrgCvXQrRe21So3kg.CpYSwiS'),
    (4,'Victor Hugo', 'victor@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),
    (5,'Henrique', 'henrique@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),
    (6,'Joao Gomes', 'boiadeiro@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),
    (7,'Ana clara', 'ana@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),
    (8,'Beatriz', 'bia@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),
    (9,'Paulo', 'paulo@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),
    (10,'Maximiliano', 'max@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),
    (11,'Joao Evangelista Nunes','joao@professor.com','$2a$10$fVmduO.IgONnQBZJhNfahee1cuHmPLSberzcgc5EzHjtcpdCctbtG'),
    (12,'marcelo','marcelo@professor.com','$2a$10$QCdYVp0VvIk7B4slE1BAh.4GRuKNXpPRHvTuQNBVlaHDFdd8cXwqS');


DROP TABLE IF EXISTS `alunos`;
CREATE TABLE `alunos` (
  `idaluno` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `matricula` varchar(45) NOT NULL,
  `curso` varchar(255) NOT NULL,
  PRIMARY KEY (`idaluno`),
  UNIQUE KEY `matricula_UNIQUE` (`matricula`),
  UNIQUE KEY `id_usuario_UNIQUE` (`id_usuario`),
  CONSTRAINT `id_usuario_aluno` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `alunos` VALUES
    (1, 1, 'UC240001', 'Analise e Desenvolvimento de sistema'),
    (2, 2, 'UC240002', 'Analise e Desenvolvimento de sistema'),
    (3, 3, 'UC240003', 'Analise e Desenvolvimento de sistema'),
    (4, 4, 'UC240004', 'Analise e Desenvolvimento de sistema'),
    (5, 5, 'UC240005', 'Analise e Desenvolvimento de sistema'),
    (6, 6, 'UC240006', 'Analise e Desenvolvimento de sistema'),
    (7, 7, 'UC240007', 'Analise e Desenvolvimento de sistema'),
    (8, 8, 'UC240008', 'Analise e Desenvolvimento de sistema'),
    (9, 9, 'UC240009', 'Analise e Desenvolvimento de sistema'),
    (10, 10, 'UC2400010', 'Analise e Desenvolvimento de sistema');


DROP TABLE IF EXISTS `professores`;
CREATE TABLE `professores` (
  `idprofessores` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `matricula` varchar(45) NOT NULL,
  PRIMARY KEY (`idprofessores`),
  UNIQUE KEY `matricula_UNIQUE` (`matricula`),
  UNIQUE KEY `id_usuario_UNIQUE` (`id_usuario`),
  CONSTRAINT `id_usuairo_professor` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `professores` VALUES
    (1, 11, 'UC240011'),
    (2, 12, 'UC240012');


DROP TABLE IF EXISTS `disciplinas`;
CREATE TABLE `disciplinas` (
  `id_disciplina` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `carga_horaria` int NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_disciplina`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `disciplinas` VALUES
    (1,'Programação web',120,'Programação para web com JavaScript, Html e CSS'),
    (2,'Novas Tecnologias',80,'Aprendizado em Python'),
    (3,'Engenharia de Software',80,'UML'),
    (4,'Design de Software',80,'Arquitetura de softwate com base na UML e melhores praticas'),
    (5,'Sistemas Operacionais',80,'Sistemas'),
    (6,'Redes de Computadores',80,'Redes');


DROP TABLE IF EXISTS `turma`;
CREATE TABLE `turma` (
  `idturma` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  PRIMARY KEY (`idturma`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `turma` VALUES
    (1, 'GPE100'),
    (2, 'GPE110'),
    (3, 'GPE120'),
    (4, 'GPE130');


DROP TABLE IF EXISTS `professor_turma`;
CREATE TABLE `professor_turma` (
  `idprofessor` int NOT NULL,
  `idturma` int NOT NULL,
  PRIMARY KEY (`idprofessor`,`idturma`),
  KEY `turma_id_idx` (`idturma`),
  KEY `professor_id_idx` (`idprofessor`),
  CONSTRAINT `professor_id` FOREIGN KEY (`idprofessor`) REFERENCES `professores` (`idprofessores`),
  CONSTRAINT `turma_id` FOREIGN KEY (`idturma`) REFERENCES `turma` (`idturma`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `professor_turma` VALUES
    (1, 1),
    (1, 2),
    (2, 3),
    (2, 4);


DROP TABLE IF EXISTS `questionario`;
CREATE TABLE `questionario` (
  `id_questionario` int NOT NULL AUTO_INCREMENT,
  `id_professor_turma` int DEFAULT NULL,
  `perguntas` json DEFAULT NULL,
  PRIMARY KEY (`id_questionario`),
  KEY `professor_turma_idx` (`id_professor_turma`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `questionario` VALUES
    (1,2,'[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}, {\"num\": 8, \"pergunta\": \"Pergunta 8\", \"nomeLabel\": \"pergunta-8\"}]'),
    (2,1,'[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]');


DROP TABLE IF EXISTS `respostas`;
CREATE TABLE `respostas` (
  `idrespostas` int NOT NULL AUTO_INCREMENT,
  `idaluno` int DEFAULT NULL,
  `idquestionario` int DEFAULT NULL,
  `respostas` json DEFAULT NULL,
  PRIMARY KEY (`idrespostas`),
  KEY `id_aluno_respostas_idx` (`idaluno`),
  KEY `teste_idx` (`idquestionario`),
  CONSTRAINT `id_aluno_respostas` FOREIGN KEY (`idaluno`) REFERENCES `alunos` (`idaluno`),
  CONSTRAINT `id_quest_resp` FOREIGN KEY (`idquestionario`) REFERENCES `questionario` (`id_questionario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



DROP TABLE IF EXISTS `turma_disciplina`;
CREATE TABLE `turma_disciplina` (
  `idturma` int NOT NULL,
  `iddisciplina` int NOT NULL,
  PRIMARY KEY (`idturma`,`iddisciplina`),
  KEY `turma_disciplina_turma_id` (`idturma`),
  KEY `turma_disciplina_disciplina_id` (`iddisciplina`),
  CONSTRAINT `turma_disciplina_turma_id` FOREIGN KEY (`idturma`) REFERENCES `turma` (`idturma`),
  CONSTRAINT `turma_disciplina_disciplina_id` FOREIGN KEY (`iddisciplina`) REFERENCES `disciplinas` (`id_disciplina`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `turma_disciplina` VALUES
    (1, 1),
    (1, 2),
    (2, 3),
    (2, 4),
    (3, 5),
    (4, 6);



DROP TABLE IF EXISTS `aluno_turma`;
CREATE TABLE `aluno_turma` (
  `idaluno` int NOT NULL,
  `idturma` int NOT NULL,
  PRIMARY KEY (`idaluno`,`idturma`),
  KEY `aluno_turma_idaluno_idx` (`idaluno`),
  KEY `aluno_turma_idturma_idx` (`idturma`),
  CONSTRAINT `aluno_turma_aluno_id` FOREIGN KEY (`idaluno`) REFERENCES `alunos` (`idaluno`),
  CONSTRAINT `aluno_turma_turma_id` FOREIGN KEY (`idturma`) REFERENCES `turma` (`idturma`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `aluno_turma` VALUES
    (1, 1),
    (2, 1),
    (3, 1),
    (4, 2),
    (5, 2),
    (6, 2),
    (7, 3),
    (8, 3),
    (9, 4),
    (10, 4);
