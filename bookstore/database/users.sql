--creating table users
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(80) NOT NULL,
  `name` varchar(80) NOT NULL,
  `password` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--inserting values into table
INSERT INTO `users` (`id`, `username`, `name`, `password`) VALUES
(1, 'test', 'test', 'test'),
(2, 'yssyogesh', 'Yogesh Singh', '12345'),
(3, 'bsonarika', 'Sonarika Bhadoria', '12345'),
(4, 'vishal', 'Vishal Sahu', '12345'),
(5, 'vijay', 'Vijay mourya', '12345');
