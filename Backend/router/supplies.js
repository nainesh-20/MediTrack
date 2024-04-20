const express = require('express');
const app = express.Router();
const medicalSuppliesController = require('../controller/supplies');


app.get('/total-quantity-by-supply-type', medicalSuppliesController.getTotalQuantityBySupplyType);
app.get('/quantity-over-time', medicalSuppliesController.getQuantityOverTime);

module.exports = app;