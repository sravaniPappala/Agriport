import "./styles/main.css";

import AvailableDrivers from "./pages/AvailableDrivers";

import DriverDashboard from "./pages/DriverDashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FarmerLogin from "./pages/FarmerLogin";
import FarmerRegister from "./pages/FarmerRegister";
import FarmerDashboard from "./pages/FarmerDashboard";
import DriverLogin from "./pages/DriverLogin";
import DriverRegister from "./pages/DriverRegister";
import BookVehicle from "./pages/BookVehicle";
import Orders from "./pages/Orders";
import TrackVehicle from "./pages/TrackVehicle";
import Help from "./pages/Help";
import FarmerProfile from "./pages/FarmerProfile";
import DriverProfile from "./pages/DriverProfile";
import Earnings from "./pages/Earnings";
import Ratings from "./pages/Ratings";
import AdminDashboard from "./pages/AdminDashboard";
import ForgotPassword
from "./pages/ForgotPassword";
import AdminLogin from "./pages/AdminLogin";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/farmer-login" element={<FarmerLogin />} />
        <Route path="/farmer-register" element={<FarmerRegister />} />
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />

        <Route path="/driver-login" element={<DriverLogin />} />
        <Route path="/driver-register" element={<DriverRegister />} />

        <Route path="/book-vehicle" element={<BookVehicle />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/track" element={<TrackVehicle />} />
        <Route path="/help" element={<Help />} />
        <Route
  path="/notifications"
  element={<Notifications />}
/>
        <Route path="/driver-dashboard" element={<DriverDashboard />} />

        <Route path="/available-drivers" element={<AvailableDrivers />} />

        <Route path="/farmer-profile" element={<FarmerProfile />} />

<Route path="/driver-profile" element={<DriverProfile />} />

<Route path="/earnings" element={<Earnings />} />

<Route path="/ratings" element={<Ratings />} />

<Route path="/admin-dashboard" element={<AdminDashboard />} />

<Route
  path="/admin-login"
  element={<AdminLogin />}
/>

<Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;