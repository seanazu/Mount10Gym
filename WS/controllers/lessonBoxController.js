const lessonBoxSchema = require('../models/lessonBox');
const fs = require('fs'); 
const util = require('util');
const unlinkFile = util.promisify(fs.unlink)
const { uploadFile} = require('../controllers/s3'); 
const {getAllData,deleteData,getDataById,deleteOldData} = require('./util')

const getAll = (req,res) =>{
    getAllData(req,res,lessonBoxSchema)
}

const getById = (req,res) =>{
   getDataById(req,res,lessonBoxSchema)
}

const createLessonBox = (req,res) =>{
    const file = req.file;
    uploadFile(file).then(s3Result =>{
        const NewLessonBox = {
        _id: req.body._id,
        lessonName:req.body.lessonName,
        hours: req.body.hours,
        teacher: req.body.teacher,
        image:s3Result.Key
        }
        unlinkFile(file.path)
        const newLessonBox = new lessonBoxSchema(NewLessonBox)
        return newLessonBox.save()
    }).then(() =>{
        res.status(200).json("New Lesson Created")
    }).catch(err => res.status(404).json({message:err.message}))

}

const deleteOldLessonBox = (req,res,next) =>{
   deleteOldData(req,res,lessonBoxSchema)
   next()
}

const deleteLessonBox = (req,res) =>{
   deleteData(req,res,lessonBoxSchema)
}


module.exports = {getAll,getById,createLessonBox,deleteOldLessonBox,deleteLessonBox}