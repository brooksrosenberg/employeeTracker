
// get the client
const mysql2 = require('mysql2');

const connection = mysql2.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'employees_db',
    },
    console.log(`Connected to the employees_db database`)
);


module.exports = connection;