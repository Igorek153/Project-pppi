-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 18 2021 г., 14:26
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.3.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `projectppi`
--

-- --------------------------------------------------------

--
-- Структура таблицы `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `bananas` int(11) NOT NULL,
  `apples` int(11) NOT NULL,
  `pears` int(11) NOT NULL,
  `watermelons` int(11) NOT NULL,
  `cucumbers` int(11) NOT NULL,
  `tomato` int(11) NOT NULL,
  `carrot` int(11) NOT NULL,
  `meat` int(11) NOT NULL,
  `storeName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
