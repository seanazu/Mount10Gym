const express = require('express');
const Router = express.Router();
const userController = require('../controllers/userController');


Router.route('/login')
.post(userController.login)

Router.route('/register')
.post(userController.register)

Router.route('/delete')
.post(userController.deleteUser)

module.exports = Router

