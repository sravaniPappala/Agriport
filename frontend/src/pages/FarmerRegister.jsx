import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function FarmerRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    farmerId: "",
    password: "",
    fullName: "",
    mobileNumber: "",
    villageAddress: ""
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
        "https://agriport-backend.onrender.com/api/auth/farmer/register",
        formData
      );

      alert(res.data.message);

      navigate("/farmer-login");

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
      >
        ← Back
      </div>

      <div className="register-card">

        <div className="login-icon">
          🚜
        </div>

        <h1>రైతు నమోదు</h1>

        <h3>Farmer Sign Up</h3>

        <div className="form-group">
          <label>
            Farmer ID / రైతు ID *
          </label>

          <input
            type="text"
            name="farmerId"
            placeholder="Create a unique ID"
            value={formData.farmerId}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>
            Password / పాస్‌వర్డ్ *
          </label>

          <input
            type="password"
            name="password"
            placeholder="Minimum 6 characters"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>
            Full Name / పూర్తి పేరు *
          </label>

          <input
            type="text"
            name="fullName"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>
            Mobile Number / మొబైల్ నంబర్ *
          </label>

          <input
            type="tel"
            name="mobileNumber"
            placeholder="10 digit mobile number"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>
            Village Address / గ్రామం *
          </label>

          <input
            type="text"
            name="villageAddress"
            placeholder="Village / Town"
            value={formData.villageAddress}
            onChange={handleChange}
          />
        </div>

        <button
          className="login-btn"
          onClick={handleRegister}
        >
          Sign Up / నమోదు
        </button>

        <div className="register-text">
          Already have an account?
        </div>

        <Link
          to="/farmer-login"
          className="signup-btn"
        >
          Login / లాగిన్
        </Link>

      </div>

    </div>
  );
}

export default FarmerRegister;