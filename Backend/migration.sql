CREATE DATABASE IF NOT EXISTS personalise;
USE personalise;


DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` text NOT NULL,
  `email` text NOT NULL,
  `senha` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `usuarios` VALUES
    (1,'alex maxwel','alex@devteste.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),
    (2,'rafael','rafael@dev.com','$2a$10$Oj7pgmw.4HcNpBRIWptrMOHBl7b.rMpL5eugIttbCON6T8C26IR1y'),
    (3,'Pedro Nunes','pedro@aluno.com','$2a$10$8yTu9/kpQvp4cLQlzXDwNeSljVyqlrgCvXQrRe21So3kg.CpYSwiS'),
    (4,'Victor Hugo','victor@aluno.com','$2a$10$kCLwmTBoUXbd/Aax78KraOhm4KmyXUsTBLnkQD7ehBkz69HOlQR9y'),
    (5,'Henrique','henrique@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),
    (6,'Joao Gomes','boiadeiro@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),
    (7,'Ana clara','ana@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),
    (8,'Beatriz','bia@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),
    (9,'Paulo','paulo@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),
    (10,'Maximiliano','max@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),
    (11,'Joao Evangelista Nunes','joao@professor.com','$2a$10$fVmduO.IgONnQBZJhNfahee1cuHmPLSberzcgc5EzHjtcpdCctbtG'),
    (12,'marcelo','marcelo@professor.com','$2a$10$QCdYVp0VvIk7B4slE1BAh.4GRuKNXpPRHvTuQNBVlaHDFdd8cXwqS'),
    (13,'Hugo','hugo@professor.com','$2a$10$kCLwmTBoUXbd/Aax78KraOhm4KmyXUsTBLnkQD7ehBkz69HOlQR9y'),
    (14,'kin','kin@professor.com','$2a$10$O2mooZPhfGT5FlJu36441efzxuAkAmtRmCT7yp5gL9uCIBAa1t4i.');

-- Usuario para testes:
-- aluno: victor@aluno.com senha: 123456
-- professor: hugo@professor.com senha: 123456


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
    (1,1,'UC240001','Analise e Desenvolvimento de sistema'),
    (2,2,'UC240002','Analise e Desenvolvimento de sistema'),
    (3,3,'UC240003','Analise e Desenvolvimento de sistema'),
    (4,4,'UC240004','Analise e Desenvolvimento de sistema'),
    (5,5,'UC240005','Analise e Desenvolvimento de sistema'),
    (6,6,'UC240006','Analise e Desenvolvimento de sistema'),
    (7,7,'UC240007','Analise e Desenvolvimento de sistema'),
    (8,8,'UC240008','Analise e Desenvolvimento de sistema'),
    (9,9,'UC240009','Analise e Desenvolvimento de sistema'),
    (10,10,'UC2400010','Analise e Desenvolvimento de sistema');


DROP TABLE IF EXISTS `professores`;
CREATE TABLE `professores` (
  `idprofessores` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `matricula` varchar(45) NOT NULL,
  PRIMARY KEY (`idprofessores`),
  UNIQUE KEY `matricula_UNIQUE` (`matricula`),
  UNIQUE KEY `id_usuario_UNIQUE` (`id_usuario`),
  CONSTRAINT `id_usuairo_professor` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `professores` VALUES
    (1,11,'UC240011'),
    (2,12,'UC240012'),
    (3,13,'UC240013'),
    (4,14,'UC123');



DROP TABLE IF EXISTS `disciplinas`;
CREATE TABLE `disciplinas` (
  `id_disciplina` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `carga_horaria` int NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_disciplina`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `disciplinas` VALUES
    (1,'Programacao web',120,'Programacao para web com JavaScript, Html e CSS'),
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
    (1,'GPE100'),
    (2,'GPE110'),
    (3,'GPE120'),
    (4,'GPE130');



