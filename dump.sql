-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: personalise
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aluno_turma`
--

DROP TABLE IF EXISTS `aluno_turma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aluno_turma` (
  `idaluno` int NOT NULL,
  `idturma` int NOT NULL,
  PRIMARY KEY (`idaluno`,`idturma`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aluno_turma`
--

LOCK TABLES `aluno_turma` WRITE;
/*!40000 ALTER TABLE `aluno_turma` DISABLE KEYS */;
/*!40000 ALTER TABLE `aluno_turma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alunos`
--

DROP TABLE IF EXISTS `alunos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alunos` (
  `idalunos` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `matricula` varchar(45) NOT NULL,
  `curso` varchar(255) NOT NULL,
  PRIMARY KEY (`idalunos`),
  UNIQUE KEY `matricula_UNIQUE` (`matricula`),
  UNIQUE KEY `id_usuario_UNIQUE` (`id_usuario`),
  CONSTRAINT `id_usuario_aluno` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alunos`
--

LOCK TABLES `alunos` WRITE;
/*!40000 ALTER TABLE `alunos` DISABLE KEYS */;
INSERT INTO `alunos` VALUES (2,32,'a','a');
/*!40000 ALTER TABLE `alunos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `disciplinas`
--

DROP TABLE IF EXISTS `disciplinas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `disciplinas` (
  `id_disciplina` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `carga_horaria` varchar(10) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_disciplina`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disciplinas`
--

LOCK TABLES `disciplinas` WRITE;
/*!40000 ALTER TABLE `disciplinas` DISABLE KEYS */;
INSERT INTO `disciplinas` VALUES (1,'Programação web','120','Programação para web com JavaScript, Html e CSS'),(2,'Novas Tecnologias','80','Aprendizado em Python'),(3,'Engenharia de Software','80','UML'),(4,'Design de Software','80','Arquitetura de softwate com base na UML e melhores praticas'),(5,'Sistemas Operacionais','80','Sistemas'),(6,'Redes de Computadores','80','Redes');
/*!40000 ALTER TABLE `disciplinas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `professor_turma`
--

DROP TABLE IF EXISTS `professor_turma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `professor_turma` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idprofessor` int NOT NULL,
  `idturma` int NOT NULL,
  PRIMARY KEY (`id`,`idprofessor`,`idturma`),
  KEY `turma_id_idx` (`idturma`),
  KEY `professor_id_idx` (`idprofessor`),
  CONSTRAINT `professor_id` FOREIGN KEY (`idprofessor`) REFERENCES `professores` (`idprofessores`),
  CONSTRAINT `turma_id` FOREIGN KEY (`idturma`) REFERENCES `turma` (`idturma`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professor_turma`
--

LOCK TABLES `professor_turma` WRITE;
/*!40000 ALTER TABLE `professor_turma` DISABLE KEYS */;
INSERT INTO `professor_turma` VALUES (1,2,1),(5,3,1),(9,4,1),(13,5,1),(17,6,1),(2,2,2),(6,3,2),(10,4,2),(14,5,2),(18,6,2),(3,2,3),(7,3,3),(11,4,3),(15,5,3),(19,6,3),(4,2,4),(8,3,4),(12,4,4),(16,5,4),(20,6,4);
/*!40000 ALTER TABLE `professor_turma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `professores`
--

DROP TABLE IF EXISTS `professores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `professores` (
  `idprofessores` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `matricula` varchar(45) NOT NULL,
  PRIMARY KEY (`idprofessores`),
  UNIQUE KEY `matricula_UNIQUE` (`matricula`),
  UNIQUE KEY `id_usuario_UNIQUE` (`id_usuario`),
  CONSTRAINT `id_usuairo_professor` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professores`
--

LOCK TABLES `professores` WRITE;
/*!40000 ALTER TABLE `professores` DISABLE KEYS */;
INSERT INTO `professores` VALUES (1,24,'123456'),(2,26,'0987'),(3,27,'312'),(4,28,'testes'),(5,29,''),(6,30,'12342');
/*!40000 ALTER TABLE `professores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questionario`
--

DROP TABLE IF EXISTS `questionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questionario` (
  `id_questionario` int NOT NULL AUTO_INCREMENT,
  `id_professor_turma` int DEFAULT NULL,
  `perguntas` json DEFAULT NULL,
  PRIMARY KEY (`id_questionario`),
  KEY `professor_turma_idx` (`id_professor_turma`),
  CONSTRAINT `professor_turma` FOREIGN KEY (`id_professor_turma`) REFERENCES `professor_turma` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questionario`
--

LOCK TABLES `questionario` WRITE;
/*!40000 ALTER TABLE `questionario` DISABLE KEYS */;
INSERT INTO `questionario` VALUES (1,2,'[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}, {\"num\": 8, \"pergunta\": \"Pergunta 8\", \"nomeLabel\": \"pergunta-8\"}]'),(4,18,'[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]'),(5,17,'[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]');
/*!40000 ALTER TABLE `questionario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `respostas`
--

DROP TABLE IF EXISTS `respostas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respostas`
--

LOCK TABLES `respostas` WRITE;
/*!40000 ALTER TABLE `respostas` DISABLE KEYS */;
/*!40000 ALTER TABLE `respostas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turma`
--

DROP TABLE IF EXISTS `turma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `turma` (
  `idturma` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  PRIMARY KEY (`idturma`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turma`
--

LOCK TABLES `turma` WRITE;
/*!40000 ALTER TABLE `turma` DISABLE KEYS */;
INSERT INTO `turma` VALUES (1,'GPE100'),(2,'GPE110'),(3,'GPE120'),(4,'GPE130');
/*!40000 ALTER TABLE `turma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turma_disciplina`
--

DROP TABLE IF EXISTS `turma_disciplina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `turma_disciplina` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idturma` int NOT NULL,
  `iddisciplina` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_turma_idx` (`idturma`),
  KEY `id_disciplina_idx` (`iddisciplina`),
  CONSTRAINT `id_disciplina` FOREIGN KEY (`iddisciplina`) REFERENCES `disciplinas` (`id_disciplina`),
  CONSTRAINT `id_turma` FOREIGN KEY (`idturma`) REFERENCES `turma` (`idturma`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turma_disciplina`
--

LOCK TABLES `turma_disciplina` WRITE;
/*!40000 ALTER TABLE `turma_disciplina` DISABLE KEYS */;
INSERT INTO `turma_disciplina` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,1,6),(7,2,1),(8,2,2),(9,2,3),(10,2,4),(11,2,5),(12,2,6),(13,3,1),(14,3,2),(15,3,3),(16,3,4),(17,3,5),(18,3,6),(19,4,1),(20,4,2),(21,4,3),(22,4,4),(23,4,5),(24,4,6);
/*!40000 ALTER TABLE `turma_disciplina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(245) NOT NULL,
  `email` varchar(200) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `tipo_usuario` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'alex','alex@dev.com','12345',NULL),(2,'a','5','5',NULL),(3,'aa','aaadfg','$2a$10$f6IX68aNloHj91H4x6955O032y.XcqPYzfgIYwN55nkYKSvMSWJeO',NULL),(14,'aaa','aa@dev.com','$2a$10$0VSk5hVRu1Y/FI0z3B9BJ.X9RuHUz76E8x1sHC1xXgQ.Dfm99zmTi',NULL),(15,'aaaa','aaa@dev.com','$2a$10$aDyRl6wUWbtpCyDkfdCC3uP9OtGa5X1QxpT1jyvlzRJkdVFMi/w5S',NULL),(17,'asd','asdfghg','$2a$10$pnQLgwMnvNO0wIDFH9n99.UQ1eU3UF8VRfId5KSvM/gSrylqHTDse',NULL),(18,'ssss','ssss@ssss','$2a$10$or5ScGGfGCXDOWcvqF94X.iH0dcvmNSkhqCfHBIj7CCtbuUx68QHK',NULL),(19,'sssss','sssss@sssss','$2a$10$AVOJIX05O8uI0/Nu7JJKfeTahveVis84eylOVPT/ILtWFViD32OUS',NULL),(20,'f','f','$2a$10$Mv6nGBywE0WXrlxSEvnKleEys4dnPZPcLmLZgzxEOq9MOCVOaGmUe',NULL),(21,'alex maxwel','alex@devteste.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm',NULL),(22,'rafael','rafael@dev.com','$2a$10$Oj7pgmw.4HcNpBRIWptrMOHBl7b.rMpL5eugIttbCON6T8C26IR1y',NULL),(23,'Joao Evangelista','joao@prof.com','$2a$10$/T7kp.AijS1N/RAnRVL0weHMygaoRFTjpl2ZODNwu6nZ7YLA1.JsK','professor'),(24,'Joao Evangelista Nunes','joao@professor.com','$2a$10$fVmduO.IgONnQBZJhNfahee1cuHmPLSberzcgc5EzHjtcpdCctbtG','professor'),(25,'Pedro Nunes','pedro@aluno.com','$2a$10$8yTu9/kpQvp4cLQlzXDwNeSljVyqlrgCvXQrRe21So3kg.CpYSwiS','Aluno'),(26,'marcelo','marcelo@professor.com','$2a$10$QCdYVp0VvIk7B4slE1BAh.4GRuKNXpPRHvTuQNBVlaHDFdd8cXwqS','professor'),(27,'lucas','lucas@professor.com','$2a$10$3VVdK5jqt5KF6p2xBy3u4eQpRHoQDr0lZCRUgUE1qyb2Qx1QiuYQW','professor'),(28,'testes','teste@s','$2a$10$pDsAquunow987kkA94Z7fO5KCc9Nk56m92H.Xh6SKAs.c5yvyQ11S','professor'),(29,'a','a','$2a$10$aOMvlUgNfWXJjSLAV2oOuumhcWGAs9cNboUoIymbrEqjFZIc5Qy1m','professor'),(30,'beto','beto@professor.com','$2a$10$gqoJFrnsxVZWaJ2CDB9Vzu5gwJkVTTGt8AzpCVW5JC1tYyihAlbA2','professor'),(31,'a','alex@aluno.com','$2a$10$tWh00BG8zwnZIowwL89hLOAhOmidqJvEpOIrywu9bMuIbD0iTOfYi','Aluno'),(32,'a','alex2@','$2a$10$5vnvT/8IyRvwaW3U9kjUsOlMDki0EqQWlltx8XuwbVNgCb1fUrFOa','Aluno'),(33,'a','alex@','$2a$10$AGDaWbqZnswypA0zhXP3z.yYT991smCqCFTF4r1p9KrHb7GN7Je2q','Aluno');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-31 14:36:59