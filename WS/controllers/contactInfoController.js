const contactInfoSchema = require('../models/contactInfo');
const {getAllData,getDataById} = require('./util')

const getAll = (req,res) =>{
    getAllData(req,res,contactInfoSchema)
}

const getById = (req,res) =>{
   getDataById(req,res,contactInfoSchema)
}

const createContactInfo = (req,res) =>{
    const newContactInfo = new contactInfoSchema(req.body)
    newContactInfo.save()
    .then(() =>{
        res.status(200).json("New Contact Info Created")
    }).catch(err => res.status(404).json({message:err.message}))

}

const updateContactInfo = (req,res) =>{
    contactInfoSchema.findByIdAndUpdate(req.params.id,req.body)
    .then(() =>{
        res.status(200).json("Contact Info Updated")
    }).catch(err => res.status(404).json({message:err.message}))
}

const deleteContactInfo = (req,res) =>{
    contactInfoSchema.findByIdAndDelete(req.params.id)
    .then(() =>{
        res.status(200).json("Contact Info Deleted")
    }).catch(err => res.status(404).json({message:err.message}))
}


module.exports = {getAll,getById,createContactInfo,updateContactInfo,deleteContactInfo}