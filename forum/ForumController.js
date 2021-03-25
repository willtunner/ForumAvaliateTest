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

router.get('/question/edit/:id', (req, res) => {
  const { id } = req.params.id;

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

module.exports = router;
