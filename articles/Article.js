const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const connection = require('../database/database');
const Category = require('../categories/Category');

const Article = connection.define('articles', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: sequelize.TEXT,
    allowNull: false,
  },
});

Category.hasMany(Article); // Uma categoria tem muitos artigos
Article.belongsTo(Category); // Um artigo pertece a uma categoria

// Sincroniza com o banco de dados
// Article.sync({ force: true });

module.exports = Article;
