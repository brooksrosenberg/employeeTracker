const fs = require("fs");
const inquirer = require("inquirer");
const CFonts = require("cfonts");

CFonts.say("Employee Manager", {
  font: "block", // define the font face
  align: "left", // define text alignment
  colors: ["system"], // define all colors
  background: "transparent", // define the background color, you can also use `backgroundColor` here as key
  letterSpacing: 1, // define letter spacing
  lineHeight: 1, // define the line height
  space: true, // define if the output text should have empty lines on top and on the bottom
  maxLength: "0", // define how many character can be on one line
  gradient: false, // define your two gradient colors
  independentGradient: false, // define if you want to recalculate the gradient for each new line
  transitionGradient: false, // define if this is a transition between colors directly
  env: "node", // define the environment CFonts is being executed in
});

const connection = require("./db/connection");


function init() {

// opening questions
  function openingQuestions() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "toDo",
          message: "What would you like to do? ",
          choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Quit",
          ],
        },
      ])
      .then(function (data) {
        const role = data.toDo;
        console.log(data.toDo);
        // switch case to return the correct function based off of the user selection in the opening questions choices
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
          case "Quit":
            return quit();
            break;
        }
      });
  }

  //Functions

// Add department function
  const addDepartment = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "departmentName",
          message: "What is the name of the department?",
        },
      ])
//.then to insert department name into the databse
      .then((answer) => {
        let sql = `INSERT INTO department (dep_name)
     VALUES (?)`;

        connection.query(sql, answer.departmentName, (error, response) => {
          if (error) return console.error(error.message);
          console.log();
          console.log(
            answer.departmentName + ` Department successfully created!`
          );
          console.log();
        });
    // quit function to allow user to quit or continue back to the opening questions 
        quit();
      });
  };

  // add Employee function
  const addEmployee = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "employeeFirstName",
          message: "What is the employee's first name?",
        },
        {
          type: "input",
          name: "employeeLastName",
          message: "What is the employee's last name?",
        },
        {
          type: "list",
          name: "employeeRole",
          message: "What is the employee's role?",
          choices: [
            "Sales Lead",
            "Salesperson",
            "Lead Engineer",
            "Software Engineer",
            "Account Manager",
            "Accountant",
            "Legal Team Lead",
            "Lawyer",
          ],
        },
        {
          type: "list",
          name: "employeeManager",
          message: "Who is the employee's manager?",
          choices: [
            "None",
            "Mark Ruffalo",
            "Robert Downey Jr.",
            "Scarlett Johansson",
            "Chris Evans",
            "Chris Hemsworth",
            "Benedict Cumberbatch",
            "Elizabeth Olsen",
            "Jeremy Renner",
            "Samuel L. Jackson",
          ],
        },
      ])
