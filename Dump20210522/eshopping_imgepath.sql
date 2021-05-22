-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: eshopping
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `imgepath`
--

DROP TABLE IF EXISTS `imgepath`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imgepath` (
  `RowId` int(11) NOT NULL AUTO_INCREMENT,
  `ProductId` varchar(20) NOT NULL,
  `fieldname` varchar(40) DEFAULT NULL,
  `originalname` varchar(50) DEFAULT NULL,
  `encoding` varchar(50) DEFAULT NULL,
  `mimetype` varchar(50) DEFAULT NULL,
  `destination` varchar(50) DEFAULT NULL,
  `filename` varchar(50) DEFAULT NULL,
  `path` varchar(50) DEFAULT NULL,
  `size` varchar(50) DEFAULT NULL,
  `img_path` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`RowId`),
  KEY `fk_ProductId_in_Product_table` (`ProductId`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imgepath`
--

LOCK TABLES `imgepath` WRITE;
/*!40000 ALTER TABLE `imgepath` DISABLE KEYS */;
INSERT INTO `imgepath` VALUES (1,'prd-12','file','lap1.jpg','7bit','image/jpeg','./upload','lap1.jpg','upload\\lap1.jpg','675209',NULL),(2,'prd-14','file','lap1.jpg','7bit','image/jpeg','./upload','lap1.jpg','upload\\lap1.jpg','675209',NULL),(3,'prd-10','file','iPhone.jpg','7bit','image/jpeg','./upload','iPhone.jpg','upload\\iPhone.jpg','5861',NULL),(4,'Prd-18','file','dell_mon.jpg','7bit','image/jpeg','./upload','dell_mon.jpg','upload\\dell_mon.jpg','129019',NULL);
/*!40000 ALTER TABLE `imgepath` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-22 12:05:42
