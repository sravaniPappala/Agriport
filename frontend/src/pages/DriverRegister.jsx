import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function DriverRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    driverId: "",
    password: "",
    fullName: "",
    mobileNumber: "",
    vehicleType: "",
    vehicleNumber: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/driver/register",
        formData
      );

      navigate("/driver-login");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <div className="login-page">

      <div
        className="back-link"
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer" }}
      >
        ← Back
      </div>

      <div className="register-card">

        <div className="driver-icon">
          🚛
        </div>

        <h1>డ్రైవర్ నమోదు</h1>

        <h3>Driver Sign Up</h3>

        <div className="form-group">
          <label>Driver ID *</label>
          <input
            type="text"
            name="driverId"
            placeholder="Create Driver ID"
            value={formData.driverId}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            name="password"
            placeholder="Minimum 6 characters"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Mobile Number *</label>
          <input
            type="text"
            name="mobileNumber"
            placeholder="Enter Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Vehicle Type *</label>
          <input
            type="text"
            name="vehicleType"
            placeholder="Mini Truck / Tractor / Lorry"
            value={formData.vehicleType}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Vehicle Number *</label>
          <input
            type="text"
            name="vehicleNumber"
            placeholder="AP39XX1234"
            value={formData.vehicleNumber}
            onChange={handleChange}
          />
        </div>

        <button
          className="driver-login-btn"
          onClick={handleRegister}
        >
          Sign Up / నమోదు
        </button>

        <div className="register-text">
          Already have an account?
        </div>

        <Link
          to="/driver-login"
          className="driver-signup-btn"
        >
          Login / లాగిన్
        </Link>

      </div>

    </div>
  );
}

export default DriverRegister;