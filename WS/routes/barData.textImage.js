
const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Router = express.Router();
const textAndImageController = require('../controllers/textAndImage');
const {authenticateToken} = require('../controllers/util');



Router.route('/')
.get(textAndImageController.getAll)
.post(authenticateToken, upload.single('image'), textAndImageController.createNewTandI)
Router.route('/:id')
.get(textAndImageController.getById)
.put(authenticateToken,textAndImageController.updateTandI)
.delete(authenticateToken,textAndImageController.deleteTandI)

module.exports = Router

