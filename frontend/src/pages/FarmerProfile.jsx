import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FarmerProfile() {
  const navigate = useNavigate();

  const farmer = JSON.parse(
    localStorage.getItem("farmer")
  );

  const [formData, setFormData] =
    useState({
      fullName: farmer.fullName,
      mobileNumber: farmer.mobileNumber,
      villageAddress: farmer.villageAddress
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
        `https://agriport-backend.onrender.com/api/auth/farmer/update/${farmer._id}`,
        formData
      );

      localStorage.setItem(
        "farmer",
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
            navigate("/farmer-dashboard")
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
          src="/images/farmer.png"
          alt="Farmer"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%"
          }}
        />

        <h1>👨‍🌾 Farmer Profile</h1>
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
  placeholder="Full Name"
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
  placeholder="Mobile Number"
  value={formData.mobileNumber}
  onChange={handleChange}
/>

<br /><br />

<label
  style={{
    fontWeight: "bold"
  }}
>
  🏡 Village Address / గ్రామం
</label>

<br />

<input
  type="text"
  name="villageAddress"
  placeholder="Village Address"
  value={formData.villageAddress}
  onChange={handleChange}
/>

<br /><br />

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

export default FarmerProfile;