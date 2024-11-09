-- MySQL dump 10.13  Distrib 8.0.40, for Linux (x86_64)
--
-- Host: localhost    Database: personalise
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `disciplinas`
--

DROP TABLE IF EXISTS `disciplinas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `disciplinas` (
  `id_disciplina` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `carga_horaria` int NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_disciplina`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disciplinas`
--

LOCK TABLES `disciplinas` WRITE;
/*!40000 ALTER TABLE `disciplinas` DISABLE KEYS */;
INSERT INTO `disciplinas` VALUES (1,'Programacao web',120,'Programacao para web com JavaScript, Html e CSS'),(2,'Novas Tecnologias',80,'Aprendizado em Python'),(3,'Engenharia de Software',80,'UML'),(4,'Design de Software',80,'Arquitetura de softwate com base na UML e melhores praticas'),(5,'Sistemas Operacionais',80,'Sistemas'),(6,'Redes de Computadores',80,'Redes'),(7,'qwdqw',1213,'dqwdqwd'),(8,'dwdqdqd',12323,'qwdqwdqdqwd'),(9,'efrgfvrew',12,'1dfwe'),(10,'Qualidade de Software e Governança',80,'Disciplina sobre qualidade de software e governança de tecnologia da informação'),(11,'Qualidade de Software e Governança',80,'Disciplina sobre qualidade de software e governança de tecnologia da informação');
/*!40000 ALTER TABLE `disciplinas` ENABLE KEYS */;
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
INSERT INTO `professores` VALUES (1,15,'UC240011'),(2,12,'UC240012'),(3,13,'UC240013'),(4,14,'UC123'),(6,16,'04080499');
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
  `id_turma_disciplina_professor` int DEFAULT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `perguntas` json DEFAULT NULL,
  `codigo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_questionario`),
  KEY `id_turma_disciplina_professor` (`id_turma_disciplina_professor`),
  CONSTRAINT `id_turma_disciplina_professor` FOREIGN KEY (`id_turma_disciplina_professor`) REFERENCES `turma_disciplina_professor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questionario`
--

LOCK TABLES `questionario` WRITE;
/*!40000 ALTER TABLE `questionario` DISABLE KEYS */;
INSERT INTO `questionario` VALUES (1,3,'PRE','[{\"num\": 1, \"pergunta\": \"Eu me sinto confortavel escrevendo codigo em mais de uma linguagem de programacao.\"}, {\"num\": 2, \"pergunta\": \"Eu tenho experiencia trabalhando com sistemas de controle de versao, como o Git.\"}, {\"num\": 3, \"pergunta\": \"Eu me sinto confortavel escrevendo testes unitarios para o meu codigo.\"}, {\"num\": 4, \"pergunta\": \"Eu consigo implementar algoritmos basicos, como ordenacao e busca.\"}, {\"num\": 5, \"pergunta\": \"Eu consigo escrever scripts para automatizar tarefas repetitivas.\"}, {\"num\": 6, \"pergunta\": \"Eu estou confortavel com o uso de ambientes de desenvolvimento integrados (IDEs).\"}]',NULL),(2,3,'POS','[{\"num\": 1, \"pergunta\": \"Eu me sinto confortavel trabalhando com bancos de dados relacionais.\"}, {\"num\": 2, \"pergunta\": \"Eu entendo e aplico conceitos de programacao funcional.\"}, {\"num\": 3, \"pergunta\": \"Eu consigo usar ferramentas de depuracao para encontrar e corrigir erros no meu codigo.\"}, {\"num\": 4, \"pergunta\": \"Eu estou familiarizado com o desenvolvimento de aplicacoes web.\"}, {\"num\": 5, \"pergunta\": \"Eu entendo os principios de design de APIs RESTful.\"}, {\"num\": 6, \"pergunta\": \"Eu consigo utilizar conteineres, como Docker, para criar ambientes de desenvolvimento isolados.\"}, {\"num\": 7, \"pergunta\": \"Eu estou familiarizado com o uso de testes de integracao em meus projetos.\"}, {\"num\": 8, \"pergunta\": \"Eu entendo e aplico padroes de design em meu codigo.\"}, {\"num\": 9, \"pergunta\": \"Eu consigo utilizar ferramentas de CI/CD para automatizar o pipeline de desenvolvimento.\"}, {\"num\": 10, \"pergunta\": \"Eu me sinto confortavel com o desenvolvimento de aplicacoes moveis.\"}, {\"num\": 11, \"pergunta\": \"Eu uso frequentemente tecnicas de refatoracao para melhorar a qualidade do codigo.\"}]',NULL),(3,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(4,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(5,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(6,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(7,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(8,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(9,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(10,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(11,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(12,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(13,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(14,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(15,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(16,NULL,'POS','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(17,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(18,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(19,NULL,'POS','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(21,NULL,'POS','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(22,NULL,'POS','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]',NULL),(23,NULL,'POS','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]','Enzh5yiqvM'),(24,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]','ns3RyncHnm'),(25,19,'POS','[{\"num\": 1, \"pergunta\": \"OLA\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"MUNDO\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]','VUqSjvXKCP'),(26,19,'PRE','[{\"num\": 1, \"pergunta\": \"asdqwwdqd\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"qwdqwdqwdqw\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"cqwecqweceq\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]','yY9jeMxeka'),(27,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]','h38ADqnVC66pDAwjdURG25zit36PvwD04eDIPOxpM5wZpsvaNehkDhTBmzxh9sn6w17kGEr9htp3VqhoBTfsxQcjSHCySbPqQJdo'),(28,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]','2kpEsvtVQit7rda6HBwFqkqGeZ6kPjOKSZA2PRFKsfRJX4O1651l7dve835TPgcW0RRtVy5edD8OG8mfEgTnU5iek6Zk5sunSJDn'),(29,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]','s7M1YXC4Lo3v0pxOgTZiRbWxBuG0F4J4hV8n70u0ddlInr2BigZ3XotdfakfaTkNJ2aJfv1ExVF0eaRCLsiwXA9JuE5B0kgn1t71'),(30,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]','AHgLS6FcYAMnP4qgAhGSReV25uuAszaueL9oeBDGbY3NN7xKnrEcNVuZ2qGzQsqttnKBO2aCFrmPdXZq298vbl2PAN4GW7xYXVdv'),(31,NULL,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]','F1fGpmKo9nok92RIaultpqTtTRMAU4P82qne8PjmbGG3wUxOrG52BXbroe237PUuPdr46RqFygKzW2Ad3GnV1iG1RtzY1BUAQCDs'),(32,17,'PRE','[{\"num\": 1, \"pergunta\": \"Pergunta 1\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Pergunta 2\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Pergunta 3\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"Pergunta 4\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Pergunta 5\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Pergunta 6\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Pergunta 7\", \"nomeLabel\": \"pergunta-7\"}]','5manfZPqfJoAUpmaLa49sKLlJjIeOs4X8uGOOcHKQ92teC0vJYXMkXVh435kwCKLmg4LY04XBhY2P7iDSBaOeY2Pbbg4wf24le5Y'),(33,25,'PRE','[{\"num\": 1, \"pergunta\": \"Realizei a atividade de pré-aula, definida no Plano de Ensino e no AVA\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Já domino o assunto da aula\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Estou com alto interesse no assunto da aula\", \"nomeLabel\": \"pergunta-3\"}]','RUlOn4IMquA60kUYOLt9N89vS4V4v2JSEm8zSe44xiqMp7p8HiJRrii9Z8frX428wCcoJ2E09SKmcXJoDLrX3aqZtc6p00KgSUlj'),(34,25,'POS','[{\"num\": 1, \"pergunta\": \"Após a aula o meu nível de interesse no assunto está elevado\", \"nomeLabel\": \"pergunta-1\"}, {\"num\": 2, \"pergunta\": \"Tive oportunidade de participar da aula\", \"nomeLabel\": \"pergunta-2\"}, {\"num\": 3, \"pergunta\": \"Durante a aula tive um bom nível de participação\", \"nomeLabel\": \"pergunta-3\"}, {\"num\": 4, \"pergunta\": \"A metodologia da aula foi atrativa\", \"nomeLabel\": \"pergunta-4\"}, {\"num\": 5, \"pergunta\": \"Minhas dúvidas foram respondidas pelo professor\", \"nomeLabel\": \"pergunta-5\"}, {\"num\": 6, \"pergunta\": \"Senti-me engajado no aprendizado durante a aula\", \"nomeLabel\": \"pergunta-6\"}, {\"num\": 7, \"pergunta\": \"Na minha percepção, tive um bom aproveitamento no aprendizado do assunto da aula\", \"nomeLabel\": \"pergunta-7\"}]','zAH9V9nBKq4CSGQJPm27NMFHJidFeqKgm8Z3PEi1enIJHP7K2y3blVlRF0Ik6GSx6YyikW9brjDMyZZnIoTTLKql7KmmZMXnOG9w');
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
  `idquestionario` int DEFAULT NULL,
  PRIMARY KEY (`idrespostas`),
  KEY `teste_idx` (`idquestionario`),
  CONSTRAINT `id_quest_resp` FOREIGN KEY (`idquestionario`) REFERENCES `questionario` (`id_questionario`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respostas`
