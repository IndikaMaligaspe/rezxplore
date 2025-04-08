// AvailabilityService.js

const db = require("../models");
const { AvailabilityRequest, Product, ProductAvailability } = db;
const { Op } = require("sequelize");

module.exports = {
  /**
   * Stores the request and returns matching availability results
   * @param {object} data - Validated data from AvailabilityRequestDTO
   * @returns {object} response matching AvailabilityResponseDTO
   */
  async checkAvailability(data) {
    // Store request
    await AvailabilityRequest.create(data);

    // Build where clause for product filtering
    const whereClause = {
      ...(data.location_id && { location_id: data.location_id }),
      ...(data.category_id && { category_id: data.category_id }),
      ...(data.product_type_id && { product_type_id: data.product_type_id }),
      ...(data.product_id && { id: data.product_id }),
    };

    if (data.search_keywords) {
      whereClause.description = { [Op.like]: `%${data.search_keywords}%` };
    }

    // Step 1: Query products
    const products = await Product.findAll({ where: whereClause });

    // Step 2: Filter manually by tags (MySQL-compatible)
    const filteredProducts =
      data.tags && data.tags.length > 0
        ? products.filter((p) => {
            try {
              const tags = Array.isArray(p.tags)
                ? p.tags
                : JSON.parse(p.tags || "[]");
              return tags.some((tag) => data.tags.includes(tag));
            } catch (e) {
              return false;
            }
          })
        : products;

    const productIds = filteredProducts.map((p) => p.product_id || p.id);

    if (!data.program_date?.from_date || productIds.length === 0) {
      return {
        page: data.page || 1,
        limit: data.limit || 10,
        total: 0,
        availability: [],
      };
    }

    // Step 3: Query availability from inventory
    const inventory = await ProductAvailability.findAll({
      where: {
        product_id: { [Op.in]: productIds },
        date: data.program_date.from_date,
      },
    });
    // Step 4: Build full result set
    const allResults = inventory.map((entry) => ({
      product_id: entry.product_id,
      date: entry.date,
      timeslot: entry.timeslot,
      available: entry.capacity > entry.booked,
      price: {
        amount: entry.price,
        currency: entry.currency,
      },
    }));

    // Step 5: Apply pagination
    const page = parseInt(data.page || 1);
    const limit = parseInt(data.limit || 10);
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginated = allResults.slice(start, end);

    return {
      page,
      limit,
      total: allResults.length,
      availability: paginated,
    };
  },
};
