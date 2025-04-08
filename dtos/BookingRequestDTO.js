const Joi = require('joi');

const BookingRequestSchema = Joi.object({
  product_id: Joi.string().required(),
  date: Joi.string().isoDate().required(),
  timeslot: Joi.string().required(),
  guests: Joi.number().integer().min(1).required(),
  customer_info: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().optional()
  }).required()
});

module.exports = { BookingRequestSchema };
