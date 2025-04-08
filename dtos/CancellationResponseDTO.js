const Joi = require('joi');

const CancellationResponseSchema = Joi.object({
  cancellation_id: Joi.string().required(),
  status: Joi.string().valid('cancelled').required(),
  refunded_amount: Joi.number().required()
});

module.exports = { CancellationResponseSchema };
