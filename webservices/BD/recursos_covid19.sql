-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 24-04-2020 a las 11:51:15
-- Versión del servidor: 5.7.29
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
(4, 'Mep informa'),
(5, 'destacados');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enlaces`
--

CREATE TABLE `enlaces` (
  `id` int(11) NOT NULL,
  `nombre` varchar(97) DEFAULT NULL,
  `descriptivo` varchar(546) DEFAULT NULL,
  `url` varchar(93) DEFAULT NULL,
  `urlImagen` varchar(104) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `enlaces`
--

INSERT INTO `enlaces` (`id`, `nombre`, `descriptivo`, `url`, `urlImagen`) VALUES
(1, 'Recursos visuales Ministerio de Salud Costa Rica', 'Repositorio donde se encuentran los diferentes afiches informativos en torno a la prevención del COVID-19', 'https://www.mep.go.cr/educatico/recursos-visuales-ministerio-salud-costa-rica', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/repositorio-ms.png'),
(2, 'Protocolo de estornudo', 'Afiche donde se muestran los cuatro pasos del protocolo para estornudar correctamente (Cubrirse con el antebrazo para evitar la salida de gotitas de saliva o utilizar un pañuelo desechable, depositarlo en un basurero y posteriromente lavarse las manos con agua y con jabón. ', 'https://www.mep.go.cr/educatico/protocolo-estornudo', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Protocolo-Estornudo.png'),
(3, 'Las personas con factores de riesgo...', 'Afiche donde se enumeran los factores que aumentan el riesgo de sufrir complicaciones ante una infeción por Covid-19. ', 'https://www.mep.go.cr/educatico/personas-factores-riesgo', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Personas-Riesgo.png'),
(4, 'Otras formas de saludar', 'Afiche donde se muestran diferentes formas de saludar para evitar el contacto físico.', 'https://www.mep.go.cr/educatico/otras-formas-saludar', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Formas-Saludar.png'),
(5, 'No se toque la cara si no se ha lavado las manos', 'Afiche donde se muestra el dibujo del rostro de una persona y el mensaje \"No se toque la cara si no se ha lavado las manos\".', 'https://www.mep.go.cr/educatico/no-se-toque-cara', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/No-tocar-cara.png'),
(6, 'Protocolo Cuándo lavarse las manos.', 'Afiche donde se indican 12 diferentes acciones después de las cuales es necesario el lavado de manos. ', 'https://www.mep.go.cr/educatico/cuando-lavarse-manos', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Cuando-lavarse-manos.png'),
(7, '¿Cómo lavarse las manos?', 'Afiche donde se presenta de manera gráfica, once pasos para un correcto lavado de manos. ', 'https://www.mep.go.cr/educatico/como-lavarse-manos', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Como-lavarse-manos.png'),
(8, 'Juego del Coronavirus: una forma de prevenir a los niños', 'Video en Youtube donde se muestra una actividad para fomentar el lavado de manos en niñas y niños. ', 'https://www.mep.go.cr/educatico/juego-coronavirus', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Juego-Coronavirus.png'),
(9, '¡Andar las manos limpias!', 'Video en Youtube donde se muestra una canción para fomentar el lavado de manos en niñas y niños.', 'https://www.mep.go.cr/educatico/andar-manos-limpias', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Andar-Manos-Limpias.png'),
(10, 'Cubrete la nariz al toser o estornudar', 'Video en youtube donde por medio de dibujos animados se insta a las niñas y niños a cubrirse la boca con el antebrazo cuando tosan o estornuden.', 'https://www.mep.go.cr/educatico/cubrete-nariz-toser-estornudar', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Cubrir-Nariz-y-Boca.png'),
(11, '¿Qué es el Coronavirus?', 'Video en youtube donde se explica a un público en edad preescolar las carácterísticas, origen, riesgo y prevención del COVID-19', 'https://www.mep.go.cr/educatico/coronavirus', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Que-es-coronavirus.png'),
(12, 'Tutorial Tos y estornudo ', 'Video de youtube donde un actor muestra el protocolo para estornudar correctamente.', 'https://www.mep.go.cr/educatico/tutorial-tos-estornudo', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Tutorial-tos-y-estornudo.png'),
(13, 'Preguntas y respuestas sobre la enfermedad por coronavirus (COVID-19)', 'Contenido en la página web de la Organización Mundial de la Salud que explica por medio de preguntas y respuestas, información diversa sobre origen, transmisión y prevención del COVID-19.', 'https://www.mep.go.cr/educatico/preguntas-respuestas-sobre-coronavirus', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Enfermedad-COVID19.png'),
(14, 'Cuándo y cómo usar mascarilla', 'Contenido en la página web de la Organización Mundial de la Salud donde se explica cuando utilizar mascarilla y la forma correcta de hacerlo. ', 'https://www.mep.go.cr/educatico/cuando-como-usar-mascarilla', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Usar-Mascarilla.png'),
(15, 'Medidas de protección básicas contra el nuevo coronavirus', 'Contenido en la página web de la Organización Mundial de la Salud con información variada sobre la situación en torno al Covid-19', 'https://www.mep.go.cr/educatico/medidas-proteccion-coronavirus', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Medidas-Proteccion.png'),
(16, 'Cómo hablarle a tu hijo sobre la enfermedad por coronavirus 2019 (COVID-19)', 'Contenido en la web de la UNESCO donde se enumera una serie de recomendaciones dirigidas a padres y madres de menores, en torno al abordaje de la situación mundial vivida a raíz de la pandemia por covid-19, así como formas de prevención.', 'http://mep.go.cr/educatico/como-hablarle-hijo-sobre-covid-19', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Hablarle-a-tu-hijo.png'),
(17, 'Hola, yo soy el Coronavirus', 'Documento en pdf que enseña sobre lo que es el coronavirus a niños.', 'http://mep.go.cr/educatico/hola-yo-soy-coronavirus', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Soy-Coronavirus.png'),
(18, 'Juntos contra el coronavirus - Recomendaciones del Museo de los Niños.', 'Video explicativo del Museo de los Niños acerca de las recomendaciones para evitar el coronavirus', 'http://mep.go.cr/educatico/juntos-contra-coronavirus', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Juntos-contra-coronavirus.png'),
(19, 'Distanciamiento social: qué significa y por qué es importante para prevenir el coronavirus ', 'Reportaje de INFOBAE acerca del porqué es necesaria la medida en contra del Coronavirus.', 'http://mep.go.cr/educatico/distanciamiento-social-significa-importante-prevenir-coronavirus', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Distanciamiento-social.png'),
(20, 'Por qué brotes como el del\ncoronavirus crecen exponencialmente\ny cómo ‘aplanar la curva’', 'Reportaje del Washington post', 'http://mep.go.cr/educatico/brotes-coronavirus', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Brote-coronavirus.png'),
(21, '¿Para qué sirve el aislamiento social en el Coronavirus?', 'Video animado , simulador de cómo se esparce el virus en la población.', 'http://mep.go.cr/educatico/aislamiento-social-coronavirus', 'http://mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Para-que-aislamiento-social.png'),
(22, 'COVID-19: ¿Cómo se contagia? | Universidad de Monterrey', 'Breve video explicando cómo se contagia el Coronavirus.', 'https://www.mep.go.cr/educatico/covid-19-como-se-contagia', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/Como-se-contagia.png'),
(23, 'CADENA NACIONAL - Costa Rica está preparada ante COVID 19', 'Cadena nacional donde el señor ministro de salud explica a los costarricenses, qué es el coronavirus, y las normas para minimizar su efectos en la población.', 'https://www.mep.go.cr/educatico/costa-rica-esta-preparada-ante-covid-19', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/cadena1.png'),
(24, 'Spot - Lavado de Manos contra el Coronavirus COVID-19', 'Spot - Lavado de Manos contra el Coronavirus COVID-19', 'https://www.mep.go.cr/educatico/lavado-manos-contra-coronavirus-covid-19', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/spot.png'),
(25, 'Presidente de Costa Rica Decreta emergencia nacional por coronavirus y cierre todas las fronteras', 'Presidente de Costa Rica Decreta emergencia nacional por coronavirus y cierre todas las fronteras', 'https://www.mep.go.cr/educatico/presidente-decreta-emergencia-nacional', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/cadena2.png'),
(26, '¿Cómo se transmiten los virus respiratorios?', 'Video que explica las formas en las que se expande un virus a través de persona a persona.', 'https://www.mep.go.cr/educatico/como-se-transmiten-virus-respiratorios', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/trasmision.png'),
(27, 'App: Ready4AR', 'Aplicativo, sin fines de lucro sobre información actualizada sobre el coronavirus en Costa Rica. Es importante aclarar que no tiene ningún costo descargar el app ni ningún proceso asociado, además solo se utilizan fuentes 100% confiables de manera que los lectores puedan estar completamente tranquilos sobre la veracidad de la misma.', 'https://www.mep.go.cr/educatico/app-ready4ar', 'https://www.mep.go.cr/sites/default/files/imagecache/recurso_educativo_nodo/ready4AR.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enlacesOLD`
--

