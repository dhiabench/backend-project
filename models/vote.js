const mongoose = require('mongoose');
const article = require('./article');
const projet = require('./projet');
const promoteur = require('./promoteur');


const voteSchema =mongoose.Schema({
    type_de_vote: {type: String },
    date_de_vote:{type:Date},
    proprietaire:{type:projet},
    parent:{type:article}
});


module.exports= mongoose.model('vote',voteSchema);
