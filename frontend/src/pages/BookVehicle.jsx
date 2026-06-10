import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function BookVehicle() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    pickupLocation: "",
    destination: "",
    cropType: "Rice",
    customCrop: "",
    weight: "",
    vehicleType: "Mini Truck",
    pickupDate: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBooking = async () => {
    if (
  !formData.pickupLocation ||
  !formData.destination ||
  !formData.weight ||
  !formData.pickupDate
) {
  alert("Please fill all required fields");
  return;
}
    try {

      localStorage.setItem(
        "bookingData",
        JSON.stringify(formData)
      );

      navigate("/available-drivers");

    } catch (error) {

      console.log(error);

    }
  };

  const cropImages = {
  Rice: "/images/rice.jpg",
  Maize: "/images/maize.jpg",
  Cotton: "/images/cotton.jpg",
  Tomato: "/images/tomato.jpg",
  Chilli: "/images/chilli.jpg",
  Milk: "/images/milk.jpg",
  Fish: "/images/fish.jpg",
  Eggs: "/images/eggs.jpg"
};


const estimatedCost =
  Number(formData.weight || 0) * 500; 

  <div
  style={{
    marginTop: "10px",
    fontWeight: "bold",
    color: "green"
  }}
>
  Estimated Cost:
  ₹{estimatedCost}
</div>

  return (
    <div className="booking-page">

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px"
        }}
      >
        <div
          className="back-link"
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        >
          ← Back
        </div>

        <button
          className="book-btn"
          style={{
    padding: "8px 12px",
    width: "auto",
    fontSize: "14px"
  }}
          onClick={() => navigate("/farmer-dashboard")}
        >
          Dashboard
        </button>
      </div>

      <div className="booking-header">
        <h1>🚛 వాహనం బుక్ చేయండి</h1>
        <p>Book Transport Vehicle</p>
      </div>

      {/* Crop Images */}

      
      <div className="booking-card">

        <div className="form-group">
          <label>Pickup Location</label>

          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            placeholder="Enter Pickup Location"
          />
        </div>

        <div className="form-group">
          <label>Destination</label>

          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Enter Destination"
          />
        </div>

        <div className="form-group">

  <label>Crop Type</label>

  <select
    name="cropType"
    value={formData.cropType}
    onChange={handleChange}
  >
    <option>Rice</option>
    <option>Maize</option>
    <option>Cotton</option>
    <option>Tomato</option>
    <option>Chilli</option>
    <option>Milk</option>
    <option>Eggs</option>
    <option>Fish</option>
    <option>Other</option>
  </select>

  {cropImages[formData.cropType] && (

    <div
      style={{
        textAlign: "center",
        marginTop: "15px"
      }}
    >

      <img
        src={cropImages[formData.cropType]}
        alt={formData.cropType}
        style={{
          width: "250px",
          height: "180px",
          objectFit: "cover",
          borderRadius: "12px",
          border: "2px solid #ddd"
        }}
      />

      <h3
        style={{
          marginTop: "10px"
        }}
      >
        {formData.cropType}
      </h3>

    </div>

  )}

</div>

        {formData.cropType === "Other" && (

          <div className="form-group">

            <label>
              Other Crop / Product
            </label>

            <input
              type="text"
              name="customCrop"
              value={formData.customCrop}
              onChange={handleChange}
              placeholder="Enter Crop, Grain, Dairy Product"
            />

          </div>

        )}

        <div className="form-group">
          <label>Weight (Tons)</label>

          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Enter Weight"
          />
        </div>

        <div className="form-group">
          <label>Vehicle Type</label>

          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
          >
            <option>Mini Truck</option>
            <option>Tractor</option>
            <option>Lorry</option>
          </select>
        </div>

        <div className="form-group">
          <label>Pickup Date</label>

          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
          />
        </div>

        <button
          className="search-driver-btn"
          onClick={handleBooking}
        >
          Search Drivers
        </button>

      </div>

    </div>
  );
}

export default BookVehicle;