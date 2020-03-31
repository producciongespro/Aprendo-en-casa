-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 31-03-2020 a las 08:25:53
-- Versión del servidor: 5.6.47
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
-- Estructura de tabla para la tabla `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `poblacion` int(11) NOT NULL,
  `categoria` int(11) NOT NULL,
  `tipo` int(11) NOT NULL,
  `nombre` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(128) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `menu`
--

INSERT INTO `menu` (`id`, `poblacion`, `categoria`, `tipo`, `nombre`, `descripcion`, `link`) VALUES
(21, 2, 2, 1, '- Aula Virtual (guías de trabajo autónomo)', '', 'https://aulavirtualabierta.mep.go.cr/curso/'),
(12, 2, 1, 1, '- Café nacional SINART Trece Costa Rica Televisión  ', 'Horario 8:10 a.m. a 8:45  a.m. / Lunes a Viernes. ', 'http://costaricamedios.cr/cafenacional'),
(13, 2, 1, 1, '- Aprendo en casa, Trece Costa Rica Televisión ', '• L-M-V 10-11 a.m. Videoconferencias    \r\n• L-M-V 11-11:30 a.m. Estrategias Integrales Aprendo en Casa (Repetición Sección de Café Nacional)\r\n• K-J 10 a.m. -12 p.m. Érase una Vez', ' http://costaricamedios.cr/en-vivo/'),
(14, 2, 2, 1, '- Actualización de cursos virtuales   ', '', 'http://www.idp.mep.go.cr/'),
(15, 1, 1, 1, '- Aprendo en casa, Trece Costa Rica Televisión', 'Horario 3:00 p.m. a 5:00  p.m. / Lunes a Viernes. A partir del miércoles 25 de marzo ', 'http://costaricamedios.cr/en-vivo/'),
(17, 3, 1, 1, '- Programa Café Nacional, Trece Costa Rica Televisión', 'Horario 8:10 a.m. a 8:45  a.m. / Lunes a Viernes. ', 'http://costaricamedios.cr/cafenacional'),
(19, 3, 4, 1, '- Lineamientos, documentos y noticias MEP', '', 'http://www.mep.go.cr/coronavirus'),
(22, 3, 1, 1, '- Aprendo en casa, Trece Costa Rica Televisión', 'Horario 3:00 p.m. a 5:00  p.m. / Lunes a Viernes. A partir del miércoles 25 de marzo', 'http://costaricamedios.cr/en-vivo/'),
(23, 3, 4, 1, '- Plan virtual de fomento a la lectura', '', 'https://es-la.facebook.com/VidaEstudiantil.MEP/'),
(11, 1, 1, 1, '- Aprendo en casa, Trece Costa Rica Televisión', 'Érase una vez, K y J de 10:00 a.m. a 12:00 md', 'http://costaricamedios.cr/en-vivo/'),
(25, 1, 2, 1, '- Aula Virtual (guías de trabajo autónomo)', '', 'https://aulavirtualabierta.mep.go.cr/curso/'),
(26, 3, 2, 1, '- Aula Virtual (guías de trabajo autónomo y material para familias)', '', 'https://aulavirtualabierta.mep.go.cr/area/familias/');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
