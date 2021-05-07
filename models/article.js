const mongoose = require('mongoose');
const commentaire = require('./commentaire');
const media = require('./media');
const promoteur = require('./promoteur');
const vote = require('./vote');


const articleSchema =mongoose.Schema({
    proprietaire: {type: promoteur , required:true},
    typee: {type: String , required:true},
    content: {type: String , required:true},
    votes:{type:vote},
    commentaires: {type: commentaire },
    media: {type: media , required:true},
    date_de_creation: {type: Date},
    image: {type:URL},
    video:{type:URL}

});


module.exports= mongoose.model('article',articleSchema);
