const homeTextSchema = require('../models/homeText');
const {getAllData,getDataById} = require('./util')

const getAll = (req,res) =>{
    getAllData(req,res,homeTextSchema)
}

const getById = (req,res) =>{
   getDataById(req,res,homeTextSchema)
}

const createHomeText = (req,res) =>{
    const newHomeText = new homeTextSchema(req.body)
    newHomeText.save()
    .then(() =>{
        res.status(200).json("New Home Text Created")
    }).catch(err => res.status(404).json({message:err.message}))

}

const updateHomeText= (req,res) =>{
    homeTextSchema.findByIdAndUpdate(req.params.id,req.body)
    .then(() =>{
        res.status(200).json("Home Text Updated")
    }).catch(err => res.status(404).json({message:err.message}))
}

const deleteHomeText = (req,res) =>{
    homeTextSchema.findByIdAndDelete(req.params.id)
    .then(() =>{
        res.status(200).json("Home Text Deleted")
    }).catch(err => res.status(404).json({message:err.message}))
}


module.exports = {getAll,getById,createHomeText,updateHomeText,deleteHomeText}