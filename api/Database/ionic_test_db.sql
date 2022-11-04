/*
Navicat MySQL Data Transfer

Source Server         : MYSQL-APP
Source Server Version : 50505
Source Host           : 127.0.0.1:3306
Source Database       : ionic_test_db

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2022-11-04 09:31:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for test_crud
-- ----------------------------
DROP TABLE IF EXISTS `test_crud`;
CREATE TABLE `test_crud` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nil_awal` decimal(20,0) NOT NULL,
  `nil_akhir` decimal(20,0) NOT NULL,
  `hasil` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
