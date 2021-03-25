/* eslint-disable no-empty */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
const express = require('express');
const slugify = require('slugify');
const Forum = require('./Forum');

const router = express.Router();

router.get('/questions', (req, res) => {
  res.render('question/questions');
});

// Rota para salvar no banco
router.post('/questions/save', (req, res) => {
  const { title, question, name } = req.body;

  // console.log(`${title} - ${question} - ${name}`);

  if (title != undefined) {
    Forum.create({
      title,
      question,
      slug: slugify(title),
      name,
    }).then(() => {
      res.redirect('/');
    });
  }
});

router.get('/question/list', (req, res) => {
  Forum.findAll().then((questions) => {
    res.render('question/list/index', { questions });
  });
});

router.post('/question/delete', (req, res) => {
  const { id } = req.body;

  if (id != undefined) {
    if (!isNaN(id)) {
      Forum.destroy({
        where: {
          id,
        },
      }).then(() => {
        res.redirect('/');
      });
    } else {
      res.redirect('/');
    }
  } else {
    res.redirect('/');
  }
});

// Route for edit
router.get('/question/edit/:id', (req, res) => {
  const { id } = req.params;

  // Verifica se o id não é numero
  if (isNaN(id)) {
    res.redirect('/');
  }

  Forum.findByPk(id)
    .then((questions) => {
      if (questions != undefined) {
        res.render('question/edit', { question: questions });
      } else {
        res.redirect('/');
      }
    })
    .catch((erro) => {
      res.redirect('/');
    });
});

// Route for update
router.post('/question/update', (req, res) => {
  const { id, title, body, name } = req.body;

  Forum.update(
    {
      title,
      slug: slugify(title),
      body,
      name,
    },
    { where: { id } }
  ).then(() => {
    res.redirect('/');
  });
});

// Route for read a Question
router.get('/article/:slug', (req, res) => {
  const { slug } = req.params;

  Forum.findOne({
    where: {
      slug,
    },
  })
    .then((article) => {
      if (article != undefined) {
        res.render('question/articles', { article });
      } else {
        res.redirect('/');
      }
    })
    .catch((err) => {
      res.redirect('/');
    });
});

module.exports = router;
