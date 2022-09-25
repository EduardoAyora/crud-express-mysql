CREATE TABLE `empleado`
(
  `id`            INT(11) NOT NULL auto_increment,
  `nombre`          VARCHAR(255) NOT NULL ,
  `cedula`          VARCHAR(10) NOT NULL ,
  `titulo` VARCHAR(255) NOT NULL ,
  `departamento` int ,
  PRIMARY KEY (`id`),
  FOREIGN KEY (departamento) REFERENCES departamento(id)
);

CREATE TABLE `departamento`
(
  `id`            INT(11) NOT NULL auto_increment,
  `nombre`          VARCHAR(255) NOT NULL ,
  PRIMARY KEY (`id`)
);