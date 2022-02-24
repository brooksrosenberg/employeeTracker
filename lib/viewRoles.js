const connection = require('../db/connection');

function viewRoles(){
let sql = `SELECT * FROM employee_role`;
connection.query(sql, (error, results) => {
if(results) {
    return console.table(results);
    }
  else {
    return console.error(error.message);
  };

});
}

module.exports = viewRoles;