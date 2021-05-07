const mongoose = require('mongoose');


const postSchema =mongoose.Schema({
    content: {type: String }
});


module.exports= mongoose.model('post',postSchema);
