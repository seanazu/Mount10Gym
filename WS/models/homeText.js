const mongoose = require('mongoose'); 
const Schema = mongoose.Schema ; 

const homeTextSchema = new Schema({
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
    thirdParagraph:{
        required:true,
        type:String
    }
},{
    collection:'home-page'
})

module.exports = mongoose.model('homeTextSchema',homeTextSchema); 