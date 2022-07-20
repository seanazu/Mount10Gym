const mongoose = require('mongoose'); 
const Schema = mongoose.Schema ;

const pageCardSchema = new Schema({
    _id:{
        required:true,
        type:String
    },
    firstParagraph:{
        required:true,
        type:String
    },
    image:{
        required:true,
        type:String
    }

},{
    collection:'home-page'
})


module.exports = mongoose.model('pageCardSchema',pageCardSchema);
