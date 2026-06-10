const Booking = require("../models/Booking");

const createBooking = async (req, res) => {
  try {

    console.log("Booking Request Received:");
    console.log(req.body);

    const booking = await Booking.create(req.body);

    console.log("Booking Saved:");
    console.log(booking);

    res.status(201).json({
      message: "Booking Created Successfully",
      booking
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};

const getBookings = async (req, res) => {
  try {

    const bookings = await Booking.find();

    res.status(200).json(bookings);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};

const acceptBooking = async (req, res) => {
  try {

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        status: "Accepted",

        driverId: req.body.driverId,

        driverName: req.body.driverName,

        currentLocation: "Vehicle Assigned"
      },
      {
        returnDocument: "after"
      }
    );

    res.status(200).json({
      message: "Booking Accepted",
      booking
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};

const getFarmerBookings = async (req, res) => {
  try {

    const bookings = await Booking.find({
      farmerId: req.params.farmerId
    });

    res.status(200).json(bookings);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};

const completeBooking = async (req, res) => {
  try {

    const booking = await Booking.findById(
      req.params.id
    );

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found"
      });
    }

    // Earnings Calculation
    const transportCost =
      booking.weight * 500;

    booking.status = "Completed";

    booking.transportCost =
      transportCost;

    booking.completedAt =
      new Date();

    await booking.save();

    res.status(200).json({
      message: "Trip Completed",
      booking
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};

const addRating = async (req, res) => {
  try {

    const {
      rating,
      review
    } = req.body;

    const booking =
      await Booking.findByIdAndUpdate(
        req.params.id,
        {
          rating,
          review
        },
        {
          returnDocument: "after"
        }
      );

    res.status(200).json({
      message: "Rating Added",
      booking
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};

const getDriverBookings = async (req, res) => {
  try {

    const bookings = await Booking.find({
      driverId: req.params.driverId
    });

    res.status(200).json(bookings);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};

const getPendingBookings = async (req, res) => {
  try {

    const bookings = await Booking.find({
      status: "Pending"
    });

    res.status(200).json(bookings);

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }
};

const updateLocation = async (req, res) => {
  try {

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        currentLocation: req.body.currentLocation
      },
      {
        returnDocument: "after"
      }
    );

    res.status(200).json({
      message: "Location Updated",
      booking
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};

module.exports = {
  createBooking,
  getBookings,
  getFarmerBookings,
  getDriverBookings,
  acceptBooking,
  updateLocation,
  completeBooking,
  getPendingBookings,
  addRating
};