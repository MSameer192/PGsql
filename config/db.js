const { Sequelize } = require("sequelize");

// Connection parameters
const sequelize = new Sequelize('newstudents', 'postgres', 'sameer')

const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

module.exports = { sq: sequelize, testDbConnection };


// const Pool = require('pg').Pool;

// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "studnts",
//     password: "sameer",
//     port: 5432,
// });

// module.exports = pool;