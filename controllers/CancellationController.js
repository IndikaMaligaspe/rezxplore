/**
 * @swagger
 * tags:
 *   name: Cancellations
 *   description: Cancellation operations
 */

const cancellationService = require("../services/CancellationService");
const { CancellationRequestSchema } = require("../dtos/CancellationRequestDTO");
const validate = require("../middleware/validate");

module.exports = {
  /**
   * @swagger
   * /cancellations:
   *   post:
   *     summary: Cancel a booking
   *     tags: [Cancellations]
   */
  async cancelBooking(req, res) {
    const data = await cancellationService.cancelBooking(req.body, req.user);
    res.json(data);
  },
};
