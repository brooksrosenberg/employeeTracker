const connection = require('../db/connection');

function viewDepartments(){
let sql = `SELECT * FROM department`;
connection.query(sql, (error, results) => {
if(results) {
    return console.table(results);
    }
  else {
    return console.error(error.message);
  }
   
});
}

module.exports = viewDepartments;


