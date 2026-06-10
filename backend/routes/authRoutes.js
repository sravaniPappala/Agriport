console.log("AUTH ROUTES FILE LOADED");

const express = require("express");

const {
  registerFarmer,
  loginFarmer,
  registerDriver,
  loginDriver,
  getDrivers,
  updateFarmerProfile,
  updateDriverProfile,
  resetPassword
} = require("../controllers/authController");

const router = express.Router();

router.post("/farmer/register", registerFarmer);
router.post("/farmer/login", loginFarmer);

router.post("/driver/register", registerDriver);
router.post("/driver/login", loginDriver);
router.get("/drivers", getDrivers);
router.get("/test", (req, res) => {
  res.send("Working");
});
router.put(
  "/farmer/update/:id",
  updateFarmerProfile
);
router.put(
  "/reset-password",
  resetPassword
);

router.put(
  "/driver/update/:id",
  updateDriverProfile
);
module.exports = router;