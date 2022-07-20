require('dotenv').config();
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs')

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
      Bucket: bucketName,
      Body: fileStream,
      Key: file.filename
    }
    return s3.upload(uploadParams).promise()
  }
exports.uploadFile = uploadFile

function getFileStream(fileKey) {
    const downloadParams = {
      Key: fileKey,
      Bucket: bucketName
    }
  
    return s3.getObject(downloadParams).createReadStream()
}
exports.getFileStream = getFileStream

function deleteFile(fileKey) {
    const deleteParams = {
      Bucket: bucketName,
      Delete: { 
        Objects: [ 
          {
            Key:fileKey  
          }
        ]
      }
    }
  
    return s3.deleteObjects(deleteParams).promise()
}
exports.deleteFile = deleteFile

function deleteFiles(filesArray) {
  const deletedImages = filesArray
  console.log(deletedImages)
    const deleteParams = {
      Bucket: bucketName,
      Delete: { 
        Objects: filesArray
      }
    }
  
    return s3.deleteObjects(deleteParams).promise()
}
exports.deleteFiles = deleteFiles