-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 31-03-2020 a las 17:48:43
-- Versión del servidor: 5.7.21
-- Versión de PHP: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recursos_covid19`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

DROP TABLE IF EXISTS `categorias`;
CREATE TABLE IF NOT EXISTS `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `categoria`) VALUES
(1, 'Oferta televisiva'),
(2, 'Oferta virtual'),
(3, 'Redes sociales'),
(4, 'Mep informa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enlaces`
--

DROP TABLE IF EXISTS `enlaces`;
CREATE TABLE IF NOT EXISTS `enlaces` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `descriptivo` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `urlImagen` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `enlaces`
--

INSERT INTO `enlaces` (`id`, `nombre`, `descriptivo`, `url`, `urlImagen`) VALUES
(1, 'El matavirus', 'Ayuda a Pepito a matar virus', 'www.nacion.com', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/objetos-enigmaticos.jpg'),
(2, 'Descubriendo el corona virus', 'Los diferentres tipos de coronavirus que existen', 'https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=en', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/caja-herramientas-docentes.png'),
(3, 'Amanda y su aventura en la caza de COVID-19', 'Los diferentres tipos de coronavirus que existen', 'https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=en', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/minibook-1cicle.jpg'),
(4, 'sdfasdf', 'asdf', 'asdfasd', 'https://ichef.bbci.co.uk/news/410/cpsprodpb/1723C/production/_111108749_gettyimages-1209849950.jpg'),
(5, 'Otro recurso', 'Recurso de prueba', 'www.nacion.com', 'https://ichef.bbci.co.uk/news/410/cpsprodpb/1723C/production/_111108749_gettyimages-1209849950.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu`
--

DROP TABLE IF EXISTS `menu`;
CREATE TABLE IF NOT EXISTS `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_poblacion` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `id_tipo` int(11) NOT NULL,
  `nombre` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `borrado` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `menu`
--

INSERT INTO `menu` (`id`, `id_poblacion`, `id_categoria`, `id_tipo`, `nombre`, `descripcion`, `link`, `borrado`) VALUES
(21, 2, 2, 1, '- Aula Virtual (guías de trabajo autónomo)', '', 'https://aulavirtualabierta.mep.go.cr/curso/', 0),
(12, 2, 1, 1, '- Café nacional SINART Trece Costa Rica Televisión  ', 'Horario 8:10 a.m. a 8:45  a.m. / Lunes a Viernes. ', 'http://costaricamedios.cr/cafenacional', 0),
(13, 2, 1, 1, '- Aprendo en casa, Trece Costa Rica Televisión ', '• L-M-V 10-11 a.m. Videoconferencias    \r\n• L-M-V 11-11:30 a.m. Estrategias Integrales Aprendo en Casa (Repetición Sección de Café Nacional)\r\n• K-J 10 a.m. -12 p.m. Érase una Vez', ' http://costaricamedios.cr/en-vivo/', 0),
(14, 2, 2, 1, '- Actualización de cursos virtuales   ', '', 'http://www.idp.mep.go.cr/', 0),
(15, 1, 1, 1, '- Aprendo en casa, Trece Costa Rica Televisión', 'Horario 3:00 p.m. a 5:00  p.m. / Lunes a Viernes. A partir del miércoles 25 de marzo ', 'http://costaricamedios.cr/en-vivo/', 0),
(17, 3, 1, 1, '- Programa Café Nacional, Trece Costa Rica Televisión', 'Horario 8:10 a.m. a 8:45  a.m. / Lunes a Viernes. ', 'http://costaricamedios.cr/cafenacional', 0),
(19, 3, 4, 1, '- Lineamientos, documentos y noticias MEP', '', 'http://www.mep.go.cr/coronavirus', 0),
(22, 3, 1, 1, '- Aprendo en casa, Trece Costa Rica Televisión', 'Horario 3:00 p.m. a 5:00  p.m. / Lunes a Viernes. A partir del miércoles 25 de marzo', 'http://costaricamedios.cr/en-vivo/', 0),
(23, 3, 4, 1, '- Plan virtual de fomento a la lectura', '', 'https://es-la.facebook.com/VidaEstudiantil.MEP/', 0),
(11, 1, 1, 1, '- Aprendo en casa, Trece Costa Rica Televisión', 'Érase una vez, K y J de 10:00 a.m. a 12:00 md', 'http://costaricamedios.cr/en-vivo/', 0),
(25, 1, 2, 1, '- Aula Virtual (guías de trabajo autónomo)', '', 'https://aulavirtualabierta.mep.go.cr/curso/', 0),
(26, 3, 2, 1, '- Aula Virtual (guías de trabajo autónomo y material para familias)', '', 'https://aulavirtualabierta.mep.go.cr/area/familias/', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menuold`
--

DROP TABLE IF EXISTS `menuold`;
CREATE TABLE IF NOT EXISTS `menuold` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_poblacion` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `id_tipo` int(11) NOT NULL,
  `nombre` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `borrado` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `menuold`
--

INSERT INTO `menuold` (`id`, `id_poblacion`, `id_categoria`, `id_tipo`, `nombre`, `descripcion`, `link`, `borrado`) VALUES
(1, 2, 1, 1, 'Café Nacional SINART Canal 13', '8:00 a 10:00 am.  Lunes a viernes', 'www.nacion.com', 0),
(2, 2, 2, 1, 'Actualización Cursos Virtuales', 'null', 'www.idp.com', 0),
(3, 1, 2, 1, 'Plan virtual promocional de la lectura', 'null', 'www.idp.com', 0),
(4, 3, 1, 1, 'Programa Café Nacional Canal 13', '8:00 a 10:00 am.  Lunes a viernes', 'www.idp.com', 0),
(5, 2, 1, 1, 'Caja de Herramientas Canal 13', '3:00 a 5:00 pm.  Lunes-miércoles-viernes', 'www.nacion.com', 0),
(6, 2, 2, 1, 'Aula Virtual guía de trabajo', 'null', 'www.idp.com', 0),
(7, 2, 4, 1, 'Lineamientos, documentos y noticias Mep', 'null', 'www.idp.com', 0),
(8, 1, 1, 1, 'Primaria Programa para estudiantes', '11:00 am a 10:00 md.  Lunes a viernes', 'www.nacion.com', 0),
(9, 1, 1, 1, 'Érase una vez', '3:00 a 5:00 pm.  Lunes a viernes', 'www.idp.com', 0),
(10, 3, 1, 1, 'Érase una vez', '3:00 a 5:00 pm.  Lunes a viernes', 'www.idp.com', 0),
(11, 1, 2, 1, 'Plataforma abierta CONED', 'null', 'www.idp.com', 0),
(33, 1, 2, 1, 'Curso de prueba', '', 'www.nacion.com', 1),
(35, 1, 3, 1, 'Prueba de redes', '', 'www.pepito2.com', 1),
(34, 2, 2, 1, 'Prueba editada', '8:00 am a 4:00 pm', 'www.diarioextra.com', 0),
(32, 1, 1, 1, 'OPR', 'https://www.mep.go.cr/educatico/orienta2', '8:00 am a 10 am', 0),
(31, 2, 2, 1, 'Prueba recurso menú', 'https://www.mep.go.cr/educatico/orienta2', '8:00 am a 10 am', 0),
(36, 3, 4, 1, 'Mep informa de ejemplo', '', 'www.nacion.com', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `poblaciones`
--

DROP TABLE IF EXISTS `poblaciones`;
CREATE TABLE IF NOT EXISTS `poblaciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `poblacion` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `poblaciones`
--

INSERT INTO `poblaciones` (`id`, `poblacion`) VALUES
(1, 'Estudiantes'),
(2, 'Docentes'),
(3, 'Familias');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos`
--

DROP TABLE IF EXISTS `tipos`;
CREATE TABLE IF NOT EXISTS `tipos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tipos`
--

INSERT INTO `tipos` (`id`, `tipo`) VALUES
(1, 'link');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador único para el usuario',
  `usuario` varchar(30) NOT NULL COMMENT 'correo electrónico',
  `clave` varchar(130) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido1` varchar(128) NOT NULL,
  `apellido2` varchar(128) NOT NULL,
  `departamento` varchar(255) DEFAULT NULL,
  `ultimoAcceso` datetime DEFAULT NULL,
  `token` varchar(256) NOT NULL,
  `token_password` varchar(100) DEFAULT NULL,
  `password_request` int(11) DEFAULT '0',
  `idTipoUsuario` int(128) NOT NULL,
  `activo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `clave`, `nombre`, `apellido1`, `apellido2`, `departamento`, `ultimoAcceso`, `token`, `token_password`, `password_request`, `idTipoUsuario`, `activo`) VALUES
(106, 'luis@correo.de', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Luis', 'Chacón', 'Campos', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 3, 1),
(107, 'oscar@correo.de', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Oscar', 'Perez', 'Ramirez', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 2, 1),
(108, 'paty@correo.de', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Patricia', 'Hernandez', 'Conejo', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 1, 1),
(109, 'francisco@gespro.cr', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Francisco', 'Marenco', 'Urbina', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuariosold`
--

DROP TABLE IF EXISTS `usuariosold`;
CREATE TABLE IF NOT EXISTS `usuariosold` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador único para el usuario',
  `usuario` varchar(30) NOT NULL COMMENT 'correo electrónico',
  `clave` varchar(130) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido1` varchar(128) NOT NULL,
  `apellido2` varchar(128) NOT NULL,
  `departamento` varchar(255) DEFAULT NULL,
  `ultimoAcceso` datetime DEFAULT NULL,
  `token` varchar(256) NOT NULL,
  `token_password` varchar(100) DEFAULT NULL,
  `password_request` int(11) DEFAULT '0',
  `tipoUsuario` int(11) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuariosold`
--

INSERT INTO `usuariosold` (`id`, `usuario`, `clave`, `nombre`, `apellido1`, `apellido2`, `departamento`, `ultimoAcceso`, `token`, `token_password`, `password_request`, `tipoUsuario`, `activo`) VALUES
(97, 'oscar@correo.de', '$2y$10$HIfq9JX63uK/igxxsjlJKOMcYL3CZEOtGLDWz7YH8FzGQQSCzsuju', 'Oscar1', 'Pérez1', 'Ramírez1', 'GESPRO1', NULL, '8b6d28e1023747a88925a89213e52662', NULL, 0, 1, 1),
(99, 'oscar1.perez.ramirez@mep.go.cr', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Oscar', 'Pérez', 'Ramírez', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 1, 1),
(106, 'luis@correo.de', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Luis', 'Chacón', 'Campos', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 1, 1),
(107, 'francisco@gespro.cr', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Francisco', 'Marenco', 'Urbina', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 1, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
