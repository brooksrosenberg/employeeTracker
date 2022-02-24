const fs = require('fs');
const inquirer = require('inquirer');
const CFonts = require('cfonts');

CFonts.say('Employee Manager', {
    font: 'block',              // define the font face
    align: 'left',              // define text alignment
    colors: ['system'],         // define all colors
    background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 1,           // define letter spacing
    lineHeight: 1,              // define the line height
    space: true,                // define if the output text should have empty lines on top and on the bottom
    maxLength: '0',             // define how many character can be on one line
    gradient: false,            // define your two gradient colors
    independentGradient: false, // define if you want to recalculate the gradient for each new line
    transitionGradient: false,  // define if this is a transition between colors directly
    env: 'node'                 // define the environment CFonts is being executed in
});

const addDepartment = require('./lib/addDepartment');
const addEmployee = require('./lib/addEmployee');
const addRole = require('./lib/addRole');
const updateEmployee = require('./lib/updateEmployee');
const viewDepartments = require('./lib/viewDepartments');
const viewEmployees = require('./lib/viewEmployees');
const viewRoles = require('./lib/viewRoles');

function init() {

    function openingQuestions() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'toDo',
                message: "What would you like to do? ",
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', "Add Department", "Quit"]

            }
        ]).then(function (data) {
            const role = data.toDo;
            console.log(data.toDo);
            // look into a switch case
            switch (role) {
                case "View All Employees":
                    return viewEmployees();
                    break;
                case "Add Employee":
                    return addEmployee();
                    break;
                case "Update Employee Role":
                    return updateEmployee();
                    break;
                case "View All Roles":
                    return viewRoles();
                    break;
                case "Add Role":
                    return addRole();
                    break;
                case "View All Departments":
                    return viewDepartments();
                    break;
                case "Add Department":
                    return addDepartment();
                    break;
            }
        })
    };


    openingQuestions();

}

init();