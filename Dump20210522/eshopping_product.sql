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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `RowId` int(11) NOT NULL AUTO_INCREMENT,
  `ProductId` varchar(20) NOT NULL,
  `ProducName` varchar(100) NOT NULL,
  `ProductPrice` decimal(10,2) NOT NULL,
  `ProductDescription` varchar(100) NOT NULL,
  `CategoryId` varchar(20) NOT NULL,
  `SubCategoryId` varchar(20) NOT NULL,
  `ManufacturerId` varchar(20) NOT NULL,
  `VendorId` varchar(20) NOT NULL,
  PRIMARY KEY (`ProductId`),
  UNIQUE KEY `RowId` (`RowId`),
  KEY `fk_CategoryId_in_Category_table` (`CategoryId`),
  KEY `fk_SubCategoryId_in_subcategories_table` (`SubCategoryId`),
  KEY `fk_ManufacturerId_in_manufacturer_table` (`ManufacturerId`),
  KEY `fk_VendorId_in_vendor_table` (`VendorId`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (9,'Prd-18','Monitor',40000.00,'Size 24 intch','cat-10','subcat-02','man-01','man-02'),(8,'prd-10','iPhone ',80000.00,'White colour','cat-01','subcat-01','man-01','ven-01'),(6,'prd-12','Lenovo Yoga 7i',600000.00,'Laptop With 16GB Ram','cat-01','sub-01','man-01','ven-01'),(7,'prd-14','Dell XSP',120000.00,'RAM 8GB .Hard Disk 500GB.Processor Core i5.','cat-01','subcat-01','man-01','ven-01');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-22 12:05:34
