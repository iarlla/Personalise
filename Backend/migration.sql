CREATE DATABASE IF NOT EXISTS personalise;
USE personalise;

-- Dropping tables in reverse dependency order
DROP TABLE IF EXISTS `respostas_questionario`;
DROP TABLE IF EXISTS `respostas`;
DROP TABLE IF EXISTS `questionario`;
DROP TABLE IF EXISTS `professor_turma`;
DROP TABLE IF EXISTS `turma_disciplina`;
DROP TABLE IF EXISTS `aluno_turma`;
DROP TABLE IF EXISTS `turma`;
DROP TABLE IF EXISTS `disciplinas`;
DROP TABLE IF EXISTS `professores`;
DROP TABLE IF EXISTS `alunos`;
DROP TABLE IF EXISTS `usuarios`;

-- Creating and populating `usuarios` table
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

-- Creating and populating `alunos` table
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

-- Creating and populating `professores` table
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

-- Creating and populating `disciplinas` table
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

-- Creating and populating `turma` table
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

-- Creating and populating `professor_turma` table
CREATE TABLE `professor_turma` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idprofessor` int NOT NULL,
  `idturma` int NOT NULL,
  PRIMARY KEY (`id`,`idprofessor`,`idturma`),
  KEY `turma_id_idx` (`idturma`),
  KEY `professor_id_idx` (`idprofessor`),
  CONSTRAINT `professor_id` FOREIGN KEY (`idprofessor`) REFERENCES `professores` (`idprofessores`),
  CONSTRAINT `turma_id` FOREIGN KEY (`idturma`) REFERENCES `turma` (`idturma`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `professor_turma` VALUES
    (1,1,1),
    (2,2,2);

-- Creating and populating `aluno_turma` table
CREATE TABLE `aluno_turma` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idturma` int NOT NULL,
  `idaluno` int NOT NULL,
  PRIMARY KEY (`id`,`idturma`,`idaluno`),
  KEY `turma_idaluno_idx` (`idturma`),
  KEY `aluno_id_idx` (`idaluno`),
  CONSTRAINT `aluno_id` FOREIGN KEY (`idaluno`) REFERENCES `alunos` (`idaluno`),
  CONSTRAINT `turma_idaluno` FOREIGN KEY (`idturma`) REFERENCES `turma` (`idturma`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `aluno_turma` VALUES
    (1,1,1),
    (2,1,2),
    (3,1,3),
    (4,2,4),
    (5,2,5),
    (6,3,6);

-- Creating and populating `turma_disciplina` table
CREATE TABLE `turma_disciplina` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idturma` int NOT NULL,
  `iddisciplina` int NOT NULL,
  PRIMARY KEY (`id`,`idturma`,`iddisciplina`),
  KEY `disciplina_id_idx` (`iddisciplina`),
  KEY `turma_iddisciplina_idx` (`idturma`),
  CONSTRAINT `disciplina_id` FOREIGN KEY (`iddisciplina`) REFERENCES `disciplinas` (`id_disciplina`),
  CONSTRAINT `turma_iddisciplina` FOREIGN KEY (`idturma`) REFERENCES `turma` (`idturma`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `turma_disciplina` VALUES
    (1,1,1),
    (2,1,2),
    (3,2,3),
    (4,3,4),
    (5,3,5);

-- Creating and populating `questionario` table
CREATE TABLE `questionario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `questionario` VALUES
    (1,'Questionário de avaliação de curso'),
    (2,'Questionário de avaliação de docente'),
    (3,'Questionário de avaliação de disciplina'),
    (4,'Questionário de avaliação institucional'),
    (5,'Questionário de avaliação da biblioteca'),
    (6,'Questionário de avaliação do laboratório de informática');

-- Creating and populating `respostas` table
CREATE TABLE `respostas` (
  `idrespostas` int NOT NULL AUTO_INCREMENT,
  `resposta` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idrespostas`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `respostas` VALUES
    (1,'1'),
    (2,'2'),
    (3,'3'),
    (4,'4');

-- Creating and populating `respostas_questionario` table
CREATE TABLE `respostas_questionario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idresposta` int DEFAULT NULL,
  `id_questionario` int NOT NULL,
  PRIMARY KEY (`id`,`id_questionario`),
  KEY `resposta_id_idx` (`idresposta`),
  KEY `questionario_id_idx` (`id_questionario`),
  CONSTRAINT `questionario_id` FOREIGN KEY (`id_questionario`) REFERENCES `questionario` (`id`),
  CONSTRAINT `resposta_id` FOREIGN KEY (`idresposta`) REFERENCES `respostas` (`idrespostas`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `respostas_questionario` VALUES
    (1,1,1),
    (2,2,1),
    (3,3,2),
    (4,4,2),
    (5,NULL,3),
    (6,NULL,4),
    (7,NULL,5);
