
// get the client
const mysql2 = require('mysql2/promise');

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

