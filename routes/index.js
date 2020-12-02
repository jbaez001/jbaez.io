var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'yeoman' });
});


router.get('/yeoman', function(req, res, next) {
  res.send('<meta name="go-import" content="jbaez.io/yeoman git https://git.genscripts.io/jbaez/yeoman.git">' +
      '<meta name="go-source" content="jbaez.io/yeoman https://git.genscripts.io/jbaez/yeoman/ https://git.genscripts.io/jbaez/yeoman/tree/master{/dir} https://git.genscripts.io/jbaez/yeoman/blob/master{/dir}/{file}#L{line}">')

});

module.exports = router;
