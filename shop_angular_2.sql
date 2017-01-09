-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2017 at 08:35 AM
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
-- Table structure for table `cate_product`
--

CREATE TABLE `cate_product` (
  `id` int(5) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `sex` int(1) NOT NULL,
  `detail` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cate_product`
--

INSERT INTO `cate_product` (`id`, `name`, `sex`, `detail`, `created`, `updated`, `status`) VALUES
(1, 'Shirt Women', 1, 'Shirt Women', 1472925059004, 1472925059004, 1),
(2, 'Skirt Women', 1, 'Skirt Women', 1472925059004, 1472925059004, 1),
(3, 'Dress Women', 1, 'Dress Women', 1472925059004, 1472925059004, 1),
(4, 'Pants Women', 1, 'Pants Women', 1472925059004, 1472925059004, 1),
(5, 'Shirt Men', 0, 'Shirt Men', 1472925059004, 1472925059004, 1),
(6, 'T-Shirt Men', 0, 'T-Shirt Men', 1472925059004, 1472925059004, 1),
(7, 'Pants Men', 0, 'Pants Men', 1472925059004, 1472925059004, 1);

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
(1, 'Good Product 01', 'khachhang01@gmail.com', 'khachhang01', 1, 1472925059004, 1472925059004, 1),
(2, 'Good Product 02', 'khachhang02@gmail.com', 'khachhang02', 1, 1472925059004, 1472925059004, 1),
(3, 'Good Product 03', 'khachhang02@gmail.com', 'khachhang02', 1, 1472925059004, 1472925059004, 1);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(5) NOT NULL,
  `username` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password_salt` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `sex` int(1) NOT NULL,
  `img` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `last_login` bigint(15) NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `username`, `password`, `password_salt`, `email`, `address`, `phone`, `first_name`, `last_name`, `sex`, `img`, `last_login`, `created`, `updated`, `status`) VALUES
(1, 'khachhang01', '123456', '123456', 'khachhang01@gmail.co', '123 xyz, q1, tp HCM', '0901234567', 'A', 'Nguyen', 1, 'images/avatar.png', 1472925059004, 1472925059004, 1472925059004, 1),
(2, 'khachhang02', '123456', '123456', 'khachhang02@gmail.co', '123 xyz, q1, tp HCM', '0901234765', 'B', 'Nguyen', 1, 'images/avatar.png', 1472925059004, 1472925059004, 1472925059004, 1);

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(5) NOT NULL,
  `user_id` int(5) NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `user_id`, `created`, `updated`, `status`) VALUES
(1, 1, 1472925059004, 1472925059004, 1),
(2, 2, 1472925059004, 1472925059004, 1);

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE `order_detail` (
  `id` int(5) NOT NULL,
  `order_id` int(5) NOT NULL,
  `product_id` int(5) NOT NULL,
  `quantity` int(5) NOT NULL,
  `price` int(5) NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`id`, `order_id`, `product_id`, `quantity`, `price`, `created`, `updated`, `status`) VALUES
(1, 1, 1, 1, 280, 1472925059004, 1472925059004, 1),
(2, 1, 2, 1, 280, 1472925059004, 1472925059004, 1),
(3, 2, 1, 1, 280, 1472925059004, 1472925059004, 1);

-- --------------------------------------------------------

--
-- Table structure for table `partner`
--

