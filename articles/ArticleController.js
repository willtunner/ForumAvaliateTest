const express = require('express');

const router = express.Router();

router.get('/articles', (req, res) => {
  res.send('Rota de categorias');
});

router.get('/admin/articles/new', (req, res) => {
  res.send('Rota para criar uma nov acategoria');
});

module.exports = router;
