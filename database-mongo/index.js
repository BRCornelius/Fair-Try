var mongoose = require('mongoose');
mongoose.connect('mongodb://Cornelius:Scarlet86@ds145752.mlab.com:45752/recipes');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var recipeSchema = mongoose.Schema({
  name: String,
  image: String,
  serves: Number,
  calories: Number,
  url: String,
  dislikes: Number
});

var Recipe = mongoose.model('Recipe', recipeSchema);

var store = function(doc){
  var recipe = new Recipe(doc);
  recipe.save(function (err) {
    if (err){
      console.log (err);
    }
  });
}

var dislike = function(name, callback){
  recipe.update(function(err){
    if(err){
      console.log(err);
    }
  })
}

var fetch = function(callback){
  recipe.find(function(err, recipes) {
    if (err) {
      console.log(err);
    } else {
      console.log(recipes);
      callback(recipes);
    }
  }).limit(25).sort({'dislikes': 1})
}

module.exports.store = store;
module.exports.fetch = fetch;
module.exports.dislike = dislike;