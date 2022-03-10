USE employees_db;

INSERT INTO department (dep_name)
VALUES ('Engineering'), ('Finance'), ('Legal'), ('Sales');

INSERT INTO roles(title, department_id, salary)
VALUES('Sales Lead', 4, 100000),
('Salesperson', 4, 80000),
('Lead Engineer', 1, 150000),
('Software Engineer', 1, 120000),
('Account Manager', 2, 160000),
('Accountant', 2, 125000),
('Legal Team Lead', 3, 250000),
('Lawyer', 3, 190000);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
('Samuel', 'L. Jackson', 3, NULL),
('Mark', 'Ruffalo', 4, 1),
('Robert', 'Downey Jr.', 4,1),
('Scarlett', 'Johansson', 1, 1),
('Chris', 'Evans', 1, 1),
('Chris', 'Hemsworth', 2, 1),
('Benedict', 'Cumberbatch', 2, 1),
('Elizabeth', 'Olsen', 3, 1),
('Jeremy', 'Renner', 3, 1);