CREATE TABLE `partner` (
  `id` int(5) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `detail` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `partner`
--

INSERT INTO `partner` (`id`, `name`, `img`, `detail`, `created`, `updated`, `status`) VALUES
(1, 'H&M', 'images/h&m.jpg', 'Hennes & Mauritz AB (H&M) là một công ty đa quốc gia bán lẻ quần áo của Thụy Điển, được biết đến với các sản phẩm thời trang dành cho mọi đối tượng từ đàn ông, phụ nữ, thanh thiếu niên đến trẻ em.', 1475539959004, 1475539959004, 1),
(2, 'Gucci', 'images/gucci.jpg', 'The House of Gucci là một biểu tượng thời trang sở hữu bởi Italia và Pháp, một nhãn hiệu đồ da nổi tiếng. Gucci được coi là một trong những nhãn hiệu thời trang nổi tiếng, danh giá và được thừa nhận b', 1475539959004, 1475539959004, 1),
(3, 'Zara', 'images/zara.jpg', 'Zara là thương hiệu bình dân nổi tiếng của Tây Ban Nha được thành lập năm 1975. Thế mạnh của Zara nằm ở tốc độ tung ra mẫu mã mới và chất liệu đẹp.', 1475539959004, 1475539959004, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(5) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(5) NOT NULL,
  `price_sale` int(5) NOT NULL,
  `img` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `brief` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `detail` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `product_cate_id` int(5) NOT NULL,
  `partner_id` int(5) NOT NULL,
  `inventory` int(5) NOT NULL,
  `views` int(10) NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `state` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `price_sale`, `img`, `brief`, `detail`, `product_cate_id`, `partner_id`, `inventory`, `views`, `created`, `updated`, `state`, `status`) VALUES
(1, 'white T-Shirt', 300, 0, 'images/p1.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 1, 1, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(2, 'yellow T-Shirt', 280, 250, 'images/p2.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 1, 2, 3, 14, 1475539959004, 1475539959004, 'inactive', 1),
(3, 'black skirt', 350, 300, 'images/p3.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 2, 2, 5, 10, 1474425059004, 1474425059004, 'inactive', 1),
(4, 'red dress', 190, 150, 'images/p4.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 3, 1, 5, 10, 1472925059004, 1472925059004, 'active', 1),
(5, 'gray dress', 258, 230, 'images/p5.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 3, 1, 5, 10, 1473899959004, 1473899959004, 'active', 1),
(6, 'blue shirt', 410, 390, 'images/p6.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 1, 1, 5, 10, 1471966959004, 1471966959004, 'active', 1),
(7, 'black dress', 321, 300, 'images/p7.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 3, 3, 5, 10, 1476689959004, 1476689959004, 'active', 1),
(8, 'white dress', 256, 210, 'images/p8.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 3, 3, 5, 10, 1472359959004, 1472359959004, 'active', 1),
(9, 'purple dress', 648, 550, 'images/p9.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 3, 2, 5, 10, 14750757959004, 14750757959004, 'active', 1),
(10, 'white T-Shirt Pink', 350, 0, 'images/p10.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 1, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(11, 'Imogen Long Sleeve', 250, 210, 'images/p11.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 1, 3, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(12, 'Long Sleeve Mesh', 110, 100, 'images/p12.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 6, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(13, 'Oversized Crew Print', 190, 180, 'images/p13.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 6, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(14, 'Long Line Raglan', 190, 180, 'images/p14.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 6, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(15, 'Long Sleeve Buffalo', 200, 180, 'images/p15.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 5, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(16, 'Long Sleeve Buffalo', 200, 160, 'images/p16.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 5, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(17, 'Long Sleeve Check', 175, 120, 'images/p17.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 5, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(18, 'Long Sleeve Check', 300, 290, 'images/p18.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 7, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(19, 'Long Sleeve Check', 300, 275, 'images/p19.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 7, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(20, 'Long Sleeve Check', 310, 285, 'images/p20.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 7, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(21, 'Skinny Smart Joggers', 315, 275, 'images/p21.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 7, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(22, 'Skinny Smart Joggers', 315, 275, 'images/p22.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 7, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(23, 'Skinny Smart Joggers', 315, 275, 'images/p23.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 7, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(24, 'Long Sleeve Check', 175, 120, 'images/p24.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 5, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(25, 'Long Sleeve Check', 175, 120, 'images/p25.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 5, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(26, 'Long Sleeve Check', 175, 120, 'images/p26.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 5, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(27, 'Long Line Raglan', 190, 180, 'images/p27.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 6, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(28, 'Long Sleeve Check', 175, 120, 'images/p28.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 6, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(29, 'Long Sleeve Check', 175, 120, 'images/p29.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 6, 2, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(30, 'Imogen Long Sleeve', 250, 210, 'images/p30.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 3, 3, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(31, 'Imogen Long Sleeve', 250, 210, 'images/p31.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 3, 3, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(32, 'Imogen Long Sleeve', 250, 210, 'images/p32.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 2, 3, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(33, 'Imogen Long Sleeve', 250, 210, 'images/p33.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 2, 3, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(34, 'Imogen Long Sleeve', 250, 210, 'images/p34.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 2, 3, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(35, 'Imogen Long Sleeve', 250, 210, 'images/p35.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 2, 3, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(36, 'Imogen Long Sleeve', 250, 210, 'images/p36.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 2, 3, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(37, 'Imogen Long Sleeve', 250, 210, 'images/p37.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 4, 3, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(38, 'Imogen Long Sleeve', 250, 210, 'images/p38.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 4, 3, 5, 10, 1476910059004, 1476910059004, 'inactive', 1),
(39, 'Imogen Long Sleeve', 250, 210, 'images/p39.jpg', 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini', 'Look knock-out on nights out in figure-skimming bodycon fits, flowing maxi lengths and stunning sequin-embellished occasion dresses. This season make for satin sheen slip dresses in mink nudes, and ma', 4, 3, 5, 10, 1476910059004, 1476910059004, 'inactive', 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_image`
--

CREATE TABLE `product_image` (
  `id` int(5) NOT NULL,
  `url` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `product_id` int(5) NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `slide_banner`
--

CREATE TABLE `slide_banner` (
  `id` int(5) NOT NULL,
  `title` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `content` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `state` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `slide_banner`
--

INSERT INTO `slide_banner` (`id`, `title`, `content`, `state`, `created`, `updated`, `status`) VALUES
(1, 'Smart But Casual', 'Start your shopping here...', 'inactive', 1475539959004, 1475539959004, 1),
(2, 'Shop Online', 'Start your shopping here...', 'right', 1475539959004, 1475539959004, 1),
(3, 'Pack your Bag', 'Start your shopping here...', 'left', 1475539959004, 1475539959004, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(5) NOT NULL,
  `username` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password_salt` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `level` int(1) NOT NULL,
  `last_login` bigint(15) NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `password_salt`, `email`, `first_name`, `last_name`, `img`, `level`, `last_login`, `created`, `updated`, `status`) VALUES
(1, 'hanguyen', '123456', '123456', 'hanguyen@gmail.com', 'Ha', 'Nguyen', 'images/avatar.png', 1, 1476910059004, 1476910059004, 1476910059004, 1),
(2, 'hienpham', '123456', '123456', 'hienpham@gmail.com', 'Hien', 'Pham', 'images/avatar.png', 1, 1476910059004, 1476910059004, 1476910059004, 1),
(3, 'kieunguyen', '123456', '123456', 'kieunguyen@gmail.com', 'Kieu', 'Nguyen', 'images/avatar.png', 1, 1476910059004, 1476910059004, 1476910059004, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cate_product`
--
ALTER TABLE `cate_product`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `partner`
--
ALTER TABLE `partner`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `slide_banner`
--
ALTER TABLE `slide_banner`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD UNIQUE KEY `id` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
