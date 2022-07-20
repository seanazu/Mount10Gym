const pageCardSchema = require('../models/pageCard');
const fs = require('fs'); 
const util = require('util');
const unlinkFile = util.promisify(fs.unlink)
const { uploadFile} = require('./s3'); 
const {getAllData,deleteData,getDataById,deleteOldData} = require('./util')

const getAll = (req,res) =>{
    getAllData(req,res,pageCardSchema)
}

const getById = (req,res) =>{
   getDataById(req,res,pageCardSchema)
}

const createPageCard = (req,res) =>{
    const file = req.file;
    uploadFile(file).then(s3Result =>{
        const NewPageCard = {
        _id: req.body._id,
        firstParagraph: req.body.paragraph,
        image:s3Result.Key
        }
        unlinkFile(file.path)
        const newPageCard = new pageCardSchema(NewPageCard)
        return newPageCard.save()
    }).then(() =>{
        res.status(200).json("New Pages Created")
    }).catch(err => res.status(404).json({message:err.message}))
}

const deleteOldPageCard = (req,res,next) =>{
   deleteOldData(req,res,pageCardSchema)
   next()
}

const deletepageCard = (req,res) =>{
   deleteData(req,res,pageCardSchema)
}


module.exports = {getAll,getById,createPageCard,deleteOldPageCard,deletepageCard}