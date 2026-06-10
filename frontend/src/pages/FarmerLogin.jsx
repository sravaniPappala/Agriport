import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function FarmerLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    farmerId: "",
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
        "http://localhost:5000/api/auth/farmer/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "farmer",
        JSON.stringify(res.data.user)
      );

      navigate("/farmer-dashboard");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    }
  };

  return (
    <div className="login-page">

      <div className="back-link">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#14532d",
            fontWeight: "600"
          }}
        >
          ← Back
        </Link>
      </div>

      <div className="login-card">

        <div className="login-icon">
          🚜
        </div>

        <h1>రైతు లాగిన్</h1>

        <h3>Farmer Login</h3>

        <div className="form-group">
          <label>
            Farmer ID / రైతు ID
          </label>

          <input
            type="text"
            name="farmerId"
            placeholder="Enter your Farmer ID"
            value={formData.farmerId}
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
          className="login-btn"
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
          to="/farmer-register"
          className="signup-btn"
        >
          Sign Up / నమోదు
        </Link>

      </div>

    </div>
  );
}

export default FarmerLogin;