const Joi = require("joi");

const schema = Joi.object({
  product_id: Joi.string().required(),
  from_date: Joi.date().required(),
  to_date: Joi.date().required(),
  guests: Joi.number().integer().min(1),
  tags: Joi.array().items(Joi.string()),
});

module.exports = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};
