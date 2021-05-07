const mongoose = require('mongoose');
const contributeur = require('./contributeur');
const post = require('./post');
const Utilisateur = require('./Utilisateur');


const promoteurSchema =mongoose.Schema({
    photo_de_profile: {type: Image },
    id_utilisateur: {type: String , required:true},
    informations_personnelle: {type: Utilisateur , required:true},
    contributeur: {type: contributeur , required:true},
    following: {type: promoteurSchema , required:true},
    followers: {type: promoteurSchema , required:true},
    social_media: {type: URL , required:true},
    post : {type: post}
});


module.exports= mongoose.model('promoteur',promoteurSchema);
