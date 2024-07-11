const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cldb'
});

connection.connect((err) => {
    if(err){
        console.log(`MySQL: Couldn't connect to the database. Error message: ${err.stack}`)
        return;
    }
    console.log(`MySQL: Connected to database with ID ${connection.threadId}`)
});

module.exports = connection;