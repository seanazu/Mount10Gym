const express = require('express');
const Router = express.Router();
const contactInfoController = require('../controllers/contactInfoController');
const {authenticateToken} = require('../controllers/util');

Router.route('/')
.get(contactInfoController.getAll)
.post(authenticateToken, contactInfoController.createContactInfo)
Router.route('/:id')
.get(contactInfoController.getById)
.put(authenticateToken, contactInfoController.updateContactInfo)
.delete(authenticateToken, contactInfoController.deleteContactInfo)

module.exports = Router

