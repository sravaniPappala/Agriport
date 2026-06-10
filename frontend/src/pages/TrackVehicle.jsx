import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function TrackVehicle() {
  const navigate = useNavigate();

  const [booking, setBooking] = useState(null);

  useEffect(() => {
    fetchBooking();
  }, []);

  const fetchBooking = async () => {
    try {

      const res = await axios.get(
        "https://agriport-bakend.onrender.com/api/bookings"
      );

      if (res.data.length > 0) {
        setBooking(res.data[res.data.length - 1]);
      }

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="dashboard-page">

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
    onClick={() => navigate("/")}
  >
    🏠 Home
  </button>
</div>


      <div className="dashboard-header">
        <h1>📍 వాహన ట్రాకింగ్</h1>
        <p>Track Vehicle</p>
      </div>

      {!booking ? (

        <div className="driver-card">
          <h2>No Active Booking Found</h2>
        </div>

      ) : (

        <div className="driver-card">

          <h2>Vehicle Location</h2>

          <p>
            Driver:
            {" "}
            {booking.driverName || "Not Assigned"}
          </p>

          <p>
            Current Location:
          </p>

          <h3>
            {booking.currentLocation}
          </h3>

          <p>
            Status:
            {booking.status === "Accepted"
              ? " ✅ Accepted"
              : " ⏳ Pending"}
          </p>

          <p>
            Pickup:
            {" "}
            {booking.pickupLocation}
          </p>

          <p>
            Destination:
            {" "}
            {booking.destination}
          </p>

          <br />

          <button
            className="book-btn"
            onClick={() => navigate("/orders")}
          >
            View Orders
          </button>

          <br />
          <br />

          <button
            className="book-btn"
            onClick={() => navigate("/help")}
          >
            Help & Support
          </button>

        </div>

      )}

    </div>
  );
}

export default TrackVehicle;