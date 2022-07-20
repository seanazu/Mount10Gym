const basketballCardSchema = require('../models/basketballCard');
const fs = require('fs'); 
const util = require('util');
const unlinkFile = util.promisify(fs.unlink)
const { uploadFile} = require('../controllers/s3'); 
const {getAllData,deleteData,getDataById,deleteOldData} = require('./util')

const getAll = (req,res) =>{
    getAllData(req,res,basketballCardSchema)
}

const getById = (req,res) =>{
   getDataById(req,res,basketballCardSchema)
}

const createbasketballCard = (req,res) =>{
    const file = req.file;
    uploadFile(file).then(s3Result =>{
        const NewBasketballCard= {
        _id:req.body._id,
        firstParagraph: req.body.firstParagraph,
        secondParagraph: req.body.secondParagraph,
        image:s3Result.Key
        }
        unlinkFile(file.path)
        const newBasketballCard = new basketballCardSchema(NewBasketballCard)
        return newBasketballCard.save()
    }).then(() =>{
        res.status(200).json("New Card Created")
    }).catch(err => res.status(404).json({message:err.message}))

}

const deleteOldBasketballCard = (req,res,next) =>{
   deleteOldData(req,res,basketballCardSchema)
   next()
}

const deleteBasketballCard = (req,res) =>{
   deleteData(req,res,basketballCardSchema)
}


module.exports = {getAll,getById,createbasketballCard,deleteOldBasketballCard,deleteBasketballCard}