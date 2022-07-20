const imageBarSchema = require('../models/imageBar');
const fs = require('fs'); 
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);
const { uploadFile} = require('../controllers/s3'); 
const {getAllData,getDataById,deleteData,deleteOldData} = require('./util');

const getAll = (req,res) =>{
    getAllData(req,res,imageBarSchema)
}

const getById = (req,res) =>{
   getDataById(req,res,imageBarSchema)
}

const createNewImageBar = (req,res) =>{
    const file = req.file;
    uploadFile(file).then(s3Result =>{
        const NewTandI = {
        _id: req.body._id,
        header:req.body.header,
        subHeader: req.body.subHeader,
        image:s3Result.Key
        }
        unlinkFile(file.path)
        const newTandI = new imageBarSchema(NewTandI)
        return newTandI.save()
    }).then(() =>{
        res.status(200).json("New Bar Created")
    }).catch(err => res.status(404).json({message:err.message}))

}

const deleteOldImageBar = (req,res,next) =>{
   deleteOldData(req,res,imageBarSchema)
   next()
}

const deleteImageBar = (req,res) =>{
   deleteData(req,res,imageBarSchema)
}


module.exports = {getAll,getById,createNewImageBar,deleteOldImageBar,deleteImageBar}