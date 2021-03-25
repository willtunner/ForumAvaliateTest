/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/database');

// controllers
const categoriesController = require('./categories/CategoriesController');
const articleController = require('./articles/ArticleController');
const forumController = require('./forum/ForumController');

// models
const Article = require('./articles/Article');
const Category = require('./categories/Category');
const Forum = require('./forum/Forum');

const app = express();

// View engine
app.set('view engine', 'ejs');

// Archives Static
app.use(express.static('public'));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database
connection
  .authenticate()
  .then(() => {
    console.log('Conexão feita com sucesso!');
  })
  .catch((error) => {
    console.log(error);
  });

// Rotas
app.use('/', categoriesController);
app.use('/', articleController);
app.use('/', forumController);

app.get('/', (req, res) => {
  Forum.findAll().then((questions) => {
    res.render('index', { questions });
  });
});

app.listen(3000, () => {
  console.log('O servidor está rodando!');
});
