const connection = require('../db/connection');
const inquirer = require('inquirer');

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeFirstName',
            message: "What is the employee's first name?"
        },
        {
            type: 'input',
            name: 'employeeLastName',
            message: "What is the employee's last name?"
        },
        {
            type: 'list',
            name: 'employeeRole',
            message: "What is the employee's role?",
            choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
        },
        {
            type: 'list',
            name: 'employeeManager',
            message: "Who is the employee's manager?",
            choices: [ 'None', 'Mark Ruffalo', 'Robert Downey Jr.', 'Scarlett Johansson', 'Chris Evans', 'Chris Hemsworth', 'Benedict Cumberbatch', 'Elizabeth Olsen', 'Jeremy Renner', 'Samuel L. Jackson']
        }
    ])
.then((answer) => {
let sql = `INSERT INTO employee (id, first_name, last_name, title, department_id, salary, manager)
 VALUES (id, ?, ?, ?, department_id, salary, ?)`;

connection.query(sql, answer.employeeName, (error, response) => {
    if (error) 
        return console.error(error.message);
    console.log();
    console.log(answer.employeeName + ` Employee successfully created!`);
    console.log();
  });
})};

module.exports = addEmployee;


