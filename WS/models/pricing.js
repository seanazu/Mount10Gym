const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const pricingSchema = new Schema({
    _id:{
        required:true,
        type:String
    },
    logo:{
        required:true,
        type:String
    },
    header:{
        required:true,
        type:String
    },
    price:{
        required:true,
        type:String
    },
    explanation:{
        required:true,
        type:String
    }
},{
    collection:'center-prices'
})

module.exports = mongoose.model('pricingSchema',pricingSchema);