const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const contactInfoSchema = new Schema({
    cardHeader:{
        require:true,
        type:String
    },
    hoursHeader:{
        required:true,
        type:String
    },
    sunday_thursday_hours:{
        required:true,
        type:String
    },
    friday_hours:{
        required:true,
        type:String
    },
    saturday_hours:{
        required:true,
        type:String
    },
    phoneNumber:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    }
},{
    collection:'contact-info'
})

module.exports = mongoose.model('contactInfoSchema',contactInfoSchema);