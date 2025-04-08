const Joi = require('joi');

const ProductResponseSchema = Joi.object({
  product_id: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().optional(),
  price_from: Joi.number().required(),
  activity_id: Joi.string().required(),
  media: Joi.array().items(Joi.object({
    url: Joi.string().uri().required(),
    caption: Joi.string().optional(),
    type: Joi.string().valid('image', 'video').required(),
    featured: Joi.boolean().optional()
  })).optional(),
  address: Joi.string().optional(),
  rateplans: Joi.array().items(Joi.object({
    rateplan_id: Joi.string().required(),
    rate_type: Joi.string().required(),
    unit: Joi.string().required(),
    unit_type: Joi.string().required(),
    value: Joi.number().required(),
    currency: Joi.string().required()
  })).optional(),
  cancellation_policy: Joi.string().optional(),
  reviews: Joi.array().items(Joi.object({
    review_id: Joi.string().required(),
    title: Joi.string().required(),
    comment: Joi.string().required(),
    rating: Joi.number().required(),
    language: Joi.string().required(),
    date: Joi.string().isoDate().required()
  })).optional()
});

module.exports = { ProductResponseSchema };
