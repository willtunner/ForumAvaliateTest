const Sequelize = require('sequelize');
const connection = require('../database/database');

const Category = connection.define('categories', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// obs: Depois que cria a tabela comentar esse sync para não ficar recriando o tempo todo
// Category.sync({ force: true });

module.exports = Category;
