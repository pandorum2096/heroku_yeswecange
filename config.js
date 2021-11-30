const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "TOUre+2096",
    database: "entreprise",
    host: "localhost",
    port: 5432
});

module.exports = pool;
