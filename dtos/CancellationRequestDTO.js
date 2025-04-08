const Joi = require('joi');

const CancellationRequestSchema = Joi.object({
  booking_id: Joi.string().required(),
  reason: Joi.string().optional()
});

module.exports = { CancellationRequestSchema };
