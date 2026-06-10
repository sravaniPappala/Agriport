const User = require("../models/User");
const Driver = require("../models/Driver");
const Booking = require("../models/Booking");

const getStats = async (req, res) => {
  try {

    const farmers =
      await User.countDocuments();

    const drivers =
      await Driver.countDocuments();

    const bookings =
      await Booking.countDocuments();

    const completedTrips =
      await Booking.countDocuments({
        status: "Completed"
      });

    const revenueData =
      await Booking.find({
        status: "Completed"
      });

    const revenue =
      revenueData.reduce(
        (total, booking) =>
          total +
          (booking.transportCost || 0),
        0
      );

    res.status(200).json({
      farmers,
      drivers,
      bookings,
      completedTrips,
      revenue
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};

module.exports = {
  getStats
};