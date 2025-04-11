const Joi = require("joi");

const ProductSearchRequestSchema = Joi.object({
  location_id: Joi.number().integer().optional(),
  category_id: Joi.number().integer().optional(),
  product_type_id: Joi.number().integer().optional(),
  product_id: Joi.number().min(0).optional(),

  search_key_words: Joi.string().optional(),
  MinimumRating: Joi.number().min(0).max(5).optional(),

  confirmation_type: Joi.string().valid("INSTANT", "REQUEST").optional(),
  currency: Joi.string().length(3).optional(),
  language: Joi.string().length(2).optional(),

  tags: Joi.alternatives()
    .try(
      Joi.array().items(Joi.string()),
      Joi.string() // comma-separated
    )
    .optional(),

  flags: Joi.alternatives()
    .try(
      Joi.array().items(Joi.string()),
      Joi.string() // comma-separated
    )
    .optional(),

  page: Joi.number().integer().min(1).optional(),
  limit: Joi.number().integer().min(1).max(100).optional(),
});

module.exports = { ProductSearchRequestSchema };
