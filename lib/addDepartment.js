const connection = require('../db/connection');
const inquirer = require('inquirer');

const addDepartment= () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the department?'
        }
    ])

.then((answer) => {
let sql = `INSERT INTO department (id, name)
 VALUES (id, ?)`;

connection.query(sql, answer.departmentName, (error, response) => {
    if (error) 
        return console.error(error.message);
    console.log();
    console.log(answer.departmentName + ` Department successfully created!`);
    console.log();
  });
})};

module.exports = addDepartment;


