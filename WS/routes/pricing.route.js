const express = require('express');
const Router = express.Router();
const pricingController = require('../controllers/pricingController');
const {authenticateToken} = require('../controllers/util');

Router.route('/')
.get(pricingController.getAll)
.post(authenticateToken, pricingController.createPricingBox)
Router.route('/:id')
.get(pricingController.getById)
.put(authenticateToken, pricingController.updatePricingBox)
.delete(authenticateToken, pricingController.deletePricingBox)


module.exports = Router

