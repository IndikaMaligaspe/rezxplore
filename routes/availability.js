const express = require("express");
const router = express.Router();
const logger = require("../middleware/logger");
const rateLimit = require("../middleware/rateLimit");
const apiKeyAuth = require("../middleware/apiKeyAuth");
const validate = require("../middleware/validate");
const { AvailabilityRequestSchema } = require("../dtos/AvailabilityRequestDTO");
const AvailabilityController = require("../controllers/AvailabilityController");

router.post(
  "/availability",
  logger,
  rateLimit,
  apiKeyAuth,
  validate(AvailabilityRequestSchema),
  AvailabilityController.checkAvailability
);

module.exports = router;
