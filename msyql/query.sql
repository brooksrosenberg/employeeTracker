
--Manager
SELECT
CONCAT (manager.first_name, " ", manager.last_name) AS manager
FROM employee
LEFT JOIN employee manager ON employee.manager_id = manager.id;

--roles
SELECT roles.id, roles.title, department.dep_name, roles.salary
FROM roles
JOIN department
ON roles.department_id=department.id;

--Employees
SELECT employee.id, employee.first_name, employee.last_name,roles.title,department.dep_name, roles.salary,
CONCAT (manager.first_name, " ", manager.last_name) AS manager
FROM employee
LEFT JOIN roles ON employee.role_id = roles.id
LEFT JOIN department ON roles.department_id = department.id
LEFT JOIN employee manager ON employee.manager_id = manager.id




