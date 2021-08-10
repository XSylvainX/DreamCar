require('dotenv').config()
const mysql = require("mysql2");

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE

})

db.getConnection(function (err) {
    if (err) throw err;
    console.log("Connecté à la base !!")
});

module.exports = { db }