--

LOCK TABLES `respostas` WRITE;
/*!40000 ALTER TABLE `respostas` DISABLE KEYS */;
INSERT INTO `respostas` VALUES (1,1),(5,23),(6,23),(7,25),(8,25),(9,25),(10,26),(11,29),(12,32),(13,32),(14,32),(15,33),(16,33),(17,33),(18,33),(19,33),(20,33),(21,33),(22,33),(23,33),(24,33),(25,33),(26,33),(27,33),(28,33),(29,33),(30,33),(31,33),(32,33),(33,33),(34,33),(35,33),(36,33),(37,33),(38,33),(39,33),(40,33),(41,33),(42,33);
/*!40000 ALTER TABLE `respostas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `respostas_questionario`
--

DROP TABLE IF EXISTS `respostas_questionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `respostas_questionario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idrespostas` int NOT NULL,
  `num` int DEFAULT NULL,
  `resposta` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idrespostas_idx` (`idrespostas`),
  CONSTRAINT `idrespostas` FOREIGN KEY (`idrespostas`) REFERENCES `respostas` (`idrespostas`)
) ENGINE=InnoDB AUTO_INCREMENT=384 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respostas_questionario`
--

LOCK TABLES `respostas_questionario` WRITE;
/*!40000 ALTER TABLE `respostas_questionario` DISABLE KEYS */;
INSERT INTO `respostas_questionario` VALUES (126,1,7,1),(127,1,7,1),(128,1,7,1),(129,1,7,1),(130,1,7,1),(131,1,7,1),(132,1,7,1),(133,1,7,1),(134,1,7,1),(135,1,7,1),(136,1,7,1),(137,1,7,1),(138,1,7,1),(139,1,7,1),(140,1,7,1),(141,1,7,1),(142,1,7,1),(143,1,7,1),(144,1,7,1),(145,1,7,1),(146,1,8,1),(147,1,8,1),(148,1,8,1),(149,1,8,1),(150,1,8,1),(151,1,8,1),(152,1,8,1),(153,1,8,1),(154,1,8,1),(155,1,8,1),(156,1,9,1),(157,1,9,1),(158,1,9,1),(159,1,9,1),(160,1,9,1),(161,1,9,1),(162,1,9,1),(163,1,9,1),(164,1,9,1),(165,1,9,1),(166,1,9,1),(167,1,9,1),(168,1,9,1),(169,1,9,1),(170,1,9,1),(171,1,9,1),(172,1,9,1),(173,1,9,1),(174,1,9,1),(175,1,9,1),(176,1,10,1),(177,1,10,1),(178,1,10,1),(179,1,10,1),(180,1,10,1),(181,1,10,1),(182,1,10,1),(183,1,10,1),(184,1,10,1),(185,1,10,1),(186,1,10,1),(187,1,10,1),(188,1,10,1),(189,1,10,1),(190,1,10,1),(191,1,10,1),(192,1,10,1),(193,1,10,1),(194,1,10,1),(195,1,10,1),(196,1,11,1),(197,1,11,1),(198,1,11,1),(199,1,11,1),(200,1,11,1),(201,1,11,1),(202,1,11,1),(203,1,11,1),(204,1,11,1),(205,1,11,1),(206,1,11,1),(207,1,11,1),(208,1,11,1),(209,1,11,1),(210,1,11,1),(251,6,1,1),(252,6,2,2),(253,6,6,0),(254,6,3,2),(255,6,7,1),(256,6,4,2),(257,6,5,0),(258,8,1,2),(259,8,2,1),(260,8,3,0),(261,8,6,2),(262,8,7,1),(263,8,5,1),(264,8,4,0),(265,9,1,0),(266,9,6,1),(267,9,4,1),(268,9,5,0),(269,9,7,2),(270,9,3,2),(271,9,2,1),(272,10,1,0),(273,10,2,1),(274,10,3,2),(275,10,4,1),(276,10,5,0),(277,10,6,0),(278,10,7,1),(279,12,1,1),(280,12,6,0),(281,12,4,0),(282,12,2,0),(283,12,5,0),(284,12,3,2),(285,12,7,1),(286,13,2,0),(287,13,1,1),(288,13,3,2),(289,13,4,0),(290,13,7,1),(291,13,6,0),(292,13,5,0),(293,14,2,0),(294,14,7,1),(295,14,3,2),(296,14,4,0),(297,14,5,0),(298,14,1,1),(299,14,6,0),(300,15,1,0),(301,15,2,2),(302,15,3,1),(303,16,2,2),(304,16,3,0),(305,16,1,0),(306,17,3,1),(307,17,2,1),(308,17,1,0),(309,18,1,0),(310,18,2,1),(311,18,3,0),(312,19,1,1),(313,19,3,1),(314,19,2,1),(315,20,1,0),(316,20,2,0),(317,20,3,0),(318,21,1,2),(319,21,2,2),(320,21,3,2),(321,22,1,0),(322,22,2,1),(323,22,3,0),(324,23,1,0),(325,23,2,1),(326,23,3,2),(327,24,1,1),(328,24,2,1),(329,24,3,0),(330,25,1,2),(331,25,2,1),(332,25,3,0),(333,26,1,0),(334,26,2,2),(335,26,3,1),(336,27,1,0),(337,27,2,0),(338,27,3,2),(339,28,1,0),(340,28,2,1),(341,28,3,1),(342,29,1,1),(343,29,2,1),(344,29,3,2),(345,30,1,0),(346,30,2,1),(347,30,3,2),(348,31,1,2),(349,31,2,1),(350,31,3,1),(351,32,1,2),(352,32,2,2),(353,32,3,0),(354,33,2,2),(355,33,1,0),(356,33,3,0),(357,34,3,2),(358,34,2,2),(359,34,1,2),(360,35,2,1),(361,35,1,0),(362,35,3,2),(363,36,1,2),(364,36,2,2),(365,36,3,1),(366,37,1,0),(367,37,2,1),(368,37,3,1),(369,38,1,0),(370,38,3,1),(371,38,2,1),(372,39,2,2),(373,39,3,1),(374,39,1,0),(375,40,1,0),(376,40,2,2),(377,40,3,1),(378,41,1,0),(379,41,2,0),(380,41,3,0),(381,42,2,1),(382,42,1,0),(383,42,3,1);
/*!40000 ALTER TABLE `respostas_questionario` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turma`
--

LOCK TABLES `turma` WRITE;
/*!40000 ALTER TABLE `turma` DISABLE KEYS */;
INSERT INTO `turma` VALUES (1,'GPE100'),(2,'GPE110'),(3,'GPE120'),(4,'GPE130'),(5,'GPE01N0500'),(6,'GPE01N0480'),(7,'GPE01N0499');
/*!40000 ALTER TABLE `turma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turma_disciplina_professor`
--

DROP TABLE IF EXISTS `turma_disciplina_professor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `turma_disciplina_professor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idprofessor` int NOT NULL,
  `idturma` int NOT NULL,
  `iddisciplina` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `turma_disciplina_prof_id_professor` (`idprofessor`),
  KEY `turma_disciplina_prof_id_disciplina` (`iddisciplina`),
  KEY `turma_disciplina_prof_id_turma` (`idturma`),
  CONSTRAINT `turma_disciplina_prof_id_disciplina` FOREIGN KEY (`iddisciplina`) REFERENCES `disciplinas` (`id_disciplina`),
  CONSTRAINT `turma_disciplina_prof_id_professor` FOREIGN KEY (`idprofessor`) REFERENCES `professores` (`idprofessores`),
  CONSTRAINT `turma_disciplina_prof_id_turma` FOREIGN KEY (`idturma`) REFERENCES `turma` (`idturma`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turma_disciplina_professor`
--

LOCK TABLES `turma_disciplina_professor` WRITE;
/*!40000 ALTER TABLE `turma_disciplina_professor` DISABLE KEYS */;
INSERT INTO `turma_disciplina_professor` VALUES (1,1,1,1),(2,1,1,2),(3,1,2,1),(4,1,2,2),(5,1,3,1),(6,1,3,2),(7,1,4,1),(8,1,4,2),(9,2,1,3),(10,2,1,4),(11,2,2,3),(12,2,2,4),(13,2,3,3),(14,2,3,4),(15,2,4,3),(16,2,4,4),(17,3,1,5),(18,4,1,6),(19,3,2,5),(20,4,2,6),(21,3,3,5),(22,4,3,6),(23,3,4,5),(24,4,4,6),(25,6,5,10),(26,6,6,11),(27,6,7,11);
/*!40000 ALTER TABLE `turma_disciplina_professor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` text NOT NULL,
  `email` text NOT NULL,
  `senha` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'alex maxwel','alex@devteste.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),(2,'rafael','rafael@dev.com','$2a$10$Oj7pgmw.4HcNpBRIWptrMOHBl7b.rMpL5eugIttbCON6T8C26IR1y'),(3,'Pedro Nunes','pedro@aluno.com','$2a$10$8yTu9/kpQvp4cLQlzXDwNeSljVyqlrgCvXQrRe21So3kg.CpYSwiS'),(4,'Victor Hugo','victor@aluno.com','$2a$10$kCLwmTBoUXbd/Aax78KraOhm4KmyXUsTBLnkQD7ehBkz69HOlQR9y'),(5,'Henrique','henrique@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),(6,'Joao Gomes','boiadeiro@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),(7,'Ana clara','ana@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),(8,'Beatriz','bia@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),(9,'Paulo','paulo@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),(10,'Maximiliano','max@aluno.com','$2a$10$765sn65XuKYX85Fuf5mDeu.OFsExjzJWZMQURe/U4FtH36w83IjOm'),(11,'Joao Evangelista Nunes','joao@professor.com','$2a$10$fVmduO.IgONnQBZJhNfahee1cuHmPLSberzcgc5EzHjtcpdCctbtG'),(12,'marcelo','marcelo@professor.com','$2a$10$QCdYVp0VvIk7B4slE1BAh.4GRuKNXpPRHvTuQNBVlaHDFdd8cXwqS'),(13,'Hugo','hugo@professor.com','$2a$10$XJ/mpNrK2LK7KTRkjidrsuiKEvOPRB.fsMaTiz5ubxrhxiq3HyTVq'),(14,'kin','kin@professor.com','$2a$10$O2mooZPhfGT5FlJu36441efzxuAkAmtRmCT7yp5gL9uCIBAa1t4i.'),(15,'joao','joao@gmail.com','123'),(16,'Andre Gustavo Bastos Lima','abastos@p.ucb.br','$2a$10$XRk5z5V3Qmp9MCLVBr9.GeXSlnobjzPWSoBmLcCkYC4y5cAmoHtg2');
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

-- Dump completed on 2024-10-24  2:42:05
