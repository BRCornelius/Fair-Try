var mongoose = require('mongoose');
mongoose.connect('mongodb://cornelius:Scarlet86@ds141932.mlab.com:41932/cornelius');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var recipeSchema = mongoose.Schema({
  name: Number,
  image: String,
  serves: Number,
  calories: Number,
  url: String
});

var Recipe = mongoose.model('Recipe', recipeSchema);

var store = function(recipe, callback){
  db.recipes.insert(recipe);
}

// var selectAll = function(callback) {
//   Item.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

module.exports.selectAll = selectAll;

// const bodyParser = require('body-parser');
// mongoose.connect('mongodb://cornelius:Scarlet86@ds141932.mlab.com:41932/cornelius');

// let repoSchema = mongoose.Schema({
//   // TODO: your schema here!
//   username     : String,
//   gitHubId       : Number,
//   name     : String,
//   url      : String,
//   watchers     : Number
// });

// let Repo = mongoose.model('Repo', repoSchema);

// let save = function(doc){
//   //https://mongoosejs.com/docs/guide.html
//   // TODO: format documents before running them through this function
//   // This function should save a repo or repos to
//   // the MongoDB
//   // const repoArray = [];

//   //  console.log(); 
// // console.log(doc);
//   var repo = new Repo(doc); //new document
//   // console.log(repo)
//   repo.save(function (err) {
//     if (err){
//       console.log (err);
//     }
//     // saved!
//     // db.collection.insert(repo);
//   });
    
//   // repoArray.push(repoObj);
// // } 

// }

// var getRepos = function(callback) { 
//   Repo.find(function(err, repos) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(repos);
//       callback(repos);
//     }
//   }).limit(25).sort({'watchers': 1});
  
// }

// module.exports.getRepos = getRepos;
// module.exports.save = save;