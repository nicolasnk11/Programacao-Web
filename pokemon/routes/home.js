var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('historia', { title: 'História do Pokémon' });
});

module.exports = router;
