const mongoose = require('mongoose');


const adminSchema =mongoose.Schema({
    role: {type: String , required:true}
});


module.exports= mongoose.model('admin',adminSchema);
