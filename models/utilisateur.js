const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');


const utilisateurSchema = mongoose.Schema({
  Username: { type: String, required: true , unique :true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  prenom: {type: String , required:true},
  nom: {type: String , required:true},
  data_de_naissance: {type: Date , required:true},
  adresse: {type: String , required:true}
});

utilisateurSchema.plugin(uniqueValidator);
 
module.exports = mongoose.model('utilisateur', utilisateurSchema);