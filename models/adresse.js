const mongoose = require('mongoose');


const adresseSchema =mongoose.Schema({
    pays: {type: String , required:true},
    adresse: {type: String , required:true},
    region: {type: String , required:true},
    zip_code: {type: Number }
});


module.exports= mongoose.model('adresse',adresseSchema);
