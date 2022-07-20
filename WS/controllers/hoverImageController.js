const hoverImageSchema = require('../models/hoverImage');
const fs = require('fs'); 
const util = require('util');
const unlinkFile = util.promisify(fs.unlink)
const { uploadFile} = require('../controllers/s3'); 
const {getAllData,deleteData,getDataById,deleteOldData} = require('./util')

const getAll = (req,res) =>{
    getAllData(req,res,hoverImageSchema)
}

const getById = (req,res) =>{
   getDataById(req,res,hoverImageSchema)
}

const createHoverImage = (req,res) =>{
    const file = req.file;
    uploadFile(file).then(s3Result =>{
        const NewHoverImage = {
        _id: req.body._id,
        header:req.body.header,
        firstParagraph: req.body.firstParagraph,
        image:s3Result.Key
        }
        unlinkFile(file.path)
        const newHoverImage = new hoverImageSchema(NewHoverImage)
        return newHoverImage.save()
    }).then(() =>{
        res.status(200).json("New Image Created")
    }).catch(err => res.status(404).json({message:err.message}))

}

const deleteOldHoverImage = (req,res,next) =>{
   deleteOldData(req,res,hoverImageSchema)
   next()
}

const deleteHoverImage = (req,res) =>{
   deleteData(req,res,hoverImageSchema)
}


module.exports = {getAll,getById,createHoverImage,deleteOldHoverImage,deleteHoverImage}