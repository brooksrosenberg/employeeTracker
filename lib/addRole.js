const connection = require('../db/connection');
const inquirer = require('inquirer');

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'roleName',
            message: 'What is the name of the role?'
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'What is the salary of the role?'
        },
        {
            type: 'list',
            name: 'departmentType',
            message: 'Which department does the role belong to?',
            choices: ['Engineering', 'Finance', 'Legal', 'Sales']
        }
    ])
.then((answer) => {
let sql = `INSERT INTO employee_role (id, title, salary, department_id)
 VALUES (id, ?, ?, ?)`;

connection.query(sql, answer.employee_roleName, (error, response) => {
    if (error) 
        return console.error(error.message);
    console.log();
    console.log(answer.employee_roleName + ` Role successfully created!`);
    console.log();
  });
})};

module.exports = addRole;


