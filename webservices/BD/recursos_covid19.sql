-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 20, 2020 at 02:38 PM
-- Server version: 5.7.21
-- PHP Version: 7.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recursos_covid19`
--

-- --------------------------------------------------------

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
CREATE TABLE IF NOT EXISTS `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categorias`
--

INSERT INTO `categorias` (`id`, `categoria`) VALUES
(1, 'Oferta televisiva'),
(2, 'Oferta virtual'),
(3, 'Redes sociales');

-- --------------------------------------------------------

--
-- Table structure for table `enlaces`
--

DROP TABLE IF EXISTS `enlaces`;
CREATE TABLE IF NOT EXISTS `enlaces` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `descriptivo` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `urlImagen` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `enlaces`
--

INSERT INTO `enlaces` (`id`, `nombre`, `descriptivo`, `url`, `urlImagen`) VALUES
(1, 'El matavirus', 'Ayuda a Pepito a matar virus', 'https://www.nacion.com/', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/objetos-enigmaticos.jpg'),
(2, 'Descubriendo el corona virus', 'Los diferentres tipos de coronavirus que existen', 'https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=en', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/caja-herramientas-docentes.png'),
(3, 'Amanda y su aventura en la caza de COVID-19', 'Los diferentres tipos de coronavirus que existen', 'https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=en', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/minibook-1cicle.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
CREATE TABLE IF NOT EXISTS `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `poblacion` int(11) NOT NULL,
  `categoria` int(11) NOT NULL,
  `tipo` int(11) NOT NULL,
  `nombre` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `poblacion`, `categoria`, `tipo`, `nombre`, `descripcion`, `link`) VALUES
(1, 2, 1, 1, 'Café Nacional SINART Canal 13', 'De Lunes a viernes', 'https://www.nacion.com/'),
(2, 2, 2, 1, 'Actualización Cursos Virtuales', 'null', 'www.idp.com'),
(3, 1, 1, 1, 'prueba 1', 'comentqrio 1', 'https://www.nacion.com/'),
(4, 1, 2, 1, 'Prueba 2', 'Comentario 2', 'https://www.nacion.com/'),
(5, 3, 1, 1, 'Prueba 3', 'Comentario 3', 'https://www.nacion.com/'),
(6, 3, 2, 1, 'Prueba 4', 'Comentario 4', 'https://www.nacion.com/');

-- --------------------------------------------------------

--
-- Table structure for table `poblaciones`
--

DROP TABLE IF EXISTS `poblaciones`;
CREATE TABLE IF NOT EXISTS `poblaciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `poblacion` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `poblaciones`
--

INSERT INTO `poblaciones` (`id`, `poblacion`) VALUES
(1, 'Estudiantes'),
(2, 'Docentes'),
(3, 'Familias');

-- --------------------------------------------------------

--
-- Table structure for table `tipos`
--

DROP TABLE IF EXISTS `tipos`;
CREATE TABLE IF NOT EXISTS `tipos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tipos`
--

INSERT INTO `tipos` (`id`, `tipo`) VALUES
(1, 'link');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
