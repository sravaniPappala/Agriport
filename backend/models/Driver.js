const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
  {
    driverId: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    fullName: {
      type: String,
      required: true
    },

    mobileNumber: {
      type: String,
      required: true
    },

    vehicleType: {
      type: String,
      required: true
    },

    vehicleNumber: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Driver", driverSchema);