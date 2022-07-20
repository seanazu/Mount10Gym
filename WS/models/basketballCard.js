const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const basketballCardSchema = new Schema({
    _id:{
        required:true,
        type:String
    },
    firstParagraph:{
        required:true,
        type:String
    }, 
    secondParagraph:{
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

module.exports = mongoose.model('basketballCardSchema',basketballCardSchema);