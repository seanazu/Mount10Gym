const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Router = express.Router();
const headerController = require('../controllers/pageHeaderController');
const {authenticateToken} = require('../controllers/util');


Router.route('/')
.get(headerController.getAll)
.post(authenticateToken, upload.single('image'), headerController.createNewHeader)
Router.route('/:id')
.get(headerController.getById)
.put(authenticateToken, upload.single('image'),headerController.deleteOldHeader, headerController.createNewHeader)
.delete(authenticateToken, headerController.deleteHeader)

module.exports = Router;
