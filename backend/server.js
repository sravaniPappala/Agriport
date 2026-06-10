const authRoutes = require("./routes/authRoutes");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bookingRoutes = require("./routes/bookingRoutes");
const connectDB = require("./config/db");
const adminRoutes =
  require("./routes/adminRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

app.use(
  "/api/admin",
  adminRoutes
);

app.get("/", (req, res) => {
  res.send("🚜 Agripoort Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running On Port ${PORT}`);
});