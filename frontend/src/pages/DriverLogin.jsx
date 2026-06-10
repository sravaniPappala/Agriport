import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function DriverLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    driverId: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async () => {
    try {

      const res = await axios.post(
        "https://agriport-bakend.onrender.com/api/auth/driver/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "driver",
        JSON.stringify(res.data.driver)
      );

      navigate("/driver-dashboard");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login Failed"
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

      <div className="driver-login-card">

        <div className="driver-icon">
          🚛
        </div>

        <h1>డ్రైవర్ లాగిన్</h1>

        <h3>Driver Login</h3>

        <div className="form-group">
          <label>
            Driver ID / డ్రైవర్ ID
          </label>

          <input
            type="text"
            name="driverId"
            placeholder="Enter your Driver ID"
            value={formData.driverId}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>
            Password / పాస్‌వర్డ్
          </label>

          <input
            type="password"
            name="password"
            placeholder="Minimum 6 characters"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button
          className="driver-login-btn"
          onClick={handleLogin}
        >
          Login / లాగిన్
        </button>

        <p
  style={{
    color: "blue",
    cursor: "pointer",
    marginTop: "10px"
  }}
  onClick={() =>
    navigate("/forgot-password")
  }
>
  Forgot Password?
</p>

        <div className="register-text">
          Don't have an account?
        </div>

        <Link
          to="/driver-register"
          className="driver-signup-btn"
        >
          Sign Up / నమోదు
        </Link>

      </div>

    </div>
  );
}

export default DriverLogin;