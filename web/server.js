const express = require('express');
const bodyParser = require('body-parser');
const expressNunjucks = require('express-nunjucks');
const app = express();

app.use(bodyParser.urlencoded());

expressNunjucks(app);

app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/index', function(req, res) {
  res.render('index');
});

app.get('/estadisticas', function(req, res) {
  res.render('estadisticas');
});

app.get('/carreraGraph', function(req, res) {
  res.render('carreraGraph');
});

app.listen(8000, function() {
  console.log('Listening!');
});
