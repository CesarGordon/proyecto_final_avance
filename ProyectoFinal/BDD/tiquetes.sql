-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 29, 2021 at 04:18 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tiquetes`
--

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `id` int(11) NOT NULL,
  `estado` varchar(200) NOT NULL,
  `prioridad` varchar(200) NOT NULL,
  `categoria` varchar(200) NOT NULL,
  `asunto` varchar(200) NOT NULL,
  `descripcion` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tickets`
--

INSERT INTO `tickets` (`id`, `estado`, `prioridad`, `categoria`, `asunto`, `descripcion`) VALUES
(23, 'En Desarrollo', '1', '2', 'problema ejemplo', 'descripcion problema ejemplo'),
(24, 'Cerrado', '3', '3', 'asunto cerrado ejemplo1', 'descripcion cerrado ejemplo1'),
(25, 'Cerrado', '1', '1', 'asunto ejemplo cerrado 2', 'descripcion ejemplo cerrado 2'),
(26, 'En Desarrollo', '3', '1', 'ejemplo en desarrollo 2', 'descripcion ejemplo en desarrollo 2\r\n'),
(27, 'Abierto', '2', '2', 'Prueba asunto prioridad media', 'Hola, estoy probando'),
(28, 'Abierto', '2', '2', 'Necesito cambiar un articulo', 'Salio malo\n'),
(29, 'Abierto', '1', '3', 'Se rompio mi articulo', 'se me cayo'),
(30, 'Abierto', '3', '4', 'Mi software no funciona', 'esta malo el inicio de sesion'),
(31, 'Abierto', '2', '5', 'Nuevo hardware', 'Deseo tener una nueva pieza'),
(32, 'Abierto', '1', '5', 'Nuevo hardware', 'Deseo tener una nueva pieza'),
(33, 'Abierto', '1', '1', 'deseo pedir un hardware que no encuentro en otro lugar', 'necesito tu ayuda porfavor'),
(34, 'Abierto', '1', '3', 'Hardware Roto', 'Al abrir el paquete de envio, se rompio instantaneamente la pieza'),
(35, 'Abierto', '2', '4', 'No llego mi pedido', '3 dias de retraso con el pedido de mi pieza');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombres` varchar(200) NOT NULL,
  `apellidos` varchar(200) NOT NULL,
  `rut` int(11) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `region` varchar(200) NOT NULL,
  `comuna` varchar(200) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `rol` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombres`, `apellidos`, `rut`, `direccion`, `region`, `comuna`, `correo`, `password`, `rol`) VALUES
(12, 'pepito', 'gonzalez', 182301234, '2 norte', 'Valparaiso', 'Zapallar', 'pepito@hotmail.com', '12345pepito', 'usuario'),
(13, 'Ernesto', 'Jorquera', 113207975, 'alvarez', 'Valparaiso', 'Vinha del Mar', 'ernesto@gmail.com', 'ernestobkn123', 'usuario'),
(14, 'Jorge', 'Latorre', 201234520, '201234520', 'Valparaiso', 'Quilpue', 'jorge@mail.pucv.cl', '$2a$08$2uZnPwYeuRNKf9hrMM3Z3ORsVTGqWhXh23fclqbKUUbxzLBVIQwXW', 'admin'),
(15, 'Carlos', 'Gaucho', 200090556, '200090556', 'Valparaiso', 'Vinha del Mar', 'carlos@gmail.com', '123123carlangas', 'usuario'),
(16, 'julian', 'arancibia', 203121233, '203121233', 'Valparaiso', 'vinha del mar', 'julianloco@gmail.com', '123julianbkn123', ''),
(17, 'Antonio', 'Aravena', 212031238, '212031238', 'Región Metropolitana de Santiago', 'providencia\n', 'tonho123@hotmail.com', '123123123', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
