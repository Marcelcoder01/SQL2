const mysql = require("mysql2");

const pool = mysql.createPool({

    host                : "localhost",
    user                : "root",
    password            : "Lahabana324b6",
    database            : "reto1",
    waitForConnections  : true,
    connectionLimit     : 10,
    maxIdle             : 10,
    idleTimeout         : 60000,
    queueLimit          : 0
}).promise();

console.log("Conexion correcta con BBDD");

module.exports = {pool}