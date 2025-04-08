const Joi = require('joi');

const schema = Joi.object({
  product_id: Joi.string().required(),
  date: Joi.date().required(),
  timeslot: Joi.string().required(),
  guests: Joi.number().min(1).required(),
  customer_info: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required()
  }).required()
});

module.exports = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};
