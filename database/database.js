const Sequelize = require("sequelize");

const connection = new Sequelize("forum", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
