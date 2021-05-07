const mongoose = require('mongoose');
const article = require('./article');


const commentaireSchema =mongoose.Schema({
    parent: {type: article}
});


module.exports= mongoose.model('commentaire',commentaireSchema);
