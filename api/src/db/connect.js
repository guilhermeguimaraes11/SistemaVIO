const mysql= require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "alunods",
    password:"senai@604",
    database:"vio"
});

module.exports = pool;