-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 23-03-2020 a las 13:06:38
-- Versión del servidor: 5.6.45
-- Versión de PHP: 7.3.6

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

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `categoria` varchar(64) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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

CREATE TABLE `enlaces` (
  `id` int(11) NOT NULL,
  `nombre` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `descriptivo` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `urlImagen` varchar(128) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `enlaces`
--

INSERT INTO `enlaces` (`id`, `nombre`, `descriptivo`, `url`, `urlImagen`) VALUES
(1, 'El matavirus', 'Ayuda a Pepito a matar virus', 'www.nacion.com', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/objetos-enigmaticos.jpg'),
(2, 'Descubriendo el corona virus', 'Los diferentres tipos de coronavirus que existen', 'https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=en', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/caja-herramientas-docentes.png'),
(3, 'Amanda y su aventura en la caza de COVID-19', 'Los diferentres tipos de coronavirus que existen', 'https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=en', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/minibook-1cicle.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `poblacion` int(11) NOT NULL,
  `categoria` int(11) NOT NULL,
  `tipo` int(11) NOT NULL,
  `nombre` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(128) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `menu`
--

INSERT INTO `menu` (`id`, `poblacion`, `categoria`, `tipo`, `nombre`, `descripcion`, `link`) VALUES
(21, 2, 2, 1, '- Aula Virtual (plantillas y ejemplos)   ', '', 'https://aulavirtualabierta.mep.go.cr/\r\n'),
(12, 2, 1, 1, '- Café nacional SINART canal 13.  ', 'Horario 8:10 a.m. a 8:45  a.m. / Lunes a Viernes. ', 'http://costaricamedios.cr/cafenacional'),
(13, 2, 1, 1, '- Caja de Herramientas canal 13.  ', 'Horario 3:00 p.m. a 4:00  p.m.  / Lunes, Miércoles y Viernes. A partir del miércoles 25 de marzo', ' http://costaricamedios.cr/en-vivo/'),
(14, 2, 2, 1, '- Actualización de cursos virtuales   ', '', 'http://www.idp.mep.go.cr/'),
(15, 1, 1, 1, '-Aprendo en casa. ', 'Horario 10:00 a.m. a 11:00  a.m. / Lunes a Viernes. A partir del miércoles 25 de marzo ', 'http://costaricamedios.cr/en-vivo/'),
(16, 1, 1, 1, '-Aprendo en casa/Érase una vez.  ', 'Horario 3:00 p.m. a 5:00  p.m.  / Martes y Jueves. A partir del miércoles 25 de marzo ', 'https://es-la.facebook.com/VidaEstudiantil.MEP/ '),
(17, 3, 1, 1, '-Programa Café Nacional Canal 13. ', 'Horario 8:00 a.m. a 10:00  a.m. / Lunes a Viernes. ', 'http://costaricamedios.cr/cafenacional'),
(18, 3, 1, 1, '-Aprendo en casa/Érase una vez.  ', 'Horario 3:00 p.m. a 5:00  p.m.  / Martes y Jueves. A partir del miércoles 25 de marzo', 'https://es-la.facebook.com/VidaEstudiantil.MEP/'),
(19, 3, 4, 1, '- Lineamientos, documentos y noticias MEP', '', 'http://www.mep.go.cr/coronavirus');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `poblaciones`
--

CREATE TABLE `poblaciones` (
  `id` int(11) NOT NULL,
  `poblacion` varchar(64) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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

CREATE TABLE `tipos` (
  `id` int(11) NOT NULL,
  `tipo` varchar(64) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tipos`
--

INSERT INTO `tipos` (`id`, `tipo`) VALUES
(1, 'link');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `enlaces`
--
ALTER TABLE `enlaces`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `poblaciones`
--
ALTER TABLE `poblaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipos`
--
ALTER TABLE `tipos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `enlaces`
--
ALTER TABLE `enlaces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `poblaciones`
--
ALTER TABLE `poblaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipos`
--
ALTER TABLE `tipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
