const express = require('express');
const router = express.Router();
const logger = require('../middleware/logger');
const rateLimit = require('../middleware/rateLimit');
const apiKeyAuth = require('../middleware/apiKeyAuth');
const ProductController = require('../controllers/ProductController');

router.get('/products', logger, rateLimit, apiKeyAuth, ProductController.getAllProducts);
router.get('/product/:id', logger, rateLimit, apiKeyAuth, ProductController.getProductById);

module.exports = router;
