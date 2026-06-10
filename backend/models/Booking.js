const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    pickupLocation: String,

    destination: String,

    cropType: String,

    weight: Number,

    vehicleType: String,

    pickupDate: String,

    status: {
      type: String,
      default: "Pending"
    },

    // Farmer Information
    farmerId: {
      type: String,
      default: ""
    },

    // Driver Information
    driverId: {
      type: String,
      default: ""
    },

    driverName: {
      type: String,
      default: ""
    },

    // Vehicle Tracking
    currentLocation: {
      type: String,
      default: "Waiting for Driver"
    },

    // Earnings
    transportCost: {
      type: Number,
      default: 0
    },

    // Rating
    rating: {
      type: Number,
      default: 0
    },

    review: {
  type: String,
  default: ""
},


completedAt: {
  type: Date
}

  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Booking",
  bookingSchema
);