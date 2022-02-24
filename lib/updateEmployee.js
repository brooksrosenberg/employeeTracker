const connection = require('../db/connection');
const inquirer = require('inquirer');

const updateEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the department?'
        }
    ])

        .then((answer) => {
            let sql = `UPDATE employee
           SET title = 'someVal'
           WHERE name IN (SELECT name FROM employee)`;

            let data = [false, 1];

            // execute the UPDATE statement
            connection.query(sql, data, (error, results, fields) => {
                if (error) {
                    return console.error(error.message);
                }
                console.log('Rows affected:', results.affectedRows);
            });
        })
};

module.exports = updateEmployee;


