// CancellationService.js

const db = require("../models");
const {
  CancellationRequest,
  CancellationResponse,
  BookingRequest,
  ProductAvailability,
} = db;
const { Op } = require("sequelize");

module.exports = {
  /**
   * Cancels a booking and updates availability
   * @param {object} data - Cancellation request
   * @param {object} user - Authenticated user
   * @returns {object} Cancellation response
   */
  async cancelBooking(data, user) {
    const transaction = await db.sequelize.transaction();
    try {
      // Find the booking request
      const booking = await BookingRequest.findOne({
        where: {
          id: data.booking_id,
          UserId: user.id,
        },
        transaction,
      });

      if (!booking) {
        throw new Error("Booking not found");
      }

      // Decrement availability if booking is found
      const availability = await ProductAvailability.findOne({
        where: {
          product_id: booking.product_id,
          date: booking.date,
          timeslot: booking.timeslot,
        },
        transaction,
        lock: transaction.LOCK.UPDATE,
      });

      if (availability) {
        availability.booked = Math.max(0, availability.booked - booking.guests);
        await availability.save({ transaction });
      }

      // Create cancellation request
      await CancellationRequest.create(
        {
          ...data,
          user_id: user.id,
        },
        { transaction }
      );

      // Create cancellation response
      const response = await CancellationResponse.create(
        {
          cancellation_id: data.booking_id,
          status: "cancelled",
          refunded_amount: 45.0,
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
