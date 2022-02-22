DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL;
);

CREATE TABLE employee_role (
  id INT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (employee_role_id)
  REFERENCES employee_role(id)
  ON DELETE SET NULL,
  FOREIGN KEY (employee_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
);
