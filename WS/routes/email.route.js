const express = require('express');
const Router = express.Router();
const emailController = require('../controllers/emailController');


Router.route('/getEmail')
.post(emailController.getEmail)
Router.route('/newEmail')
.post(emailController.createEmail)
Router.route('/deleteEmail')
.post(emailController.deleteEmail)








module.exports = Router

