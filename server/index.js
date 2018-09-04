var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.get('/', function(req, res){
  res.render('index.js');
});

app.get('/search', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      console.log(err)
      // res.sendStatus(500);
    } else {
      // console.log('success')
      console.log(res)
      // console.log(data);

    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

