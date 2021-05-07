const mongoose = require('mongoose');
const projet = require('./projet');


const contributeurSchema =mongoose.Schema({
    projet_contribué: {type: projet , required:true}
});


module.exports= mongoose.model('contributeur',contributeurSchema);