import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DriverProfile() {
  const navigate = useNavigate();

  const driver = JSON.parse(
    localStorage.getItem("driver")
  );

  const [formData, setFormData] =
    useState({
      fullName: driver.fullName,
      mobileNumber: driver.mobileNumber,
      vehicleType: driver.vehicleType,
      vehicleNumber: driver.vehicleNumber
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const saveProfile = async () => {
    try {

      const res = await axios.put(
        `https://agriport-bakend.onrender.com/api/auth/driver/update/${driver._id}`,
        formData
      );

      localStorage.setItem(
        "driver",
        JSON.stringify(res.data)
      );

      alert("Profile Updated");

    } catch (error) {

      console.log(error);

      alert("Update Failed");

    }
  };

  return (
    <div className="dashboard-page">

      {/* Top Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px"
        }}
      >
        <button
          className="book-btn"
          style={{
            width: "auto",
            padding: "8px 12px"
          }}
          onClick={() =>
            navigate("/driver-dashboard")
          }
        >
          Dashboard
        </button>
      </div>

      <div
        style={{
          textAlign: "center",
          marginBottom: "20px"
        }}
      >
        <img
          src="/images/driver.png"
          alt="Driver"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%"
          }}
        />

        <h1>🚛 Driver Profile</h1>
      </div>

      <label
        style={{
          fontWeight: "bold"
        }}
      >
        👤 Full Name / పేరు
      </label>

      <br />

      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />

      <br /><br />

      <label
        style={{
          fontWeight: "bold"
        }}
      >
        📱 Mobile Number / ఫోన్ నంబర్
      </label>

      <br />

      <input
        type="text"
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={handleChange}
      />

      <br /><br />

      <label
        style={{
          fontWeight: "bold"
        }}
      >
        🚛 Vehicle Type / వాహనం రకం
      </label>

      <br />

      <input
        type="text"
        name="vehicleType"
        value={formData.vehicleType}
        onChange={handleChange}
      />

      <br /><br />

      <label
        style={{
          fontWeight: "bold"
        }}
      >
        🔢 Vehicle Number / వాహనం నంబర్
      </label>

      <br />

      <input
        type="text"
        name="vehicleNumber"
        value={formData.vehicleNumber}
        onChange={handleChange}
      />

      <br /><br />

      <button
        className="book-btn"
        onClick={saveProfile}
      >
        Save Changes
      </button>

    </div>
  );
}

export default DriverProfile;