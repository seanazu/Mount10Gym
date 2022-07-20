const pageHeaderSchema = require('../models/pageHeader');
const fs = require('fs'); 
const util = require('util');
const unlinkFile = util.promisify(fs.unlink)
const { uploadFile} = require('../controllers/s3'); 
const {getAllData,deleteData,getDataById,deleteOldData} = require('./util')

const getAll = (req,res) =>{
    getAllData(req,res,pageHeaderSchema)
}

const getById = (req,res) =>{
   getDataById(req,res,pageHeaderSchema)
}

const createNewHeader = (req,res) =>{
    const file = req.file;
    uploadFile(file).then(s3Result =>{
        const NewHeader = {
        _id: req.body._id,
        header:req.body.header,
        subHeader: req.body.subHeader,
        image:s3Result.Key
        }
        unlinkFile(file.path)
        const newHeader = new pageHeaderSchema(NewHeader)
        return newHeader.save()
    }).then(() =>{
        res.status(200).json("New Bar Created")
    }).catch(err => res.status(404).json({message:err.message}))

}

const deleteOldHeader = (req,res,next) =>{
   deleteOldData(req,res,pageHeaderSchema)
   next()
}

const deleteHeader = (req,res) =>{
   deleteData(req,res,pageHeaderSchema)
}


module.exports = {getAll,getById,createNewHeader,deleteHeader,deleteOldHeader}