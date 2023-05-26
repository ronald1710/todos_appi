const { Sequelize } = require("sequelize");
require('dotenv').config();

const db = new Sequelize({
  host: process.env.DB_HOST, //ver linea 20,21 y 22
  database: process.env.DB_NAME, //sale del dqatabase de render
  port: process.env.DB_PORT, //port de render
  username: process.env.DB_USERNAME, //username de render
  password: process.env.DB_PASSWORD, //password de render
  dialect: "postgres",
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
  logging: false,
});

module.exports = db;
