CREATE DATABASE omelettes_db;

USE omelettes_db;

CREATE TABLE omelettes (
id int NOT NULL AUTO_INCREMENT,
omelette_name varchar(80),
devoured boolean,
date TIMESTAMP,
PRIMARY KEY (id)
);