const imageGallerySchema = require('../models/imageGallery');
const fs = require('fs'); 
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);
const { uploadFile, deleteFile, deleteFiles} = require('./s3'); 
const {getAllData,getDataById} = require('./util');

const getAll = (req,res) =>{
    getAllData(req,res,imageGallerySchema)
}

const getById = (req,res) =>{
   getDataById(req,res,imageGallerySchema)
}

const createNewImageGallery = (req,res) =>{
    const file = req.file;
    uploadFile(file).then(s3Result =>{
        const imageArray = [
            {
                Key:s3Result.Key
            }
        ]
        const NewGallery = {
        _id: req.body._id,
        images:imageArray
        }

        unlinkFile(file.path)
        const newGallery = new imageGallerySchema(NewGallery)
        return newGallery.save()
    }).then(() =>{
        res.status(200).json("New Bar Created")
    }).catch(err => res.status(404).json({message:err.message}))

}

const updateGallery = (req,res) =>{
    const file = req.file;
    let s3Key;
    uploadFile(file).then((s3Result)=>{
        s3Key = s3Result.Key
        return imageGallerySchema.findById(req.params.id)
    })
    .then((data) =>{ 
        const imageArray = data.images
        imageArray.push({Key:s3Key})
        const updatedGallery = {
            images:imageArray
        }
        return imageGallerySchema.findByIdAndUpdate(req.params.id,updatedGallery)
    })
    .then(res.status(200).json({message:'Updated Succefully'}))
    .catch((err) => res.status(404).json({message:err.message}))
   
}

const deleteImage = (req,res) =>{
    deleteFile(req.params.image).then(()=>{
        return imageGallerySchema.findById(req.params.id)
    })
    .then((data) =>{ 
        const imageArray = data.images
        const newArray = imageArray.filter(image=> image.Key !== req.params.image)
        const updatedBar = {
            images:newArray
        }
        return imageGallerySchema.findByIdAndUpdate(req.params.id,updatedBar)
    })
    .then(res.status(200).json({message:'Updated Succefully'}))
    .catch((err) => res.status(404).json({message:err.message}))
}

const deleteGallery = (req,res) =>{
    imageGallerySchema.findById(req.params.id).then((data)=>{
        const images = [];
        data.images.forEach(element => {
            images.push({Key:element.Key})
        });
        return deleteFiles(images)
    })
    .then(() =>{ return imageGallerySchema.findByIdAndDelete(req.params.id)})
    .then(res.status(200).json({message:'Deleted Succefully'}))
    .catch((err) => res.status(404).json({message:err.message}))
}


module.exports = {getAll,getById,createNewImageGallery,updateGallery,deleteImage,deleteGallery}