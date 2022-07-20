const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Router = express.Router();
const basketballCardController = require('../controllers/basketballCardController');
const {authenticateToken} = require('../controllers/util')


Router.route('/')
.get(basketballCardController.getAll)
.post(authenticateToken, upload.single('image'), basketballCardController.createbasketballCard)
Router.route('/:id')
.get(basketballCardController.getById)
.put(authenticateToken, upload.single('image'),basketballCardController.deleteOldBasketballCard, basketballCardController.createbasketballCard)
.delete(authenticateToken, basketballCardController.deleteBasketballCard)

module.exports = Router

