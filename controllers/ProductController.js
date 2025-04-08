/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management
 */

const productService = require('../services/ProductService');
const { ProductRequestSchema } = require('../dtos/ProductRequestDTO');
const validate = require('../middleware/validate');

module.exports = {
  /**
   * @swagger
   * /products:
   *   get:
   *     summary: Get all products
   *     tags: [Products]
   */
  async getAllProducts(req, res) {
    const data = await productService.getAll();
    res.json(data);
  },

  /**
   * @swagger
   * /product/{id}:
   *   get:
   *     summary: Get a product by ID
   *     tags: [Products]
   */
  async getProductById(req, res) {
    const id = req.params.id;
    const data = await productService.getById(id);
    if (!data) return res.status(404).json({ message: 'Not found' });
    res.json(data);
  }
};
