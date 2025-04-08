// BookingService.js

const db = require("../models");
const { BookingRequest, BookingResponse, ProductAvailability } = db;
const { Op } = require("sequelize");

module.exports = {
  /**
   * Creates a booking and updates inventory
   * @param {object} data - Validated booking request
   * @param {object} user - Authenticated user
   * @returns {object} Booking response
   */
  async createBooking(data, user) {
    const transaction = await db.sequelize.transaction();
    try {
      // Check availability slot
      const availability = await ProductAvailability.findOne({
        where: {
          product_id: data.product_id,
          date: data.date,
          timeslot: data.timeslot,
        },
        transaction,
        lock: transaction.LOCK.UPDATE,
      });

      if (!availability) {
        throw new Error("Availability slot not found");
      }

      if (availability.booked + data.guests > availability.capacity) {
        throw new Error("Not enough availability for selected slot");
      }

      // Increment booked count
      availability.booked += data.guests;
      await availability.save({ transaction });

      // Create booking request
      const booking = await BookingRequest.create(
        {
          ...data,
          UserId: user.id,
        },
        { transaction }
      );

      // Create booking response
      const response = await BookingResponse.create(
        {
          booking_id: booking.id,
          status: "confirmed",
          confirmation_code: `CONF-${Math.random()
            .toString(36)
            .substr(2, 8)
            .toUpperCase()}`,
        },
        { transaction }
      );

      await transaction.commit();
      return response;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
