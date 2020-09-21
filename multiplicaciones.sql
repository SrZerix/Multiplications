-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.6-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para multiplicaciones
CREATE DATABASE IF NOT EXISTS `multiplicaciones` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci */;
USE `multiplicaciones`;

-- Volcando estructura para tabla multiplicaciones.respuesta
CREATE TABLE IF NOT EXISTS `respuesta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL DEFAULT 0,
  `tabla` int(11) NOT NULL DEFAULT 0,
  `nota` int(11) NOT NULL DEFAULT 0,
  `aciertos` int(11) NOT NULL DEFAULT 0,
  `fallos` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Volcando datos para la tabla multiplicaciones.respuesta: ~22 rows (aproximadamente)
DELETE FROM `respuesta`;
/*!40000 ALTER TABLE `respuesta` DISABLE KEYS */;
INSERT INTO `respuesta` (`id`, `id_user`, `tabla`, `nota`, `aciertos`, `fallos`) VALUES
	(12, 3, 1, 7, 8, 3),
	(13, 3, 1, 9, 10, 1),
	(14, 3, 2, 9, 10, 1),
	(15, 3, 3, 8, 9, 2),
	(16, 3, 3, 9, 10, 1),
	(17, 3, 4, 8, 9, 2),
	(18, 3, 4, 8, 9, 2),
	(19, 3, 4, 9, 10, 1),
	(22, 2, 1, 10, 11, 0),
	(23, 2, 2, 10, 11, 0),
	(26, 2, 3, 10, 11, 0),
	(27, 5, 1, 9, 10, 1),
	(28, 3, 5, 8, 9, 2),
	(29, 3, 5, 10, 11, 0),
	(30, 11, 1, 10, 11, 0),
	(31, 7, 1, -990, 9, 1000),
	(32, 6, 1, 10, 11, 0),
	(33, 6, 2, 9, 10, 1),
	(34, 3, 6, 7, 8, 3),
	(35, 3, 6, 8, 9, 2),
	(36, 3, 6, 9, 10, 1),
	(37, 4, 1, 10, 11, 0),
	(38, 5, 1, -990, 6, 1000);
/*!40000 ALTER TABLE `respuesta` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
