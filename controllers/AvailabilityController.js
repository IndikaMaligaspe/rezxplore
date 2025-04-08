/**
 * @swagger
 * tags:
 *   name: Availability
 *   description: Availability checking
 */

const availabilityService = require("../services/AvailabilityService");
const { AvailabilityRequestSchema } = require("../dtos/AvailabilityRequestDTO");
const validate = require("../middleware/validate");

module.exports = {
  /**
   * @swagger
   * /availability:
   *   post:
   *     summary: Check availability
   *     tags: [Availability]
   */
  async checkAvailability(req, res) {
    const data = await availabilityService.checkAvailability(req.body);
    res.json(data);
  },
};
