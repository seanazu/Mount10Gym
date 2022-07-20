const mongoose = require('mongoose'); 
const Schcema = mongoose.Schema 

const emailSchema = new Schcema({
    email:{
        required:true,
        type: String,
        unique:true
    }
},{
    collection:'admin-emails'
})


module.exports = mongoose.model('emailSchema',emailSchema);