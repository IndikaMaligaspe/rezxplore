const Joi = require("joi");

const AvailabilityRequestSchema = Joi.object({
  location_id: Joi.number().integer().optional(),
  category_id: Joi.number().integer().optional(),
  product_type_id: Joi.number().integer().optional(),
  program_date: Joi.object({
    from_date: Joi.string().isoDate().required(),
    to_date: Joi.string().isoDate().required(),
  }).required(),
  product_id: Joi.string().required(),
  search_keywords: Joi.string().optional(),
  tags: Joi.array().items(Joi.string()).optional(),
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).default(10),
});

module.exports = { AvailabilityRequestSchema };
