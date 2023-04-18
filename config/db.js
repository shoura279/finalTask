const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  logging: console.log,
  database: "sequelize",
});
module.exports = sequelize;
