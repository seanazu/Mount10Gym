const express = require('express');
const Router = express.Router();
const { getFileStream } = require('../controllers/s3');


Router.route('/:key')
.get((req, res) => {
    const key = req.params.key
    const readStream = getFileStream(key)
    readStream
    .on('error',()=>{
        res.status(400).json({message:'image does not exist'})
    })
    .pipe(res)
})

module.exports = Router