// switch case to convert the user selection of an employee's role into a number so that the database can associate the role name with an employee with a key 
      .then((answer) => {
        switch (answer.employeeRole) {
          case "Sales Lead":
            answer.employeeRole = 1;
            break;
          case "Salesperson":
            answer.employeeRole = 2;
            break;
          case "Lead Engineer":
            answer.employeeRole = 3;
            break;
          case "Software Engineer":
            answer.employeeRole = 4;
            break;
          case "Account Manager":
            answer.employeeRole = 5;
            break;
          case "Accountant":
            answer.employeeRole = 6;
            break;
          case "Legal Team Lead":
            answer.employeeRole = 7;
            break;
          case "Lawyer":
            answer.employeeRole = 8;
            break;
        }
 // switch case to convert the user selection of an employee's manager into a number so that the database can associate the manager with an employee with a key 
        switch (answer.employeeManager) {
          case "None":
            answer.employeeManager = 1;
            break;
          case "Mark Ruffalo":
            answer.employeeManager = 2;
            break;
          case "Robert Downey Jr.":
            answer.employeeManager = 3;
            break;
          case "Scarlett Johansson":
            answer.employeeManager = 4;
            break;
          case "Chris Evans":
            answer.employeeManager = 5;
            break;
          case "Chris Hemsworth":
            answer.employeeManager = 6;
            break;
          case "Benedict Cumberbatch":
            answer.employeeManager = 7;
            break;
          case "Elizabeth Olsen":
            answer.employeeManager = 8;
            break;
          case "Jeremy Renner":
            answer.employeeManager = 9;
            break;
          case "Samuel L. Jackson":
            answer.employeeManager = 10;
            break;
        }
// tell database what values to insert into the employee table
        let sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
               VALUES (?, ?, ?, ?)`;

        connection.query(
          sql,
          [
            answer.employeeFirstName,
            answer.employeeLastName,
            answer.employeeRole,
            answer.employeeManager,
          ],
          (error, response) => {
            if (error) return console.error(error.message);
            console.log();
            console.log(
              answer.employeeFirstName,
              answer.employeeLastName,
              answer.employeeRole,
              answer.employeeManager + ` Employee successfully created!`
            );
            console.log();
          }
        );
 // quit function to allow user to quit or continue back to the opening questions 
        quit();
      });
  };

// Add role function
  function addRole() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "roleName",
          message: "What is the name of the role?",
        },
        {
          type: "input",
          name: "roleSalary",
          message: "What is the salary of the role?",
        },
        {
          type: "list",
          name: "departmentType",
          message: "Which department does the role belong to?",
          choices: ["Engineering", "Finance", "Legal", "Sales"],
        },
      ])
      .then((answer) => {
 // switch case to convert the user selection of an employee's department into a number so that the database can associate the department with a role with a key 
        switch (answer.departmentType) {
          case "Engineering":
            answer.departmentType = 1;
            break;
          case "Finance":
            answer.departmentType = 2;
            break;
          case "Legal":
            answer.departmentType = 3;
            break;
          case "Sales":
            answer.departmentType = 4;
            break;
        }
// tell database what values to insert into the roles table
        let sql = `INSERT INTO roles (title, salary, department_id)
     VALUES (?, ?, ?)`;
        connection.query(
          sql,
          [answer.roleName, answer.roleSalary, answer.departmentType],
          (error, response) => {
            if (error) return console.error(error.message);
            console.log();
            console.log(
              answer.roleName,
              answer.roleSalary,
              answer.departmentType,
              +` Role successfully created!`
            );
            console.log();
          }
        );
 // quit function to allow user to quit or continue back to the opening questions 
        quit();
      });
  }

  //view department function asking to display the entire department table
  function viewDepartments() {
    let sql = `SELECT * FROM department`;
    connection.query(sql, (error, results) => {
      if (results) {
        return console.table(results);
      } else {
        return console.error(error.message);
      }
    });
// quit function to allow user to quit or continue back to the opening questions 
    quit();
  }

// view roles function aksing to display the entire roles table
  function viewRoles() {
    let sql = `SELECT * FROM roles`;
    connection.query(sql, (error, results) => {
      if (results) {
        return console.table(results);
      } else {
        return console.error(error.message);
      };
    });
// quit function to allow user to quit or continue back to the opening questions 
    quit();
  }

// view employees function aksing to display the entire employees table
  function viewEmployees() {
    let sql = `SELECT * FROM employee`;
    connection.query(sql, (error, results) => {
      if (results) {
        return console.table(results);
      } else {
        return console.error(error.message);
      }
    });
// quit function to allow user to quit or continue back to the opening questions 
    quit();
  };

//update employee function
  const updateEmployee = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "updateEmployeeID",
          message: "Which employee's role would you like to update?",
          choices: [
            "Mark Ruffalo",
            "Robert Downey Jr.",
            "Scarlett Johansson",
            "Chris Evans",
            "Chris Hemsworth",
            "Benedict Cumberbatch",
            "Elizabeth Olsen",
            "Jeremy Renner",
            "Samuel L. Jackson",
          ],
        },
        {
          type: "list",
          name: "updateEmployeeRole",
          message: "Which role do you want to assign the selected employee?",
          choices: [
            "Sales Lead",
            "Salesperson",
            "Lead Engineer",
            "Software Engineer",
            "Account Manager",
            "Accountant",
            "Legal Team Lead",
            "Lawyer",
          ],
        },
      ])

      .then((answer) => {
// switch case to give each employee a number to be referenced by key when updating employee's role
        switch (answer.updateEmployeeID) {
          case "Mark Ruffalo":
            answer.updateEmployeeID = 1;
            break;
          case "Robert Downey Jr.":
            answer.updateEmployeeID = 2;
            break;
          case "Scarlett Johansson":
            answer.updateEmployeeID = 3;
            break;
          case "Chris Evans":
            answer.updateEmployeeID = 4;
            break;
          case "Chris Hemsworth":
            answer.updateEmployeeID = 5;
            break;
          case "Benedict Cumberbatch":
            answer.updateEmployeeID = 6;
            break;
          case "Elizabeth Olsen":
            answer.updateEmployeeID = 7;
            break;
          case "Jeremy Renner":
            answer.updateEmployeeID = 8;
            break;
          case "Samuel L. Jackson":
            answer.updateEmployeeID = 9;
            break;
        }
// switch case to assign each role a number so a key can reference and assign role to employee when changed
        switch (answer.updateEmployeeRole) {
          case "Sales Lead":
            answer.updateEmployeeRole = 1;
            break;
          case "Salesperson":
            answer.updateEmployeeRole = 2;
            break;
          case "Lead Engineer":
            answer.updateEmployeeRole = 3;
            break;
          case "Software Engineer":
            answer.updateEmployeeRole = 4;
            break;
          case "Account Manager":
            answer.updateEmployeeRole = 5;
            break;
          case "Accountant":
            answer.updateEmployeeRole = 6;
            break;
          case "Legal Team Lead":
            answer.updateEmployeeRole = 7;
            break;
          case "Lawyer":
            answer.updateEmployeeRole = 8;
            break;
        }
// telling database what values to update
        let sql = `UPDATE employee
                           SET role_id = ?
                           WHERE id=?`;

        let data = [answer.updateEmployeeRole, answer.updateEmployeeID];

        connection.query(sql, data, (error, results) => {
          if (error) {
            return console.error(error.message);
          }
          console.log("Rows affected:", results.affectedRows);
        });
// quit function to allow user to quit or continue back to the opening questions 
        quit();
      });
  };    
  
  // quit function to allow user to quit or continue back to the opening questions 
  const quit = () => {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "finished",
          message: "Are you finished?",
        },
      ])

      .then((answer) => {
        console.log(answer);
        if (answer.finished === true) return connection.end();
        if (answer.finished === false) return openingQuestions();
      });
  };

  openingQuestions();
}
//calling function
init();
