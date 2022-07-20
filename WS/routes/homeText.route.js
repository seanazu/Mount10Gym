const express = require('express');
const Router = express.Router();
const homeTextController = require('../controllers/homeTextController');
const {authenticateToken} = require('../controllers/util');

Router.route('/')
.get(homeTextController.getAll)
.post(authenticateToken, homeTextController.createHomeText)
Router.route('/:id')
.get(homeTextController.getById)
.put(authenticateToken, homeTextController.updateHomeText)
.delete(authenticateToken, homeTextController.deleteHomeText)

module.exports = Router

