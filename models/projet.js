const mongoose = require('mongoose');


const projetSchema =mongoose.Schema({
    nomProjet:{type:String,required:true},
    descriptionProjet: {type: String , required:true},
    categorie: {type: String},
    fondsALever: {type: Number },
    fondsApportes: {type: Number },
    delaiProjet: {type: Date },
    dateDebut: {type: Date },
    funder: {type: String },
    contre_partie: {type: Number },
    adresse:{type: String}
});


module.exports= mongoose.model('projet',projetSchema);
