DROP TABLE IF EXISTS `aluno_turma`;
CREATE TABLE `aluno_turma` (
  `idaluno` int NOT NULL,
  `idturma` int NOT NULL,
  PRIMARY KEY (`idaluno`,`idturma`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(245) NOT NULL,
  `email` varchar(200) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `tipo_usuario` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `usuarios` VALUES
    (1,'alex','alex@dev.com','12345',NULL),(2,'a','5','5',NULL),
    (3,'aa','aaadfg','$2a$10$f6IX68aNloHj91H4x6955O032y.XcqPYzfgIYwN55nkYKSvMSWJeO',NULL),
    (14,'aaa','aa@dev.com','$2a$10$0VSk5hVRu1Y/FI0z3B9BJ.X9RuHUz76E8x1sHC1xXgQ.Dfm99zmTi',NULL),
    (15,'aaaa','aaa@dev.com','$2a$10$aDyRl6wUWbtpCyDkfdCC3uP9OtGa5X1QxpT1jyvlzRJkdVFMi/w5S',NULL),
    (17,'asd','asdfghg','$2a$10$pnQLgwMnvNO0wIDFH9n99.UQ1eU3UF8VRfId5KSvM/gSrylqHTDse',NULL),
    (18,'ssss','ssss@ssss','$2a$10$or5ScGGfGCXDOWcvqF94X.iH0dcvmNSkhqCfHBIj7CCtbuUx68QHK',NULL),
    (19,'sssss','sssss@sssss','$2a$10$AVOJIX05O8uI0/Nu7JJKfeTahveVis84eylOVPT/ILtWFViD32OUS',NULL),
    (20,'f','f','$2a$10$Mv6nGBywE0WXrlxSEvnKleEys4dnPZPcLmLZgzxEOq9MOCVOaGmUe',NULL),
    (21,'alex maxwel','alex@devteste.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm',NULL),
    (22,'rafael','rafael@dev.com','$2a$10$Oj7pgmw.4HcNpBRIWptrMOHBl7b.rMpL5eugIttbCON6T8C26IR1y',NULL),
    (23,'Joao Evangelista','joao@prof.com','$2a$10$/T7kp.AijS1N/RAnRVL0weHMygaoRFTjpl2ZODNwu6nZ7YLA1.JsK','professor'),
    (24,'Joao Evangelista Nunes','joao@professor.com','$2a$10$fVmduO.IgONnQBZJhNfahee1cuHmPLSberzcgc5EzHjtcpdCctbtG','professor'),
    (25,'Pedro Nunes','pedro@aluno.com','$2a$10$8yTu9/kpQvp4cLQlzXDwNeSljVyqlrgCvXQrRe21So3kg.CpYSwiS','Aluno'),
    (26,'marcelo','marcelo@professor.com','$2a$10$QCdYVp0VvIk7B4slE1BAh.4GRuKNXpPRHvTuQNBVlaHDFdd8cXwqS','professor');


DROP TABLE IF EXISTS `alunos`;
CREATE TABLE `alunos` (
  `idalunos` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `matricula` varchar(45) NOT NULL,
  `curso` varchar(255) NOT NULL,
  PRIMARY KEY (`idalunos`),
  UNIQUE KEY `matricula_UNIQUE` (`matricula`),
  UNIQUE KEY `id_usuario_UNIQUE` (`id_usuario`),
  CONSTRAINT `id_usuario_aluno` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `disciplinas`;
CREATE TABLE `disciplinas` (
  `id_disciplina` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `carga_horaria` varchar(10) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_disciplina`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `disciplinas` VALUES (1,'Programação web','120','Programação para web com JavaScript, Html e CSS'),(2,'Novas Tecnologias','80','Aprendizado em Python'),(3,'Engenharia de Software','80','UML'),(4,'Design de Software','80','Arquitetura de softwate com base na UML e melhores praticas'),(5,'Sistemas Operacionais','80','Sistemas'),(6,'Redes de Computadores','80','Redes');

DROP TABLE IF EXISTS `turma`;
CREATE TABLE `turma` (
  `idturma` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  PRIMARY KEY (`idturma`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `turma` VALUES (1,'GPE100'),(2,'GPE110'),(3,'GPE120'),(4,'GPE130');

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
INSERT INTO `professores` VALUES (1,24,'123456'),(2,26,'0987');

DROP TABLE IF EXISTS `professor_turma`;
CREATE TABLE `professor_turma` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idprofessor` int NOT NULL,
  `idturma` int NOT NULL,
  PRIMARY KEY (`id`,`idprofessor`,`idturma`),
  KEY `turma_id_idx` (`idturma`),
  KEY `professor_id_idx` (`idprofessor`),
  CONSTRAINT `professor_id` FOREIGN KEY (`idprofessor`) REFERENCES `professores` (`idprofessores`),
  CONSTRAINT `turma_id` FOREIGN KEY (`idturma`) REFERENCES `turma` (`idturma`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `professor_turma` VALUES (1,2,1),(2,2,2),(3,2,3),(4,2,4);

ALTER TABLE `professor_turma`
ADD UNIQUE KEY `professor_turma_uk` (`idprofessor`, `idturma`);

DROP TABLE IF EXISTS `questionario`;
CREATE TABLE `questionario` (
  `id_questionario` int NOT NULL AUTO_INCREMENT,
  `id_professor_turma` int DEFAULT NULL,
  `perguntas` json DEFAULT NULL,
  PRIMARY KEY (`id_questionario`),
  KEY `professor_turma_idx` (`id_professor_turma`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `questionario` VALUES (1,2,'[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}, {\"num\": 8, \"pergunta\": \"Pergunta 8\", \"nomeLabel\": \"pergunta-8\"}]'),(2,1,'[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]');


DROP TABLE IF EXISTS `respostas`;
CREATE TABLE `respostas` (
  `idrespostas` int NOT NULL AUTO_INCREMENT,
  `idaluno` int DEFAULT NULL,
  `idquestionario` int DEFAULT NULL,
  `respostas` json DEFAULT NULL,
  PRIMARY KEY (`idrespostas`),
  KEY `id_aluno_respostas_idx` (`idaluno`),
  KEY `teste_idx` (`idquestionario`),
  CONSTRAINT `id_aluno_respostas` FOREIGN KEY (`idaluno`) REFERENCES `alunos` (`idalunos`),
  CONSTRAINT `id_quest_resp` FOREIGN KEY (`idquestionario`) REFERENCES `questionario` (`id_questionario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `turma_disciplina`;
CREATE TABLE `turma_disciplina` (
  `idturma` int NOT NULL,
  `iddisciplina` int NOT NULL,
  PRIMARY KEY (`idturma`,`iddisciplina`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



