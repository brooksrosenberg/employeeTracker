
var answers;
// Query database
db.query(`SELECT * FROM employees_db.employee`, function (err, results) {
  console.log(results);
console.table(results);
answers = results;
});

console.log(answers);
