const connection = require('../db/connection');

function viewEmployees(){
let sql = `SELECT * FROM employee`;
connection.query(sql, (error, results) => {
if(results) {
    return console.table(results);
    }
  else {
    return console.error(error.message);
  }
   
});

}

module.exports = viewEmployees;


