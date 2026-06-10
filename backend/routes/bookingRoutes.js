const express = require("express");

const {
  createBooking,
  getBookings,
  getFarmerBookings,
  acceptBooking,
  updateLocation,
  completeBooking,
  getPendingBookings,
  getDriverBookings,
  addRating
} = require("../controllers/bookingController");

const router = express.Router();

router.post("/create", createBooking);

router.get("/", getBookings);

router.get(
  "/farmer/:farmerId",
  getFarmerBookings
);

router.put(
  "/rating/:id",
  addRating
);

router.put(
  "/complete/:id",
  completeBooking
);

router.get(
  "/driver/:driverId",
  getDriverBookings
);

router.get(
  "/pending",
  getPendingBookings
);

router.put("/accept/:id", acceptBooking);

router.put("/location/:id", updateLocation);

module.exports = router;