const mongoose = require('mongoose'); 
const Schema = mongoose.Schema 

const userSchema = new Schema ({
    username:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true, 
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    }
},{
    collection:'users'
})

module.exports = mongoose.model('userSchema', userSchema); 