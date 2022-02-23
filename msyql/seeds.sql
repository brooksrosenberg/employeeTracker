INSERT INTO department(name)
VALUES ('Engineering'), ('Finance'), ('Legal'), ('Sales');

INSERT INTO employee_role(id, title, department_id, salary)
VALUES(1, 'Sales Lead', 'Sales', 100000),
(2, 'Salesperson', 'Sales', 80000),
(3, 'Lead Engineer', 'Engineering', 150000),
(4, 'Software Engineer', 'Engineering', 120000),
(5, 'Account Manager', 'Finance', 160000),
(6, 'Accountant', 'Finance', 125000),
(7, 'Legal Team Lead', 'Legal', 250000),
(8, 'Lawyer', 'Legal', 190000);

INSERT INTO employee(id, first_name, title, department_id, salary, manager)
VALUES(1, 'Mark', 'Ruffalo', 'Sales Lead', 'Sales', 100000, 'Samuel L. Jackson'),
(2, ' Robert', 'Downey Jr.', 'Salesperson', 'Sales', 80000, 'Samuel L. Jackson'),
(3, 'Scarlett', 'Johansson', 'Lead Engineer', 'Engineering', 150000, 'Samuel L. Jackson'),
(4, 'Chris', 'Evans', 'Software Engineer', 'Engineering', 120000, 'Samuel L. Jackson'),
(5, 'Chris', 'Hemsworth', 'Account Manager', 'Finance', 160000, 'Samuel L. Jackson'),
(6, 'Benedict', 'Cumberbatch', 'Accountant', 'Finance', 125000, 'Samuel L. Jackson'),
(7, 'Elizabeth', 'Olsen', 'Legal Team Lead', 'Legal', 250000, 'Samuel L. Jackson'),
(8, 'Jeremy', 'Renner', 'Lawyer', 'Legal', 250000, 'Samuel L. Jackson');
(9, 'Samuel', 'L. Jackson', 'Lawyer', 'Legal', 250000, 'null')
