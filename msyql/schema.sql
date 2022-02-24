DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL;
);

CREATE TABLE employee_role (
  id INT NOT NULL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  salary DECIMAL,
  department_id VARCHAR(50),
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  title VARCHAR(50) NOT NULL,
  role_id VARCHAR(50) NOT NULL,
  salary DECIMAL,
  manager_id VARCHAR (30),
  FOREIGN KEY (employee_role_id)
  REFERENCES employee_role(id)
  ON DELETE SET NULL,
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
);
