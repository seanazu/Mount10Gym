const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workerCardSchema = new Schema({
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
    collection:'worker-cards'
})

module.exports = mongoose.model('workerCardSchema', workerCardSchema)