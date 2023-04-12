const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "studnts",
    password: "sameer",
    port: 5432,
});

module.exports = pool;