CREATE TABLE `enlacesOLD` (
  `id` int(11) NOT NULL,
  `nombre` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `descriptivo` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `urlImagen` varchar(128) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `id_poblacion` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `id_tipo` int(11) NOT NULL,
  `nombre` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `urlImg` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  `borrado` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `menu`
--

INSERT INTO `menu` (`id`, `id_poblacion`, `id_categoria`, `id_tipo`, `nombre`, `descripcion`, `link`, `urlImg`, `borrado`) VALUES
(21, 2, 2, 1, '- Aula Virtual (guías de trabajo autónomo)', '', 'https://aulavirtualabierta.mep.go.cr/curso/', NULL, 0),
(12, 2, 1, 1, '- Café nacional SINART Trece Costa Rica Televisión  ', 'Horario 8:10 a.m. a 8:45  a.m. / Lunes y Miércoles. ', 'http://costaricamedios.cr/cafenacional', NULL, 0),
(13, 2, 1, 1, '- Aprendo en casa, Trece Costa Rica Televisión ', 'Horario 3:00 p.m.', ' http://costaricamedios.cr/en-vivo/', NULL, 0),
(14, 2, 2, 1, '- Actualización de cursos virtuales   ', '', 'http://www.idp.mep.go.cr/oferta-formativa/aprendo-casa', NULL, 0),
(17, 3, 1, 1, '- Programa Café Nacional, Trece Costa Rica Televisión', 'Horario 8:10 a.m. a 8:45  a.m. / Lunes y Miércoles. ', 'http://costaricamedios.cr/cafenacional', NULL, 0),
(19, 3, 4, 1, '- Lineamientos, documentos y noticias MEP', '', 'http://www.mep.go.cr/coronavirus', NULL, 0),
(22, 3, 1, 1, '- Aprendo en casa, Trece Costa Rica Televisión', 'Horario: 10:00 a.m.', 'http://costaricamedios.cr/en-vivo/', NULL, 0),
(23, 3, 4, 1, '- Plan virtual de fomento a la lectura', '', 'https://es-la.facebook.com/VidaEstudiantil.MEP/', NULL, 0),
(11, 1, 1, 1, '- Aprendo en casa, Trece Costa Rica Televisión', 'Horario: 10:00 a.m.', 'http://costaricamedios.cr/en-vivo/', NULL, 0),
(25, 1, 2, 1, '- Aula Virtual (guías de trabajo autónomo)', '', 'https://aulavirtualabierta.mep.go.cr/curso/', NULL, 0),
(26, 3, 2, 1, '- Aula Virtual (guías de trabajo autónomo y material para familias)', '', 'https://aulavirtualabierta.mep.go.cr/area/familias/', NULL, 0);

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL COMMENT 'Identificador único para el usuario',
  `usuario` varchar(50) NOT NULL COMMENT 'correo electrónico',
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
  `activo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `clave`, `nombre`, `apellido1`, `apellido2`, `departamento`, `ultimoAcceso`, `token`, `token_password`, `password_request`, `idTipoUsuario`, `activo`) VALUES
(106, 'luis@correo.de', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Luis', 'Chacón', 'Campos', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 3, 1),
(107, 'oscar@correo.de', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Oscar', 'Perez', 'Ramirez', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 2, 1),
(108, 'paty@correo.de', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Patricia', 'Hernandez', 'Conejo', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 1, 1),
(109, 'francisco@gespro.cr', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Francisco', 'Marenco', 'Urbina', 'GESPRO', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 1, 1),
(110, 'natalia.solis.herrera@mep.go.cr', '$2y$10$FRcsor4X9UHLiUjQ3BqSZe0vnWF/lSH79tLM1kqHSfLcHr8CfY27i', 'Natalia', 'Solis', 'Herrera', 'Viceministerio Académico', NULL, '300b97290992f470ea62e0e7fe3222c8', NULL, 0, 1, 1);

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
-- Indices de la tabla `enlacesOLD`
--
ALTER TABLE `enlacesOLD`
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
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `enlaces`
--
ALTER TABLE `enlaces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `enlacesOLD`
--
ALTER TABLE `enlacesOLD`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

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

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador único para el usuario', AUTO_INCREMENT=111;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
