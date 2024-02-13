const mongoose = require('mongoose');


function dbConfig (){
  mongoose.connect('mongodb+srv://new:7mutaAnl7ivikC8g@cluster0.vwzutwd.mongodb.net/new?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));
}

module.exports = dbConfig