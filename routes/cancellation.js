const express = require("express");
const router = express.Router();
const logger = require("../middleware/logger");
const rateLimit = require("../middleware/rateLimit");
const apiKeyAuth = require("../middleware/apiKeyAuth");
const validate = require("../middleware/validate");
const { CancellationRequestSchema } = require("../dtos/CancellationRequestDTO");
const CancellationController = require("../controllers/CancellationController");

router.post(
  "/cancellations",
  logger,
  rateLimit,
  apiKeyAuth,
  validate(CancellationRequestSchema),
  CancellationController.cancelBooking
);

module.exports = router;
