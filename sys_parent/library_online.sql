/*
Navicat MySQL Data Transfer

Source Server         : feng
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : library_online

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2019-11-22 20:51:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `admin_id` varchar(8) NOT NULL,
  `admin_pwd` varchar(18) DEFAULT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('123456', '123456');

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `book_id` int(11) NOT NULL AUTO_INCREMENT,
  `library_id` int(8) DEFAULT NULL,
  `library_name` varchar(32) DEFAULT NULL,
  `book_name` varchar(100) DEFAULT NULL,
  `book_picture` varchar(255) DEFAULT NULL,
  `book_isbn` varchar(16) DEFAULT NULL,
  `book_press` varchar(50) DEFAULT NULL,
  `book_date` date DEFAULT NULL,
  `book_page` varchar(4) DEFAULT NULL,
  `book_autor` varchar(30) DEFAULT NULL,
  `book_language` varchar(16) DEFAULT NULL,
  `book_type` int(4) DEFAULT NULL,
  `book_price` double(18,2) DEFAULT NULL,
  `book_status` int(1) DEFAULT '0',
  `borrowed_count` int(8) DEFAULT NULL,
  PRIMARY KEY (`book_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES ('2', '123456', '大石图书馆', '夏洛的网', 'book.png', '123654', '上海译文出版社', '2009-06-03', '220', '任溶溶', '中文', '1', '78.50', '0', '5');
INSERT INTO `book` VALUES ('3', '123456', '大石图书馆', '三体2 黑暗森林', 'book.png', '845613', '重庆出版社', '2008-05-01', '333', '刘慈欣', '中文', '2', '17.90', '1', '5');
INSERT INTO `book` VALUES ('4', '123456', '大石图书馆', '软件架构设计:程序员向架构师转型必备(第2版)', 'book.png', '8949846', '电子工业出版社', '2009-06-03', '246', '温昱', '中文', '6', '69.50', '0', '5');
INSERT INTO `book` VALUES ('5', '123456', '大石图书馆', '计算机程序设计员(JAVA)(四级)-指导手册', 'book.png', '654621', '中国劳动社会保障出版社', '2009-06-03', '888', '无名氏', '中文', '6', '88.50', '0', '5');
INSERT INTO `book` VALUES ('6', '123456', '大石图书馆', '历史学的理论和历史', 'book.png', '1454567897', '中国人民大学出版社', '2012-06-01', '243', '克罗齐', '意大利语', '5', '80.00', '0', '5');
INSERT INTO `book` VALUES ('7', '123456', '大石图书馆', '历史有魏道', 'book.png', '1674567897', '上海文化出版社', '2015-09-01', '282', '魏新', '中文', '1', '28.50', '0', '5');
INSERT INTO `book` VALUES ('8', '123456', '大石图书馆', '和男人说说心里话', 'book.png', '1564567897', '中国城市出版社', '2012-05-12', '244', '李蓉蓉', '中文', '7', '20.80', '0', '5');
INSERT INTO `book` VALUES ('9', '123456', '大石图书馆', '汽车相对金融', 'book.png', '184567897', '华南理工大学出版社', '2008-01-01', '868', '肖钢', '中文', '3', '22.00', '0', '5');
INSERT INTO `book` VALUES ('10', '123456', '大石图书馆', '新编英汉汉英国际贸易词典', 'book.png', '123124', '首都经济贸易大学出版社', '2011-04-01', '568', '王友明', '中文', '4', '50.10', '2', '5');
INSERT INTO `book` VALUES ('11', '111111', '广州图书馆', '相对论', 'book.png', '123456', '广州出版社', '2009-06-03', '88', '爱因斯坦', '英语', '6', '55.50', '0', '5');
INSERT INTO `book` VALUES ('12', '111111', '广州图书馆', '夏洛的网魏新', 'book.png', '123654', '上海译文出版社', '2009-06-03', '220', '任溶溶', '中文', '1', '78.50', '0', '5');
INSERT INTO `book` VALUES ('13', '111111', '广州图书馆', '三体2 黑暗森林', 'book.png', '845613', '重庆出版社', '2008-05-01', '333', '刘慈欣', '中文', '2', '17.90', '0', '5');
INSERT INTO `book` VALUES ('14', '111111', '广州图书馆', '软件架构设计:程序员向架构师转型必备(第2版)', 'book.png', '8949846', '电子工业出版社', '2009-06-03', '246', '温昱', '中文', '6', '69.50', '0', '5');
INSERT INTO `book` VALUES ('15', '111111', '广州图书馆', '计算机程序设计员(JAVA)(四级)-指导手册', 'book.png', '654621', '中国劳动社会保障出版社', '2009-06-03', '888', '无名氏', '中文', '6', '88.50', '0', '5');
INSERT INTO `book` VALUES ('16', '111111', '广州图书馆', '历史学的理论和历史', 'book.png', '12345456897', '中国人民大学出版社', '2012-06-01', '243', '克罗齐', '意大利语', '5', '29.60', '0', '5');
INSERT INTO `book` VALUES ('17', '111111', '广州图书馆', '历史有魏道', 'book.png', '12123567897', '上海文化出版社', '2015-09-01', '282', '魏新', '中文', '1', '28.50', '1', '5');
INSERT INTO `book` VALUES ('18', '111111', '广州图书馆', '和男人说说心里话', 'book.png', '1245667897', '中国城市出版社', '2012-05-12', '244', '李蓉蓉', '中文', '7', '20.80', '0', '5');
INSERT INTO `book` VALUES ('19', '111111', '广州图书馆', '汽车金融', 'book.png', '12336267897', '华南理工大学出版社', '2008-01-01', '868', '肖钢', '中文', '3', '22.00', '0', '5');
INSERT INTO `book` VALUES ('20', '111111', '广州图书馆', '新编英汉汉英国际贸易词典', 'book.png', '123124', '首都经济贸易大学出版社', '2011-04-01', '568', '王友明', '中文', '4', '50.10', '2', '5');
INSERT INTO `book` VALUES ('21', '123123', '白云图书馆', '相对论', 'book.png', '123456', '广州出版社', '2009-06-03', '88', '爱因斯坦', '英语', '6', '55.50', '0', '5');
INSERT INTO `book` VALUES ('22', '123123', '白云图书馆', '夏洛的网', 'book.png', '123654', '上海译文出版社', '2009-06-03', '220', '任溶溶', '中文', '1', '78.50', '0', '5');
INSERT INTO `book` VALUES ('23', '123123', '白云图书馆', '三体2 黑暗森林', 'book.png', '845613', '重庆出版社', '2008-05-01', '333', '刘慈欣', '中文', '2', '17.90', '2', '5');
INSERT INTO `book` VALUES ('24', '123123', '白云图书馆', '软件架构设计:程序员向架构师转型必备(第2版)', 'book.png', '8949846', '电子工业出版社', '2009-06-03', '246', '温昱', '中文', '6', '69.50', '0', '5');
INSERT INTO `book` VALUES ('25', '123123', '白云图书馆', '计算机程序设计员(JAVA)(四级)-指导手册', 'book.png', '654621', '中国劳动社会保障出版社', '2009-06-03', '888', '无名氏', '中文', '6', '88.50', '0', '5');
INSERT INTO `book` VALUES ('26', '123123', '白云图书馆', '历史学的理论和历史', 'book.png', '12898967897', '中国人民大学出版社', '2012-06-01', '243', '克罗齐', '意大利语', '5', '29.60', '0', '5');
INSERT INTO `book` VALUES ('27', '123123', '白云图书馆', '历史有魏道', 'book.png', '12890867897', '上海文化出版社', '2015-09-01', '282', '魏新', '中文', '1', '28.50', '0', '5');
INSERT INTO `book` VALUES ('28', '123123', '白云图书馆', '和男人说说心里话', 'book.png', '1298067897', '中国城市出版社', '2012-05-12', '244', '李蓉蓉', '中文', '7', '20.80', '0', '5');
INSERT INTO `book` VALUES ('29', '123123', '白云图书馆', '汽车金融', 'book.png', '1256787897', '华南理工大学出版社', '2008-01-01', '868', '肖钢', '中文', '3', '22.00', '0', '5');
INSERT INTO `book` VALUES ('30', '123123', '白云图书馆', '新编英汉汉英国际贸易词典', 'book.png', '123124', '首都经济贸易大学出版社', '2011-04-01', '568', '王友明', '中文', '4', '50.10', '1', '5');
INSERT INTO `book` VALUES ('34', '123456', '广州图书馆', '打打分', '77cec8da-545b-498b-a209-ff510c35be8e_book.png', '123', '1', '2019-11-09', '123', '速度', '123', '1', '123.00', '0', null);

-- ----------------------------
-- Table structure for books_type
-- ----------------------------
DROP TABLE IF EXISTS `books_type`;
CREATE TABLE `books_type` (
  `type_id` int(4) NOT NULL AUTO_INCREMENT,
  `type` varchar(16) DEFAULT NULL,
  `books_count` int(8) DEFAULT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of books_type
-- ----------------------------
INSERT INTO `books_type` VALUES ('1', '少儿', '6');
INSERT INTO `books_type` VALUES ('2', '文学小说', '3');
INSERT INTO `books_type` VALUES ('3', '经济管理', '3');
INSERT INTO `books_type` VALUES ('4', '学习考试', '3');
INSERT INTO `books_type` VALUES ('5', '人文社科', '3');
INSERT INTO `books_type` VALUES ('6', '科技', '9');
INSERT INTO `books_type` VALUES ('7', '生活', '3');
INSERT INTO `books_type` VALUES ('8', '法律', '0');

-- ----------------------------
-- Table structure for borrow_record
-- ----------------------------
DROP TABLE IF EXISTS `borrow_record`;
CREATE TABLE `borrow_record` (
  `borrow_id` int(8) NOT NULL AUTO_INCREMENT,
  `user_id` int(8) DEFAULT NULL,
  `book_id` int(8) DEFAULT NULL,
  `borrow_time` date DEFAULT NULL,
  `borrow_status` int(1) DEFAULT NULL,
  PRIMARY KEY (`borrow_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of borrow_record
-- ----------------------------
INSERT INTO `borrow_record` VALUES ('1', '1', '1', '2019-11-06', '2');
INSERT INTO `borrow_record` VALUES ('2', '1', '3', '2019-10-06', '0');
INSERT INTO `borrow_record` VALUES ('3', '1', '4', '2019-11-06', '1');
INSERT INTO `borrow_record` VALUES ('4', '2', '5', '2019-11-06', '1');
INSERT INTO `borrow_record` VALUES ('5', '2', '17', '2019-11-16', '1');
INSERT INTO `borrow_record` VALUES ('6', '2', '10', '2019-11-05', '2');
INSERT INTO `borrow_record` VALUES ('7', '2', '3', '2019-11-06', '0');
INSERT INTO `borrow_record` VALUES ('8', '2', '23', '2019-11-16', '2');
INSERT INTO `borrow_record` VALUES ('9', '2', '30', '2019-11-16', '1');
INSERT INTO `borrow_record` VALUES ('10', '2', '20', '2019-11-16', '2');

-- ----------------------------
-- Table structure for delivery_record
-- ----------------------------
DROP TABLE IF EXISTS `delivery_record`;
CREATE TABLE `delivery_record` (
  `delivery_id` int(8) NOT NULL AUTO_INCREMENT,
  `borrow_id` int(8) DEFAULT NULL,
  `delivery_name` varchar(16) DEFAULT NULL,
  `delivery_phone` varchar(11) DEFAULT NULL,
  `delivery_address` varchar(100) DEFAULT NULL,
  `delivery_time` date DEFAULT NULL,
  `delivery_status` int(1) DEFAULT '1',
  `reserve_time` date DEFAULT NULL,
  PRIMARY KEY (`delivery_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of delivery_record
-- ----------------------------
INSERT INTO `delivery_record` VALUES ('1', '1', '小明', '18647895487', '广州天河元岗路白云小区三街4栋805', '2019-11-05', '1', null);
INSERT INTO `delivery_record` VALUES ('2', '6', '小黄', '18627895487', '广州天河元岗路白云小区三街4栋805', '2019-11-14', '1', null);
INSERT INTO `delivery_record` VALUES ('3', '8', '小黄da', '18627895487', '广州天河元岗路白云小区三街4栋805', '2019-11-15', '1', null);
INSERT INTO `delivery_record` VALUES ('4', '10', '小黄da', '18627895487', '广州天河元岗路白云小区三街4栋805', '2019-11-15', '1', null);

-- ----------------------------
-- Table structure for library
-- ----------------------------
DROP TABLE IF EXISTS `library`;
CREATE TABLE `library` (
  `library_id` int(8) NOT NULL,
  `library_pwd` varchar(18) DEFAULT NULL,
  PRIMARY KEY (`library_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of library
-- ----------------------------
INSERT INTO `library` VALUES ('111111', '111111');
INSERT INTO `library` VALUES ('123123', '123123');
INSERT INTO `library` VALUES ('123456', '123456');

-- ----------------------------
-- Table structure for library_info
-- ----------------------------
DROP TABLE IF EXISTS `library_info`;
CREATE TABLE `library_info` (
  `library_id` int(8) NOT NULL AUTO_INCREMENT,
  `library_name` varchar(32) DEFAULT NULL,
  `library_address` varchar(100) DEFAULT NULL,
  `librarian_name` varchar(16) DEFAULT NULL,
  `librarian_sex` varchar(4) DEFAULT NULL,
  `librarian_phone` varchar(11) DEFAULT NULL,
  `librarian_email` varchar(40) DEFAULT NULL,
  `librarian_status` int(1) DEFAULT '0',
  `total_paid` double(16,0) DEFAULT '0',
  PRIMARY KEY (`library_id`)
) ENGINE=InnoDB AUTO_INCREMENT=123459 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of library_info
-- ----------------------------
INSERT INTO `library_info` VALUES ('111111', '大石图书馆', '番禺区大石街朝阳东路232号', '张小源', '女', '18814698878', '18814698878@163.com', '1', '0');
INSERT INTO `library_info` VALUES ('123123', '白云图书馆', '白云区机场路1035号', '麻小劲', '男', '17894561324', '17894561324@163.com', '1', '0');
INSERT INTO `library_info` VALUES ('123456', '广州图书馆', '天河区X街XXX号', '小黄', '女', '18467984879', '18467984879@163.com', '1', '0');
INSERT INTO `library_info` VALUES ('123457', '番禺图书馆', '请问', 'sad ', 'das', '123213', '1234567', '1', '0');
INSERT INTO `library_info` VALUES ('123458', '番禺图书馆123', '123', 'sad ', 'das', '52513', '1234567', '1', '0');

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `message_id` int(8) NOT NULL AUTO_INCREMENT,
  `user_id` int(8) DEFAULT NULL,
  `lirbrary_id` int(8) DEFAULT NULL,
  `message_context` varchar(255) DEFAULT NULL,
  `message_status` int(1) DEFAULT '1',
  `message_time` date DEFAULT NULL,
  PRIMARY KEY (`message_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES ('1', '1', '123456', '你好', '1', null);

-- ----------------------------
-- Table structure for paid_record
-- ----------------------------
DROP TABLE IF EXISTS `paid_record`;
CREATE TABLE `paid_record` (
  `paid_id` int(8) NOT NULL AUTO_INCREMENT,
  `return_id` int(8) DEFAULT NULL,
  `paid` double DEFAULT NULL,
  PRIMARY KEY (`paid_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of paid_record
-- ----------------------------

-- ----------------------------
-- Table structure for reserve_record
-- ----------------------------
DROP TABLE IF EXISTS `reserve_record`;
CREATE TABLE `reserve_record` (
  `reserve_id` int(8) NOT NULL AUTO_INCREMENT,
  `borrow_id` int(8) DEFAULT NULL,
  `reserve_time` date DEFAULT NULL,
  `reserve_status` int(1) DEFAULT '1',
  `borrow_time` date DEFAULT NULL,
  PRIMARY KEY (`reserve_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reserve_record
-- ----------------------------
INSERT INTO `reserve_record` VALUES ('1', '1', '2019-11-07', '1', null);
INSERT INTO `reserve_record` VALUES ('2', '5', '2019-11-14', '1', null);
INSERT INTO `reserve_record` VALUES ('3', '7', '2019-11-15', '1', null);
INSERT INTO `reserve_record` VALUES ('4', '9', '2019-11-15', '1', null);

-- ----------------------------
-- Table structure for return_record
-- ----------------------------
DROP TABLE IF EXISTS `return_record`;
CREATE TABLE `return_record` (
  `return_id` int(8) NOT NULL AUTO_INCREMENT,
  `user_id` int(8) DEFAULT NULL,
  `book_id` int(8) DEFAULT NULL,
  `fine_paid` double(16,2) DEFAULT NULL,
  `borrow_time` date DEFAULT NULL,
  `return_time` date DEFAULT NULL,
  PRIMARY KEY (`return_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of return_record
-- ----------------------------
INSERT INTO `return_record` VALUES ('1', '2', '1', '1.00', '2019-11-06', '2019-11-08');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(8) NOT NULL AUTO_INCREMENT,
  `username` varchar(11) DEFAULT NULL,
  `user_pwd` varchar(18) DEFAULT NULL,
  `user_status` int(4) DEFAULT '1',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '123', '123', '0');
INSERT INTO `user` VALUES ('2', '123456', '123456', '0');
INSERT INTO `user` VALUES ('11', '978', '123456', '1');
INSERT INTO `user` VALUES ('12', '978', '123456', '1');
INSERT INTO `user` VALUES ('13', '5464', '123456', '1');

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `user_id` int(8) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(20) DEFAULT NULL,
  `user_sex` varchar(4) DEFAULT NULL,
  `user_address` varchar(100) DEFAULT NULL,
  `user_phone` varchar(11) DEFAULT NULL,
  `user_age` int(4) DEFAULT NULL,
  `user_email` varchar(30) DEFAULT NULL,
  `user_id_card` varchar(20) DEFAULT NULL,
  `font_of_card` varchar(255) DEFAULT NULL,
  `back_of_card` varchar(255) DEFAULT NULL,
  `borrow_count` int(8) DEFAULT '0',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_phone` (`user_phone`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('1', '小明', '男', '广州天河元岗路白云小区三街4栋805', '18647895487', '20', '18647895487@163.com', '440982205487458746', null, null, '0');
INSERT INTO `user_info` VALUES ('2', '小黄daaa', '男', '广州天河元岗路白云小区三街4栋805', '18627895487', '20', '18647895487@163.com', '440982204487458746', null, null, '0');
INSERT INTO `user_info` VALUES ('11', '789', '7', '7898796', '78978', '78987', '789879', '87978', null, null, '0');
INSERT INTO `user_info` VALUES ('12', '456', '6', '345', '34656', '45645', '345', '456', null, null, '0');
INSERT INTO `user_info` VALUES ('13', '3246', '4', '146', '3246', '16', '646', '143', null, null, '0');

-- ----------------------------
-- Table structure for user_manage
-- ----------------------------
DROP TABLE IF EXISTS `user_manage`;
CREATE TABLE `user_manage` (
  `user_id` int(8) NOT NULL AUTO_INCREMENT,
  `user_balance` double(18,0) DEFAULT NULL,
  `user_status` int(1) DEFAULT '1',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_manage
-- ----------------------------
INSERT INTO `user_manage` VALUES ('1', '5', '3');
INSERT INTO `user_manage` VALUES ('2', '0', '1');
INSERT INTO `user_manage` VALUES ('11', '23', '1');
INSERT INTO `user_manage` VALUES ('12', '12', '1');
INSERT INTO `user_manage` VALUES ('13', '24', '1');
