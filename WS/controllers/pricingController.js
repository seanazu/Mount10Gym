const pricingSchema = require('../models/pricing');
const {getAllData,getDataById} = require('./util')

const getAll = (req,res) =>{
    getAllData(req,res,pricingSchema)
}

const getById = (req,res) =>{
   getDataById(req,res,pricingSchema)
}

const createPricingBox = (req,res) =>{
    const newPricingBox = new pricingSchema(req.body)
    newPricingBox.save()
    .then(() =>{
        res.status(200).json("New Pricing Box Created")
    }).catch(err => res.status(404).json({message:err.message}))

}

const updatePricingBox= (req,res) =>{
    pricingSchema.findByIdAndUpdate(req.params.id,req.body)
    .then(() =>{
        res.status(200).json("Pricing Box Updated")
    }).catch(err => res.status(404).json({message:err.message}))
}

const deletePricingBox = (req,res) =>{
    pricingSchema.findByIdAndDelete(req.params.id)
    .then(() =>{
        res.status(200).json("Pricing Box Deleted")
    }).catch(err => res.status(404).json({message:err.message}))
}


module.exports = {getAll,getById,createPricingBox,updatePricingBox,deletePricingBox}