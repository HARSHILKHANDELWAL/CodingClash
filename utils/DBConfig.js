const { Sequelize } = require("sequelize");

// Create a new Sequelize instance
const sequelize = new Sequelize("harshil", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
  logging: false, // Turn off logging to avoid cluttering the console
});

module.exports = sequelize ;
