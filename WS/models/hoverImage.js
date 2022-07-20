const mongoose = require('mongoose');
const Schema = mongoose.Schema

const hoverImageSchema = new Schema({
    _id:{
        required:true,
        type:String
    },
    header:{
        required:true,
        type: String
    },
    firstParagraph:{
        required:true,
        type:String
    },
    image:{
        required:true,
        type:String
    },
}, {
    collection: 'hover-images'
    
})

module.exports = mongoose.model('hoverImageSchema',hoverImageSchema)