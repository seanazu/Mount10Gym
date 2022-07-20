const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Router = express.Router();
const hoverImageController = require('../controllers/hoverImageController');
const {authenticateToken} = require('../controllers/util');

Router.route('/')
.get(hoverImageController.getAll)
.post(authenticateToken, upload.single('image'), hoverImageController.createHoverImage)
Router.route('/:id')
.get(hoverImageController.getById)
.put(authenticateToken, upload.single('image'),hoverImageController.deleteOldHoverImage, hoverImageController.createHoverImage)
.delete(authenticateToken, hoverImageController.deleteHoverImage)

module.exports = Router

