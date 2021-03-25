const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const connection = require('../database/database');

const Forum = connection.define('questions', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  question: {
    type: sequelize.TEXT,
    allowNull: false,
  },
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

// obs: Depois que cria a tabela comentar esse sync para não ficar recriando o tempo todo
// Forum.sync({ force: true });

module.exports = Forum;
