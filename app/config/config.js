require("dotenv").config();


const productionConfig = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST ,
    dialect: "mysql",
};


module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST ,
        port: process.env.DB_PORT,
        dialect: "mysql",
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST ,
        port: process.env.DB_PORT,
        dialect: "mysql",
    },
    production: productionConfig,
};
