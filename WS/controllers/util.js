
const { deleteFile} = require('../controllers/s3');
const jwt = require('jsonwebtoken'); 
require('dotenv').config()


const getAllData = (req,res,Schema) =>{
    Schema.find({})
    .then(data =>{res.status(200).json(data)})
    .catch(err => res.status(404).json({message:err.message}))
}


const getDataById = (req,res,Schema) =>{
    Schema.findById(req.params.id)
    .then(data =>{res.status(200).json(data)})
    .catch(err => res.status(404).json({message:err.message}))
}

const deleteData = (req,res,Schema) =>{
    Schema.findById(req.params.id).then(data=>{
        return deleteFile(data.image)
    })
    .then(() =>{ return Schema.findByIdAndDelete(req.params.id)})
    .then(res.status(200).json({message:'Deleted Succefully'}))
    .catch((err) => res.status(404).json({message:err.message}))
}

const deleteOldData = (req,res,Schema) =>{
    Schema.findById(req.params.id).then(data=>{
        return deleteFile(data.image)
    })
    .then(() =>{ return Schema.findByIdAndDelete(req.params.id)})
}

const authenticateToken = (req,res,next) =>{
    const token = req.headers['access-token'] 
    if(token == null){
        return res.status(401).json({message:'No Token Found'})
    }
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user) =>{
        if(err){
            return res.status(403).json({message:'Incorrect Token'})
        }
        next()
    })
}

module.exports = {getAllData,getDataById,deleteData,deleteOldData,authenticateToken}