const TextAndImage = require('../models/textAndImage'); 
const fs = require('fs')
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);
const { uploadFile} = require('./s3');
const {getAllData, getDataById, deleteData,deleteOldData} = require('./util');

const getAll = (req,res) =>{
    getAllData(req,res,TextAndImage)
}

const getById = (req,res) =>{
   getDataById(req,res,TextAndImage)
}

const createNewTandI = (req,res) =>{
    const file = req.file;
    uploadFile(file).then(s3Result =>{
        const NewTandI = {
        _id: req.body._id,
        header:req.body.header,
        subHeader: req.body.subHeader,
        firstParagraph: req.body.firstParagraph,
        secondParagraph:req.body.secondParagraph,
        image:s3Result.Key
        }
        unlinkFile(file.path)
        const newTandI = new TextAndImage(NewTandI)
        return newTandI.save()
    }).then(() =>{
        res.status(200).json("New Bar Created")
    }).catch(err => res.status(404).json({message:err.message}))

}

const deleteOldTandI = (req,res,next) =>{
   deleteOldData(req,res,TextAndImage)
   next()
}

const deleteTandI = (req,res) =>{
   deleteData(req,res,TextAndImage)
}

module.exports = {getAll,getById,createNewTandI,deleteTandI,deleteOldTandI};