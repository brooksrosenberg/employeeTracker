
// get the client
const mysql2 = require('mysql2/promise');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// get the promise implementation, we will use bluebird
const bluebird = require('bluebird');


// create the connection, specify bluebird as Promise
const connection = mysql2.createConnection({host:'localhost',
 user: 'root',
 password: 'rootroot',
 database: 'employees_db',
 Promise: bluebird},
 console.log(`Connected to the employees_db database`)
);

// query database
// const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);




// var answers;
// // Query database
// db.query(`SELECT * FROM movies_db.movies`, function (err, results) {
//   console.log(results);
// answers = results;
// });

// console.log(answers);
// // Default response for any other request (Not Found)
// // app.use((req, res) => {
// //   res.status(404).end();
// // });

// app.get('/api/movies', (req, res) =>
//   res.json(results));

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



