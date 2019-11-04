const express = require ('express');
const mongoose = require('mongoose');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

const Product = mongoose.model('Product');

routes.get('/products', ProductController.index);

module.exports = routes;