DROP TABLE IF EXISTS `turma_disciplina_professor`;
CREATE TABLE `turma_disciplina_professor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idprofessor` int NOT NULL,
  `idturma` int NOT NULL,
  `iddisciplina` int NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `turma_disciplina_prof_id_professor` FOREIGN KEY (`idprofessor`) REFERENCES `professores` (`idprofessores`),
  CONSTRAINT `turma_disciplina_prof_id_disciplina` FOREIGN KEY (`iddisciplina`) REFERENCES `disciplinas` (`id_disciplina`),
  CONSTRAINT `turma_disciplina_prof_id_turma` FOREIGN KEY (`idturma`) REFERENCES `turma` (`idturma`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `turma_disciplina_professor` VALUES
    (1, 1, 1, 1),
    (2, 1, 1, 2),
    (3, 1, 2, 1),
    (4, 1, 2, 2),
    (5, 1, 3, 1),
    (6, 1, 3, 2),
    (7, 2, 1, 3),
    (8, 2, 1, 4),
    (9, 2, 2, 3),
    (10, 2, 2, 4),
    (11, 2, 3, 3),
    (12, 2, 3, 4),
    (13, 3, 1, 5),
    (14, 3, 1, 6),
    (15, 3, 2, 5),
    (16, 3, 2, 6),
    (17, 3, 3, 5),
    (18, 3, 3, 6),
    (19, 4, 4, 1),
    (20, 4, 4, 2),
    (21, 4, 4, 3),
    (22, 4, 4, 4),
    (23, 4, 4, 5),
    (24, 4, 4, 6);



DROP TABLE IF EXISTS `questionario`;
CREATE TABLE `questionario` (
  `id_questionario` int NOT NULL AUTO_INCREMENT,
  `id_turma_disciplina_professor` int DEFAULT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `perguntas` json DEFAULT NULL,
  PRIMARY KEY (`id_questionario`),
  CONSTRAINT `id_turma_disciplina_professor` FOREIGN KEY (`id_turma_disciplina_professor`) REFERENCES `turma_disciplina_professor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `questionario` VALUES
    (1, 1, 'PRE', '[{\"num\": 1,\"pergunta\": \"Eu me sinto confortavel escrevendo codigo em mais de uma linguagem de programacao.\"},{\"num\": 2,\"pergunta\": \"Eu tenho experiencia trabalhando com sistemas de controle de versao, como o Git.\"},{\"num\": 3,\"pergunta\": \"Eu me sinto confortavel escrevendo testes unitarios para o meu codigo.\"},{\"num\": 4,\"pergunta\": \"Eu consigo implementar algoritmos basicos, como ordenacao e busca.\"},{\"num\": 5,\"pergunta\": \"Eu consigo escrever scripts para automatizar tarefas repetitivas.\"},{\"num\": 6,\"pergunta\": \"Eu estou confortavel com o uso de ambientes de desenvolvimento integrados (IDEs).\"}]'),
    (2, 1, 'POS', '[{\"num\": 1,\"pergunta\": \"Eu me sinto confortavel trabalhando com bancos de dados relacionais.\"},{\"num\": 2,\"pergunta\": \"Eu entendo e aplico conceitos de programacao funcional.\"},{\"num\": 3,\"pergunta\": \"Eu consigo usar ferramentas de depuracao para encontrar e corrigir erros no meu codigo.\"},{\"num\": 4,\"pergunta\": \"Eu estou familiarizado com o desenvolvimento de aplicacoes web.\"},{\"num\": 5,\"pergunta\": \"Eu entendo os principios de design de APIs RESTful.\"},{\"num\": 6,\"pergunta\": \"Eu consigo utilizar conteineres, como Docker, para criar ambientes de desenvolvimento isolados.\"},{\"num\": 7,\"pergunta\": \"Eu estou familiarizado com o uso de testes de integracao em meus projetos.\"},{\"num\": 8,\"pergunta\": \"Eu entendo e aplico padroes de design em meu codigo.\"},{\"num\": 9,\"pergunta\": \"Eu consigo utilizar ferramentas de CI/CD para automatizar o pipeline de desenvolvimento.\"},{\"num\": 10,\"pergunta\": \"Eu me sinto confortavel com o desenvolvimento de aplicacoes moveis.\"},{\"num\": 11,\"pergunta\": \"Eu uso frequentemente tecnicas de refatoracao para melhorar a qualidade do codigo.\"}]');



DROP TABLE IF EXISTS `respostas`;
CREATE TABLE `respostas` (
  `idrespostas` int NOT NULL AUTO_INCREMENT,
  `idaluno` int DEFAULT NULL,
  `idquestionario` int DEFAULT NULL,
  PRIMARY KEY (`idrespostas`),
  KEY `id_aluno_respostas_idx` (`idaluno`),
  KEY `teste_idx` (`idquestionario`),
  CONSTRAINT `id_aluno_respostas` FOREIGN KEY (`idaluno`) REFERENCES `alunos` (`idaluno`),
  CONSTRAINT `id_quest_resp` FOREIGN KEY (`idquestionario`) REFERENCES `questionario` (`id_questionario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `respostas` VALUES
    (1, 1, 1);



DROP TABLE IF EXISTS `respostas_questionario`;
CREATE TABLE `respostas_questionario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idrespostas` int NOT NULL,
  `num` int DEFAULT NULL,
  `resposta` int DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `idrespostas_idx` (`idrespostas`),
    CONSTRAINT `idrespostas` FOREIGN KEY (`idrespostas`) REFERENCES `respostas` (`idrespostas`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `respostas_questionario` (`idrespostas`, `num`, `resposta`) VALUES
    (1, 7, 1),(1, 7, 1),(1, 7, 1),(1, 7, 1),(1, 7, 1),(1, 7, 1),(1, 7, 1),(1, 7, 1),(1, 7, 1),(1, 7, 1),(1, 7, 1),(1, 7, 1),(1, 7, 1),(1, 7, 1),(1, 7, 1),(1, 7, 1),(1, 7, 1),(1, 7, 1),(1, 7, 1),(1, 7, 1),
    (1, 8, 1),(1, 8, 1),(1, 8, 1),(1, 8, 1),(1, 8, 1),(1, 8, 1),(1, 8, 1),(1, 8, 1),(1, 8, 1),(1, 8, 1),
    (1, 9, 1),(1, 9, 1),(1, 9, 1),(1, 9, 1),(1, 9, 1),(1, 9, 1),(1, 9, 1),(1, 9, 1),(1, 9, 1),(1, 9, 1),(1, 9, 1),(1, 9, 1),(1, 9, 1),(1, 9, 1),(1, 9, 1),(1, 9, 1),(1, 9, 1),(1, 9, 1),(1, 9, 1),(1, 9, 1),
    (1, 10, 1),(1, 10, 1),(1, 10, 1),(1, 10, 1),(1, 10, 1),(1, 10, 1),(1, 10, 1),(1, 10, 1),(1, 10, 1),(1, 10, 1),(1, 10, 1),(1, 10, 1),(1, 10, 1),(1, 10, 1),(1, 10, 1),(1, 10, 1),(1, 10, 1),(1, 10, 1),(1, 10, 1),(1, 10, 1),
    (1, 11, 1),(1, 11, 1),(1, 11, 1),(1, 11, 1),(1, 11, 1),(1, 11, 1),(1, 11, 1),(1, 11, 1),(1, 11, 1),(1, 11, 1),(1, 11, 1),(1, 11, 1),(1, 11, 1),(1, 11, 1),(1, 11, 1),
    (1, 1, 0),(1, 1, 0),(1, 1, 0),(1, 1, 0),(1, 1, 0),(1, 1, 0),(1, 1, 0),(1, 1, 0),(1, 1, 0),(1, 1, 0),
    (1, 1, 1),(1, 1, 1),(1, 1, 1),(1, 1, 1),(1, 1, 1),(1, 1, 1),(1, 1, 1),(1, 1, 1),(1, 1, 1),(1, 1, 1),
    (1, 1, 2),(1, 1, 2),(1, 1, 2),(1, 1, 2),(1, 1, 2),(1, 1, 2),(1, 1, 2),(1, 1, 2),(1, 1, 2),(1, 1, 2),(1, 1, 2),(1, 1, 2),(1, 1, 2),(1, 1, 2),(1, 1, 2),(1, 1, 2),(1, 1, 2),(1, 1, 2),(1, 1, 2),(1, 1, 2);



DROP TABLE IF EXISTS `aluno_turma`;
CREATE TABLE `aluno_turma` (
  `idaluno` int NOT NULL,
  `idturma` int NOT NULL,
  PRIMARY KEY (`idaluno`,`idturma`),
  KEY `aluno_turma_idaluno_idx` (`idaluno`),
  KEY `aluno_turma_idturma_idx` (`idturma`),
  CONSTRAINT `aluno_turma_aluno_id` FOREIGN KEY (`idaluno`) REFERENCES `alunos` (`idaluno`),
  CONSTRAINT `aluno_turma_turma_id` FOREIGN KEY (`idturma`) REFERENCES `turma` (`idturma`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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