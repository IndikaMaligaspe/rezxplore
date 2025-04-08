/**
 * @swagger
 * tags:
 *   name: Bookings
 *   description: Booking operations
 */

const bookingService = require("../services/BookingService");
const { BookingRequestSchema } = require("../dtos/BookingRequestDTO");
const validate = require("../middleware/validate");

module.exports = {
  /**
   * @swagger
   * /bookings:
   *   post:
   *     summary: Create a booking
   *     tags: [Bookings]
   */
  async createBooking(req, res) {
    const data = await bookingService.createBooking(req.body, req.user);
    res.json(data);
  },
};
