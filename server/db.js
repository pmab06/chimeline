const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config()

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


pool.getConnection((err, connection) => {
    if (err) {
        console.log(`/!\ MySQL - Error while connecting to database: ${err.stack}`)
        return;
    }
    console.log(`(i) MySQL - Connected to database with ID ${connection.threadId}`)
});

module.exports = pool; 