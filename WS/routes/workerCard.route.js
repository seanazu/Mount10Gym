const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Router = express.Router();
const workerCardController = require('../controllers/workerCardController');
const {authenticateToken} = require('../controllers/util');


Router.route('/')
.get(workerCardController.getAll)
.post(authenticateToken, upload.single('image'), workerCardController.createWorkerCard)
Router.route('/:id')
.get(workerCardController.getById)
.put(authenticateToken, upload.single('image'),workerCardController.deleteOldWorkerCard, workerCardController.createWorkerCard)
.delete(authenticateToken, workerCardController.deleteWorkerCard)

module.exports = Router

