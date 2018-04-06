/*
Navicat MySQL Data Transfer

Source Server         : teacher
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : teacher

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2018-04-06 19:31:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ability
-- ----------------------------
DROP TABLE IF EXISTS `ability`;
CREATE TABLE `ability` (
  `major` int(255) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `strain` int(255) DEFAULT NULL,
  `innovate` int(255) DEFAULT NULL,
  `link` int(255) DEFAULT NULL,
  `student` int(255) DEFAULT NULL,
  `resist` int(255) DEFAULT NULL,
  KEY `idability` (`userid`),
  CONSTRAINT `idability` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ability
-- ----------------------------
INSERT INTO `ability` VALUES ('8900', '1', '8600', '7800', '8600', '9200', '9500');

-- ----------------------------
-- Table structure for attend
-- ----------------------------
DROP TABLE IF EXISTS `attend`;
CREATE TABLE `attend` (
  `userid` int(255) NOT NULL COMMENT '考勤',
  `date` date NOT NULL,
  `uptime` time DEFAULT NULL,
  `downtime` time DEFAULT NULL,
  `ifallday` int(5) NOT NULL DEFAULT '0',
  `reason` varchar(255) DEFAULT NULL,
  `shensu` varchar(255) DEFAULT NULL,
  `attendid` int(255) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`attendid`),
  KEY `userid` (`userid`),
  CONSTRAINT `idattend` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of attend
-- ----------------------------
INSERT INTO `attend` VALUES ('1', '2017-12-02', '08:30:00', '17:30:00', '2', '迟到', '家中有事', '1');
INSERT INTO `attend` VALUES ('1', '2017-12-03', '08:30:00', '17:30:00', '1', '', null, '2');
INSERT INTO `attend` VALUES ('1', '2017-12-04', '08:30:00', '17:30:00', '1', '', null, '3');
INSERT INTO `attend` VALUES ('1', '2017-12-05', '08:30:00', '17:30:00', '2', '早退', '身体不适', '4');
INSERT INTO `attend` VALUES ('1', '2017-12-06', '08:30:00', '17:30:00', '1', '', null, '5');
INSERT INTO `attend` VALUES ('1', '2017-12-07', '08:30:00', '17:30:00', '1', '', null, '6');
INSERT INTO `attend` VALUES ('1', '2017-12-08', '08:30:00', '17:30:00', '1', '', null, '7');
INSERT INTO `attend` VALUES ('1', '2017-12-09', '08:30:00', '17:30:00', '0', '旷工', null, '8');
INSERT INTO `attend` VALUES ('1', '2017-12-10', '08:30:00', '17:30:00', '1', '', null, '9');
INSERT INTO `attend` VALUES ('1', '2017-12-11', '08:30:00', '17:30:00', '1', '', null, '10');
INSERT INTO `attend` VALUES ('1', '2017-12-12', '08:30:00', '17:30:00', '0', '迟到', null, '11');
INSERT INTO `attend` VALUES ('1', '2017-12-13', '08:30:00', '17:30:00', '1', '', null, '12');
INSERT INTO `attend` VALUES ('1', '2017-12-14', '08:30:00', '17:30:00', '1', '', null, '13');
INSERT INTO `attend` VALUES ('1', '2017-12-15', '08:30:00', '17:30:00', '1', '', null, '14');
INSERT INTO `attend` VALUES ('1', '2017-12-16', '08:30:00', '17:30:00', '1', '', null, '15');
INSERT INTO `attend` VALUES ('1', '2017-12-17', '08:30:00', '17:30:00', '1', '', null, '16');
INSERT INTO `attend` VALUES ('1', '2017-12-18', '08:30:00', '17:30:00', '1', '', null, '17');
INSERT INTO `attend` VALUES ('1', '2017-12-19', '08:30:00', '17:30:00', '1', '', null, '18');
INSERT INTO `attend` VALUES ('1', '2017-12-20', '08:30:00', '17:30:00', '1', '', null, '19');
INSERT INTO `attend` VALUES ('1', '2017-12-21', '08:30:00', '17:30:00', '1', '', null, '20');

-- ----------------------------
-- Table structure for class
-- ----------------------------
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `userid` int(255) NOT NULL COMMENT '课程表',
  `classname` varchar(255) NOT NULL DEFAULT '',
  `date` varchar(255) DEFAULT NULL,
  `starttime` time DEFAULT NULL,
  `endtime` time DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `student` varchar(255) DEFAULT NULL,
  KEY `idclass` (`userid`),
  CONSTRAINT `idclass` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of class
-- ----------------------------
INSERT INTO `class` VALUES ('1', '高等数学', '2018-04-12', '14:30:00', '16:00:00', '01A-101', '计算机科学与技术');
INSERT INTO `class` VALUES ('1', '高等数学', '2018-04-16', '14:30:00', '16:00:00', '01A-103', '软件工程');
INSERT INTO `class` VALUES ('1', '高等数学', '2018-04-17', '14:31:00', '16:00:00', '01A-104', '嵌入式开发');
INSERT INTO `class` VALUES ('1', '高等数学', '2018-04-18', '14:30:00', '16:00:00', '01A-103', '软件工程');
INSERT INTO `class` VALUES ('1', '高等数学', '2018-04-24', '14:30:00', '16:00:00', '01A-101', '计算机科学与技术');
INSERT INTO `class` VALUES ('1', '高等数学', '2018-04-15', '14:30:00', '16:00:00', '01A-101', '计算机科学与技术');
INSERT INTO `class` VALUES ('1', '高等数学', '2018-04-30', '14:30:00', '16:00:00', '01A-101', '计算机科学与技术');
INSERT INTO `class` VALUES ('1', '高等数学a', '2018-05-13', '14:30:00', '16:00:00', '01A-101', '计算机科学与技术');
INSERT INTO `class` VALUES ('1', '高等数学', '2018-05-09', '14:30:00', '16:00:00', '01A-101', '计算机科学与技术');
INSERT INTO `class` VALUES ('1', '高等数学a', '2018-05-15', '14:30:00', '16:00:00', '01A-101', '计算机科学与技术');

-- ----------------------------
-- Table structure for info
-- ----------------------------
DROP TABLE IF EXISTS `info`;
CREATE TABLE `info` (
  `userid` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `brithday` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `nation` varchar(255) DEFAULT NULL,
  `political` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `nianjia` varchar(255) DEFAULT NULL,
  `gonghao` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`,`userid`),
  KEY `idinfo` (`userid`),
  CONSTRAINT `idinfo` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `nameinfo` FOREIGN KEY (`username`) REFERENCES `user` (`usename`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of info
-- ----------------------------
INSERT INTO `info` VALUES ('1', '李皓', '1989-07-20', '河南省郑州市金水区', '15638865599', null, '汉族', '党员', '高级教师', '15', '17017', '男');

-- ----------------------------
-- Table structure for leave
-- ----------------------------
DROP TABLE IF EXISTS `leave`;
CREATE TABLE `leave` (
  `userid` int(11) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `starttime` varchar(255) NOT NULL,
  `reason` varchar(255) NOT NULL,
  `endtime` varchar(255) DEFAULT NULL,
  `leaveid` int(255) NOT NULL AUTO_INCREMENT,
  `zhuangtai` int(255) NOT NULL DEFAULT '1',
  PRIMARY KEY (`leaveid`),
  KEY `idleave` (`userid`),
  CONSTRAINT `idleave` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of leave
-- ----------------------------
INSERT INTO `leave` VALUES ('1', '2017-12-13', '08:00:00', '生病', '17:30:00', '1', '3');
INSERT INTO `leave` VALUES ('1', '2017-12-14', '08:00:00', '家中有事', '17:30:00', '2', '0');
INSERT INTO `leave` VALUES ('1', '2017-12-15', '08:00:00', '堵车', '08:30:00', '3', '1');
INSERT INTO `leave` VALUES ('1', '2017-12-16', '08:00:00', '家中有事', '17:30:00', '4', '2');
INSERT INTO `leave` VALUES ('1', '2017-12-17', '08:00:00', '生病', '17:30:00', '5', '0');
INSERT INTO `leave` VALUES ('1', '2018-01-04', '05:00:00', '生病', '20:00:00', '7', '0');
INSERT INTO `leave` VALUES ('1', '2018-01-03', '09:03:03', '路上有事情', '10:00:00', '8', '0');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `stuname` varchar(255) NOT NULL,
  `stucla` varchar(255) DEFAULT NULL,
  `stuphone` varchar(255) DEFAULT NULL,
  `stugrd` varchar(255) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `ifbiye` int(2) DEFAULT NULL,
  PRIMARY KEY (`stuname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('张华', '计算机科学与技术', '15769589663', '2016级', '1', '0');
INSERT INTO `student` VALUES ('李磊', '软件工程', '15769589634', '2016级', '1', '0');
INSERT INTO `student` VALUES ('王猛', '计算机科学与技术', '16965569874', '2015级', '1', '0');
INSERT INTO `student` VALUES ('赵明', '软件工程', '15366985532', '2015级', '1', '1');
INSERT INTO `student` VALUES ('陈露', '嵌入式开发', '13066998562', '2017级', '1', '0');

-- ----------------------------
-- Table structure for thesis
-- ----------------------------
DROP TABLE IF EXISTS `thesis`;
CREATE TABLE `thesis` (
  `title` varchar(255) NOT NULL DEFAULT '',
  `time` varchar(255) DEFAULT NULL,
  `book` varchar(255) DEFAULT NULL,
  `page` varchar(255) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  `userid` int(11) NOT NULL,
  `href` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`title`),
  KEY `userid` (`userid`) USING BTREE,
  CONSTRAINT `idthesis` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of thesis
-- ----------------------------
INSERT INTO `thesis` VALUES ('MOOC模式下的计算机教学', '2018-03-06', '杂志投稿', '8042字', '421', '1', 'http://www.zglww.net/jsjlw/cljslw/3770.html');
INSERT INTO `thesis` VALUES ('计算机在材料科学中的应用', '2018-04-06', '杂志投稿', '8000字', '52329', '1', 'http://www.zglww.net/jsjlw/jsjbytmlw/3799.html###');
INSERT INTO `thesis` VALUES ('计算机多媒体技术的应用', '2018-05-06', '杂志投稿', '7862字', '6544', '1', 'http://www.zglww.net/jsjlw/jsjgclw/3730.html');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `usename` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `userid` int(255) NOT NULL AUTO_INCREMENT,
  `usernum` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`userid`),
  KEY `usename` (`usename`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('李皓', '123456', '1', '17017');
INSERT INTO `user` VALUES ('周晓卉', '123456', '2', '17018');
INSERT INTO `user` VALUES ('褚涛宁', '123456', '3', '17019');
INSERT INTO `user` VALUES ('温瑶霖', '123456', '4', '17020');
INSERT INTO `user` VALUES ('解灵泉', '123456', '5', '17021');
INSERT INTO `user` VALUES ('吴洁', '123465', '6', '17022');

-- ----------------------------
-- Table structure for wages
-- ----------------------------
DROP TABLE IF EXISTS `wages`;
CREATE TABLE `wages` (
  `jiben` varchar(255) DEFAULT NULL,
  `shifa` varchar(255) DEFAULT NULL,
  `suodeshui` varchar(255) DEFAULT NULL,
  `wxyj` varchar(255) DEFAULT NULL,
  `qq` varchar(255) DEFAULT NULL,
  `userid` int(25) DEFAULT NULL,
  `jj` varchar(255) DEFAULT NULL,
  `time` varchar(255) NOT NULL,
  PRIMARY KEY (`time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wages
-- ----------------------------
INSERT INTO `wages` VALUES ('5000', '5000', '200', '500', '0', '1', '700', '2018-01');
INSERT INTO `wages` VALUES ('5000', '5000', '200', '500', '0', '1', '700', '2018-02');
INSERT INTO `wages` VALUES ('5000', '4800', '200', '500', '0', '1', '500', '2018-03');
INSERT INTO `wages` VALUES ('5000', '6300', '200', '500', '100', '1', '2100', '2018-04');
INSERT INTO `wages` VALUES ('5000', '6000', '200', '500', '0', '1', '1700', '2018-05');
INSERT INTO `wages` VALUES ('5000', '6700', '200', '500', '0', '1', '2400', '2018-06');
