const Joi = require('joi');

const BookingResponseSchema = Joi.object({
  booking_id: Joi.string().required(),
  status: Joi.string().valid('confirmed', 'pending', 'cancelled').required(),
  confirmation_code: Joi.string().required()
});

module.exports = { BookingResponseSchema };
