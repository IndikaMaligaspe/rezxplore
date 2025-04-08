const express = require("express");
const router = express.Router();
const logger = require("../middleware/logger");
const rateLimit = require("../middleware/rateLimit");
const apiKeyAuth = require("../middleware/apiKeyAuth");
const validate = require("../middleware/validate");
const { BookingRequestSchema } = require("../dtos/BookingRequestDTO");
const BookingController = require("../controllers/BookingController");

router.post(
  "/bookings",
  logger,
  rateLimit,
  apiKeyAuth,
  validate(BookingRequestSchema),
  BookingController.createBooking
);

module.exports = router;
