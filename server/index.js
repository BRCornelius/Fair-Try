var express = require('express');
var bodyParser = require('body-parser');
var table = require('../database-mongo/index.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.get('/', function(req, res){
  res.render('index.js');
});

app.get('/search', function (req, res) {
  recipes.selectAll(function(err, data) {
    if(err) {
      console.log('err')
    } else {
      console.log(data)
    }
  });
});

app.post('/holt', function(){
  table.store({
    name: 'Steve Holt',
    image: 'bold',
    serves: 11,
    calories: 2000,
    url: 'earl'  
  })
})

app.get('/recipes', function (req, res){
  table.fetch(function(err, recipes){
    if(err){
      console.log('err')
    } else {
      console.log(recipes);
      res.json(recipes);
    }
  })
})

app.post('/recipes', function (document){
  // console.log(document.body);
  table.store(document.body);
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

