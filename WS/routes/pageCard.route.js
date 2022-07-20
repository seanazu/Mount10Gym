const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Router = express.Router();
const pageCardController = require('../controllers/pageCardController');
const {authenticateToken} = require('../controllers/util');


Router.route('/')
.get(pageCardController.getAll)
.post(authenticateToken, upload.single('image'), pageCardController.createPageCard)
Router.route('/:id')
.get(pageCardController.getById)
.put(authenticateToken, upload.single('image'),pageCardController.deleteOldPageCard, pageCardController.createPageCard)
.delete(authenticateToken, pageCardController.deletepageCard)

module.exports = Router

