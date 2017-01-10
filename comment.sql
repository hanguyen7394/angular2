-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 10, 2017 at 04:06 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop_angular_2`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(5) NOT NULL,
  `content` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `product_id` int(5) NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `content`, `email`, `username`, `product_id`, `created`, `updated`, `status`) VALUES
(1, 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'khachhang01@gmail.com', 'khachhang01', 1, 1472925059004, 1472925059004, 1),
(2, 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'khachhang02@gmail.com', 'khachhang02', 1, 1472925059004, 1472925059004, 1),
(3, 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'khachhang02@gmail.com', 'khachhang02', 1, 1472925059004, 1472925059004, 1),
(4, 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'khachhang02@gmail.com', 'khachhang02', 2, 1472925059004, 1472925059004, 1),
(5, 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'khachhang02@gmail.com', 'khachhang02', 3, 1472925059004, 1472925059004, 1),
(6, 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'khachhang02@gmail.com', 'khachhang02', 4, 1472925059004, 1472925059004, 1),
(7, 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'khachhang02@gmail.com', 'khachhang02', 5, 1472925059004, 1472925059004, 1),
(8, 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'khachhang01@gmail.com', 'khachhang01', 15, 1472925059004, 1472925059004, 1),
(9, 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'khachhang01@gmail.com', 'khachhang01', 20, 1472925059004, 1472925059004, 1),
(10, 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'khachhang01@gmail.com', 'khachhang01', 21, 1472925059004, 1472925059004, 1),
(11, 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'khachhang02@gmail.com', 'khachhang02', 22, 1472925059004, 1472925059004, 1),
(12, 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'khachhang02@gmail.com', 'khachhang02', 30, 1472925059004, 1472925059004, 1),
(13, 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'khachhang02@gmail.com', 'khachhang02', 5, 1472925059004, 1472925059004, 1),
(14, 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'khachhang02@gmail.com', 'khachhang02', 14, 1472925059004, 1472925059004, 1),
(15, 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'khachhang02@gmail.com', 'khachhang02', 26, 1472925059004, 1472925059004, 1),
(16, 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'khachhang02@gmail.com', 'khachhang02', 25, 1472925059004, 1472925059004, 1),
(17, 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'khachhang01@gmail.com', 'khachhang01', 22, 1472925059004, 1472925059004, 1),
(18, 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'khachhang01@gmail.com', 'khachhang01', 20, 1472925059004, 1472925059004, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD UNIQUE KEY `id` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
