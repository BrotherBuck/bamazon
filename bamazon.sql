CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
itemId INT NOT NULL AUTO_INCREMENT,
productName VARCHAR(45) NULL,
deptName VARCHAR(45) NULL,
price INTEGER(6),
quanity INTEGER(6),
PRIMARY KEY (`itemId`));

INSERT INTO products (itemId,productName,deptName,price) VALUES ('001','frisbee','sports','5.00','100');
INSERT INTO products (itemId,productName,deptName,price) VALUES ('002','widget','fantasy','10.00','50');
INSERT INTO products (itemId,productName,deptName,price) VALUES ('003','radio','electronics','20.00','25');
INSERT INTO products (itemId,productName,deptName,price) VALUES ('004','phone','electronics','100.00','15');
INSERT INTO products (itemId,productName,deptName,price) VALUES ('005','fan','electronics','15.00','75');
INSERT INTO products (itemId,productName,deptName,price) VALUES ('006','jsBook','learning','35.00','25');
INSERT INTO products (itemId,productName,deptName,price) VALUES ('007','toyCar','toys','5.00','100');
INSERT INTO products (itemId,productName,deptName,price) VALUES ('008','pen','stationary','1.00','100');
INSERT INTO products (itemId,productName,deptName,price) VALUES ('009','copyPaper','stationary','10.00','75');
INSERT INTO products (itemId,productName,deptName,price) VALUES ('010','kite','toys','10.00','35');