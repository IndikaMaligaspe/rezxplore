/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management
 */

const productService = require("../services/ProductService");
const {
  ProductSearchRequestSchema,
} = require("../dtos/ProductSearchRequestDTO");
const validate = require("../middleware/validate");

module.exports = {
  /**
   * @swagger
   * /products:
   *   get:
   *     summary: Get all products
   *     tags: [Products]
   */
  async getAllProducts(req, res) {
    const { error, value } = validate(ProductSearchRequestSchema);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

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
    if (!data) return res.status(404).json({ message: "Not found" });
    res.json(data);
  },
};
