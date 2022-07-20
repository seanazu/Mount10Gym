const workerCardSchema = require('../models/workerCard');
const fs = require('fs'); 
const util = require('util');
const unlinkFile = util.promisify(fs.unlink)
const { uploadFile} = require('../controllers/s3'); 
const {getAllData,deleteData,getDataById,deleteOldData} = require('./util')

const getAll = (req,res) =>{
    getAllData(req,res,workerCardSchema)
}

const getById = (req,res) =>{
   getDataById(req,res,workerCardSchema)
}

const createWorkerCard = (req,res) =>{
    const file = req.file;
    uploadFile(file).then(s3Result =>{
        const NewWorkerCard = {
        _id: req.body._id,
        firstParagraph:req.body.firstParagraph,
        secondParagraph: req.body.secondParagraph,
        image:s3Result.Key
        }
        unlinkFile(file.path)
        const newWorkerCard = new workerCardSchema(NewWorkerCard)
        return newWorkerCard.save()
    }).then(() =>{
        res.status(200).json("New Worker Card Created")
    }).catch(err => res.status(404).json({message:err.message}))

}

const deleteOldWorkerCard = (req,res,next) =>{
   deleteOldData(req,res,workerCardSchema)
   next()
}

const deleteWorkerCard = (req,res) =>{
   deleteData(req,res,workerCardSchema)
}


module.exports = {getAll,getById,createWorkerCard,deleteOldWorkerCard,deleteWorkerCard}