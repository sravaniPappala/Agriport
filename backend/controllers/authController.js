const User = require("../models/User");
const Driver = require("../models/Driver");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// =====================
// Farmer Registration
// =====================
const registerFarmer = async (req, res) => {
  try {
    const {
      farmerId,
      password,
      fullName,
      mobileNumber,
      villageAddress
    } = req.body;

    const existingUser = await User.findOne({
      farmerId
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Farmer ID already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const user = await User.create({
      farmerId,
      password: hashedPassword,
      fullName,
      mobileNumber,
      villageAddress
    });

    res.status(201).json({
      message: "Farmer Registered Successfully",
      user
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};

const getDrivers = async (req, res) => {
  try {

    const drivers = await Driver.find();

    res.status(200).json(drivers);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};

// =====================
// Farmer Login
// =====================
const loginFarmer = async (req, res) => {
  try {

    const {
      farmerId,
      password
    } = req.body;

    const user = await User.findOne({
      farmerId
    });

    if (!user) {
      return res.status(400).json({
        message: "Farmer not found"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password"
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        farmerId: user.farmerId
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
      user
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};

// =====================
// Driver Registration
// =====================
const registerDriver = async (req, res) => {
  try {

    const {
      driverId,
      password,
      fullName,
      mobileNumber,
      vehicleType,
      vehicleNumber
    } = req.body;

    const existingDriver =
      await Driver.findOne({
        driverId
      });

    if (existingDriver) {
      return res.status(400).json({
        message: "Driver ID already exists"
      });
    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    const driver =
      await Driver.create({
        driverId,
        password: hashedPassword,
        fullName,
        mobileNumber,
        vehicleType,
        vehicleNumber
      });

    res.status(201).json({
      message:
        "Driver Registered Successfully",
      driver
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};

// =====================
// Driver Login
// =====================
const loginDriver = async (req, res) => {
  try {

    const {
      driverId,
      password
    } = req.body;

    const driver =
      await Driver.findOne({
        driverId
      });

    if (!driver) {
      return res.status(400).json({
        message: "Driver not found"
      });
    }

    const isMatch =
      await bcrypt.compare(
        password,
        driver.password
      );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password"
      });
    }

    const token = jwt.sign(
      {
        id: driver._id,
        driverId: driver.driverId
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
      driver
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};


const updateFarmerProfile = async (req, res) => {
  try {

    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(user);

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }
};

const resetPassword =
async (req, res) => {

  try {

    const {
      role,
      userId,
      mobileNumber,
      newPassword
    } = req.body;

    let user;

    if (
      role === "Farmer"
    ) {

      user =
        await User.findOne({
          farmerId: userId,
          mobileNumber
        });

    } else {

      user =
        await Driver.findOne({
          driverId: userId,
          mobileNumber
        });

    }

    if (!user) {

      return res.status(400)
      .json({
        message:
          "Invalid Details"
      });

    }

    user.password =
      await bcrypt.hash(
        newPassword,
        10
      );

    await user.save();

    res.status(200)
    .json({
      message:
        "Password Reset Successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500)
    .json({
      message:
        "Server Error"
    });

  }
};

const updateDriverProfile = async (req, res) => {
  try {

    const driver =
      await Driver.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.status(200).json(driver);

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }
};

module.exports = {
  registerFarmer,
  loginFarmer,
  registerDriver,
  loginDriver,
  getDrivers,
  updateFarmerProfile,
  updateDriverProfile,
  resetPassword
};