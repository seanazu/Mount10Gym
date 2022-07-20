const mongoose = require('mongoose');
const Schema = mongoose.Schema

const lessonBoxSchema = new Schema({
    _id:{
        required:true,
        type:String
    },
    lessonName:{
        required:true,
        type:String
    },
    hours:{
        required:true,
        type:String
    },
    teacher:{
        required:true,
        type:String
    },
    image:{
        required:true,
        type:String
    }
},{
    collection:'lessons-schedule'
})

module.exports = mongoose.model('lessonBoxSchema',lessonBoxSchema)