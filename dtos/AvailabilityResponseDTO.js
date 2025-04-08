const Joi = require("joi");

const AvailabilityResponseSchema = Joi.object({
  page: Joi.number().required(),
  limit: Joi.number().required(),
  total: Joi.number().required(),
  availability: Joi.array()
    .items(
      Joi.object({
        product_id: Joi.string().required(),
        date: Joi.string().isoDate().required(),
        timeslot: Joi.string().required(),
        available: Joi.boolean().required(),
        price: Joi.object({
          amount: Joi.number().required(),
          currency: Joi.string().required(),
        }).required(),
      })
    )
    .required(),
});

module.exports = { AvailabilityResponseSchema };
