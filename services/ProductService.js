// ProductService.js
const db = require("../models");
const { Product } = db;

module.exports = {
  async getAll() {
    return await Product.findAll({
      attributes: {
        exclude: ["CancellationPolicyId"], // 👈 fix here
      },

      include: [
        "medias",
        "ratePlans",
        "reviews",
        "addressInfo",
        "cancellationPolicy",
      ],
    });
  },

  async getById(id) {
    return await Product.findByPk(id, {
      include: ["Media", "RatePlan", "Review"],
    });
  },
};
