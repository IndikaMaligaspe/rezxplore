// services/ProductService.js
const { Op } = require("sequelize");
const db = require("../models");
const { Product } = db;

module.exports = {
  async getAll(filters = {}) {
    const where = {};

    if (filters.location_id) {
      where.location_id = filters.location_id;
    }

    if (filters.category_id) {
      where.category_id = filters.category_id;
    }

    if (filters.product_type_id) {
      where.product_type_id = filters.product_type_id;
    }

    if (filters.product_id !== undefined) {
      where.product_id =
        filters.product_id === 0 ? { [Op.not]: null } : filters.product_id;
    }

    if (filters.MinimumRating) {
      where.rating = { [Op.gte]: filters.MinimumRating };
    }

    if (filters.confirmation_type) {
      where.confirmation_type = filters.confirmation_type;
    }

    if (filters.language) {
      where.language = filters.language;
    }

    if (filters.currency) {
      where.currency = filters.currency;
    }

    if (filters.flags) {
      const flags = Array.isArray(filters.flags)
        ? filters.flags
        : filters.flags.split(",");
      where.flags = { [Op.overlap]: flags };
    }

    if (filters.tags) {
      const tags = Array.isArray(filters.tags)
        ? filters.tags
        : filters.tags.split(",");
      where.tags = { [Op.overlap]: tags };
    }

    if (filters.search_key_words) {
      const keywords = filters.search_key_words.split(" ");
      where[Op.or] = [
        { name: { [Op.iLike]: `%${filters.search_key_words}%` } },
        { description: { [Op.iLike]: `%${filters.search_key_words}%` } },
        { tags: { [Op.overlap]: keywords } },
      ];
    }

    const limit = parseInt(filters.limit) || 20;
    const page = parseInt(filters.page) || 1;
    const offset = (page - 1) * limit;

    const { rows, count } = await Product.findAndCountAll({
      where,
      limit,
      offset,
      attributes: {
        exclude: ["CancellationPolicyId"],
      },
      include: [
        "medias",
        "ratePlans",
        "reviews",
        "addressInfo",
        "cancellationPolicy",
      ],
    });

    return {
      data: rows,
      meta: {
        total: count,
        page,
        limit,
        pages: Math.ceil(count / limit),
      },
    };
  },

  async getById(id) {
    return await Product.findByPk(id, {
      include: [
        "medias",
        "ratePlans",
        "reviews",
        "addressInfo",
        "cancellationPolicy",
      ],
    });
  },
};
