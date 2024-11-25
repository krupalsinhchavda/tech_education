-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2024 at 06:03 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
--

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE `branch` (
  `BranchId` int(10) UNSIGNED NOT NULL,
  `BranchName` varchar(50) NOT NULL,
  `IsActive` tinyint(1) NOT NULL DEFAULT 1,
  `CreatedOn` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `branch`
--

INSERT INTO `branch` (`BranchId`, `BranchName`, `IsActive`, `CreatedOn`) VALUES
(1, 'Naroda', 1, '2024-02-10'),
(2, 'NobalNagar', 1, '2024-02-10'),
(3, 'MeghaniNagar', 1, '2024-02-10'),
(4, 'Nana-Chiloda', 1, '2024-02-10');

-- --------------------------------------------------------

--
-- Table structure for table `branchadmin`
--

CREATE TABLE `branchadmin` (
  `BranchAdminID` int(10) UNSIGNED NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `PhoneNumber` bigint(20) UNSIGNED NOT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Email` varchar(100) NOT NULL,
  `Image` varchar(255) DEFAULT NULL,
  `UserName` varchar(50) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `IsActive` tinyint(1) NOT NULL DEFAULT 1,
  `BranchID` int(10) UNSIGNED NOT NULL,
  `RoleId` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `CourseId` int(10) UNSIGNED NOT NULL,
  `CourseName` varchar(55) NOT NULL,
  `IsActive` tinyint(1) NOT NULL DEFAULT 1,
  `IsDeleted` tinyint(1) NOT NULL DEFAULT 0,
  `CreatedOn` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`CourseId`, `CourseName`, `IsActive`, `IsDeleted`, `CreatedOn`) VALUES
(1, 'M.S. Office', 1, 0, '2024-02-11 19:00:37'),
(2, 'D.T.P', 1, 0, '2024-02-11 19:00:37'),
(3, 'Internet', 1, 0, '2024-02-11 19:00:37'),
(4, 'Tally ERP 9 with GST', 1, 0, '2024-02-11 19:00:37'),
(5, 'Digital Marketing', 1, 0, '2024-02-11 19:00:37'),
(6, 'Basic Computer Knowledge', 1, 0, '2024-02-11 19:00:37'),
(7, 'Typing (Hindi, English, Gujarati)', 1, 0, '2024-02-11 19:00:37'),
(8, 'CoralDraw', 1, 0, '2024-02-11 19:00:37'),
(9, 'Photoshop', 1, 0, '2024-02-11 19:00:37'),
(10, 'C Language', 1, 0, '2024-02-11 19:00:37'),
(11, 'C++ Language', 1, 0, '2024-02-11 19:00:37'),
(12, 'Java Language', 1, 0, '2024-02-11 19:00:37'),
(13, 'Python Language', 1, 0, '2024-02-11 19:00:37'),
(14, 'DCA (Diploma In Computer Application)', 1, 0, '2024-02-11 19:00:37'),
(15, 'ADCA (Advance Diploma In Computer Application)', 1, 0, '2024-02-11 19:00:37'),
(16, 'PGDCA (Post Graduation Diploma In Computer Application)', 1, 0, '2024-02-11 19:00:37'),
(17, 'Spoken English Course', 1, 0, '2024-02-11 19:00:37'),
(18, 'Certificate In Teacher Training', 1, 0, '2024-02-11 19:00:37');

-- --------------------------------------------------------

--
-- Table structure for table `examformdetails`
--

CREATE TABLE `examformdetails` (
  `ExamId` int(10) UNSIGNED NOT NULL,
  `ExamName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fees`
--

CREATE TABLE `fees` (
  `FeesId` int(10) UNSIGNED NOT NULL,
  `RegNo` int(10) UNSIGNED NOT NULL,
  `CourseId` int(10) UNSIGNED NOT NULL,
  `BranchId` int(10) UNSIGNED NOT NULL,
  `Amount` decimal(10,2) NOT NULL,
  `CreatedOn` datetime NOT NULL DEFAULT current_timestamp(),
  `ModifiedOn` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `qualificationdetails`
--

CREATE TABLE `qualificationdetails` (
  `QualificationDetailsId` int(10) UNSIGNED NOT NULL,
  `StudentId` int(10) UNSIGNED NOT NULL,
  `Board` varchar(100) DEFAULT NULL,
  `Grade` varchar(10) DEFAULT NULL,
  `PassingYear` smallint(4) DEFAULT NULL,
  `QualificationImage` varchar(255) DEFAULT NULL,
  `CreatedOn` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `registeredstudents`
--

CREATE TABLE `registeredstudents` (
  `StudentId` int(10) UNSIGNED NOT NULL,
  `FormNo` int(10) UNSIGNED NOT NULL,
  `CenRegNo` int(10) UNSIGNED NOT NULL,
  `AdmissionDate` date NOT NULL,
  `CourseID` int(10) UNSIGNED NOT NULL,
  `RoleId` int(10) UNSIGNED NOT NULL,
  `BranchId` int(10) UNSIGNED NOT NULL,
  `RegFees` decimal(10,2) NOT NULL,
  `Surname` varchar(50) DEFAULT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `SonOfDaughterOf` varchar(100) DEFAULT NULL,
  `BirthDate` date NOT NULL,
  `GenderId` tinyint(3) UNSIGNED NOT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `City` varchar(100) DEFAULT NULL,
  `State` varchar(50) DEFAULT NULL,
  `Pincode` int(10) UNSIGNED NOT NULL,
  `MobileNumber` bigint(20) UNSIGNED NOT NULL,
  `AlternateMobileNumber` bigint(20) UNSIGNED DEFAULT NULL,
  `CreatedOn` datetime NOT NULL DEFAULT current_timestamp(),
  `IsActive` tinyint(1) NOT NULL DEFAULT 1,
  `IsDeleted` tinyint(1) NOT NULL DEFAULT 0,
  `Password` varchar(255) NOT NULL,
  `StudentImage` varchar(255) DEFAULT NULL,
  `CourseStartDate` date NOT NULL,
  `CourseEndDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `RoleId` int(10) UNSIGNED NOT NULL,
  `RoleName` varchar(50) NOT NULL,
  `IsActive` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `studentexamdetails`
--

CREATE TABLE `studentexamdetails` (
  `StudentExamDetailsId` int(10) UNSIGNED NOT NULL,
  `StudentId` int(10) UNSIGNED NOT NULL,
  `CorrectAnswers` tinyint(3) UNSIGNED NOT NULL,
  `TotalMarks` tinyint(3) UNSIGNED NOT NULL,
  `Grade` varchar(4) NOT NULL,
  `ExamDate` date NOT NULL,
  `CreatedOn` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserID` int(10) UNSIGNED NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `PhoneNumber` varchar(15) NOT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `UserName` varchar(50) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `RoleId` tinyint(3) UNSIGNED DEFAULT NULL,
  `IsActive` tinyint(1) DEFAULT 1,
  `IsDeleted` tinyint(1) DEFAULT 0,
  `CreatedOn` datetime DEFAULT current_timestamp(),
  `ModifiedOn` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `CreatedBy` varchar(50) DEFAULT NULL,
  `ModifiedBy` varchar(50) DEFAULT NULL,
  `BranchId` tinyint(3) UNSIGNED DEFAULT NULL,
  `ProfilePicture` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `youtubebanner`
--

CREATE TABLE `youtubebanner` (
  `BannerId` int(10) UNSIGNED NOT NULL,
  `Url` varchar(255) DEFAULT NULL,
  `createdOn` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`BranchId`);

--
-- Indexes for table `branchadmin`
--
ALTER TABLE `branchadmin`
  ADD PRIMARY KEY (`BranchAdminID`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `UserName` (`UserName`),
  ADD KEY `BranchID` (`BranchID`),
  ADD KEY `RoleId` (`RoleId`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`CourseId`);

--
-- Indexes for table `examformdetails`
--
ALTER TABLE `examformdetails`
  ADD PRIMARY KEY (`ExamId`);

--
-- Indexes for table `fees`
--
ALTER TABLE `fees`
  ADD PRIMARY KEY (`FeesId`),
  ADD KEY `CourseId` (`CourseId`),
  ADD KEY `BranchId` (`BranchId`);

--
-- Indexes for table `qualificationdetails`
--
ALTER TABLE `qualificationdetails`
  ADD PRIMARY KEY (`QualificationDetailsId`);

--
-- Indexes for table `registeredstudents`
--
ALTER TABLE `registeredstudents`
  ADD PRIMARY KEY (`StudentId`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`RoleId`);

--
-- Indexes for table `studentexamdetails`
--
ALTER TABLE `studentexamdetails`
  ADD PRIMARY KEY (`StudentExamDetailsId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `UserName` (`UserName`);

--
-- Indexes for table `youtubebanner`
--
ALTER TABLE `youtubebanner`
  ADD PRIMARY KEY (`BannerId`),
  ADD UNIQUE KEY `Url` (`Url`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `branch`
--
ALTER TABLE `branch`
  MODIFY `BranchId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `branchadmin`
--
ALTER TABLE `branchadmin`
  MODIFY `BranchAdminID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `CourseId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `examformdetails`
--
ALTER TABLE `examformdetails`
  MODIFY `ExamId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fees`
--
ALTER TABLE `fees`
  MODIFY `FeesId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `qualificationdetails`
--
ALTER TABLE `qualificationdetails`
  MODIFY `QualificationDetailsId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registeredstudents`
--
ALTER TABLE `registeredstudents`
  MODIFY `StudentId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `RoleId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `studentexamdetails`
--
ALTER TABLE `studentexamdetails`
  MODIFY `StudentExamDetailsId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `youtubebanner`
--
ALTER TABLE `youtubebanner`
  MODIFY `BannerId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `branchadmin`
--
ALTER TABLE `branchadmin`
  ADD CONSTRAINT `branchadmin_ibfk_1` FOREIGN KEY (`BranchID`) REFERENCES `branch` (`BranchId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `branchadmin_ibfk_2` FOREIGN KEY (`RoleId`) REFERENCES `roles` (`RoleId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `fees`
--
ALTER TABLE `fees`
  ADD CONSTRAINT `fees_ibfk_1` FOREIGN KEY (`CourseId`) REFERENCES `course` (`CourseId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fees_ibfk_2` FOREIGN KEY (`BranchId`) REFERENCES `branch` (`BranchId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
