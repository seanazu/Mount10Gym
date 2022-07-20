const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Router = express.Router();
const imageBarController = require('../controllers/imageBarController');
const {authenticateToken} = require('../controllers/util');


Router.route('/')
.get(imageBarController.getAll)
.post(authenticateToken, upload.single('image'), imageBarController.createNewImageBar)
Router.route('/:id')
.get(imageBarController.getById)
.put(authenticateToken, upload.single('image'),imageBarController.deleteOldImageBar, imageBarController.createNewImageBar)
.delete(authenticateToken, imageBarController.deleteImageBar)

module.exports = Router

