SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--create table for lectures
CREATE TABLE `lectures` (
  `ID` int(11) NOT NULL,
  `title` varchar(35) NOT NULL,
  `author` varchar(65) NOT NULL,
  `availability` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--insert values into lectures table 
INSERT INTO `lectures` (`ID`, `title`, `author`, `availability`) VALUES
(1, 'Kordian', 'Juliusz Slowacki', 'available'),
(2, 'Wesele', 'Stanislaw Wyspianski', 'available'),
(3, 'Ch?opi', 'Wladyslaw Stanislaw Reymont', 'unavailable'),
(4, 'Pan Tadeusz', 'Adam Mickiewicz', 'available');

--create table for epics
CREATE TABLE `epics` (
  `ID` int(11) NOT NULL,
  `title` varchar(65) NOT NULL,
  `author` varchar(65) NOT NULL,
  `availability` varchar(65) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--insert values into epics table
INSERT INTO `epics` (`ID`, `title`, `author`, `availability`) VALUES
(1, 'Wieza Jaskólki', 'Andrzej Sapkowski', 'available'),
(2, 'Krew Elfów', 'Andrzej Sapkowski', 'available'),
(3, 'Chrzest Ognia', 'Andrzej Sapkowski', 'unavailable'),
(4, 'Pani Jeziora', 'Andrzej Sapkowski', 'available');

--adding primary key
ALTER TABLE `lectures`
  ADD PRIMARY KEY (`ID`);

ALTER TABLE `epics`
  ADD PRIMARY KEY (`ID`);

--setting the columns to be NOT NULL and auto-incrementing from 5 onwards
ALTER TABLE `lectures`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;


ALTER TABLE `epics`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;
