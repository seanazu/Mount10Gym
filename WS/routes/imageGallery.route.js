const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Router = express.Router();
const imageGalleryController = require('../controllers/imageGalleryController');
const {authenticateToken} = require('../controllers/util');


Router.route('/')
.get(imageGalleryController.getAll)
.post(authenticateToken,upload.single('image'), imageGalleryController.createNewImageGallery)
Router.route('/:id')
.get(imageGalleryController.getById)
.put(authenticateToken, upload.single('image'),imageGalleryController.updateGallery)
.delete(authenticateToken, imageGalleryController.deleteGallery)
Router.route('/:id/:image')
.delete(authenticateToken, imageGalleryController.deleteImage)


module.exports = Router

