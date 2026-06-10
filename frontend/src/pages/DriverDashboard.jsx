import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function DriverDashboard() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [location, setLocation] = useState("");

  const driver = JSON.parse(
    localStorage.getItem("driver")
  );

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {

      const res = await axios.get(
        `https://agriport-backend.onrender.com/api/bookings/driver/${driver.driverId}`
      );

      setBookings(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  const handleLogout = () => {
    localStorage.removeItem("driver");
    localStorage.removeItem("token");
    navigate("/");
  };

  const acceptRequest = async (id) => {
    try {

      await axios.put(
        `https://agriport-backend.onrender.com/api/bookings/accept/${id}`,
        {
          driverId: driver.driverId,
          driverName: driver.fullName
        }
      );

      fetchBookings();

    } catch (error) {

      console.log(error);

    }
  };

  const updateLocation = async (id) => {
    try {

      await axios.put(
        `https://agriport-backend.onrender.com/api/bookings/location/${id}`,
        {
          currentLocation: location
        }
      );

      fetchBookings();

      setLocation("");

    } catch (error) {

      console.log(error);

    }
  };

  const completeTrip = async (id) => {
    try {

      await axios.put(
        `https://agriport-backend.onrender.com/api/bookings/complete/${id}`
      );

      fetchBookings();

    } catch (error) {

      console.log(error);

    }
  };

  const ratedBookings = bookings.filter(
  booking => booking.rating > 0
);

const averageRating =
  ratedBookings.length > 0
    ? (
        ratedBookings.reduce(
          (sum, booking) =>
            sum + booking.rating,
          0
        ) / ratedBookings.length
      ).toFixed(1)
    : 0;

  const totalEarnings = bookings
  .filter(
    booking =>
      booking.status === "Completed"
  )
  .reduce(
    (total, booking) =>
      total + (booking.transportCost || 0),
    0
  );



  return (
    <div className="dashboard-page">

      {/* Top Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px"
          }}
        >

          <button
  style={{
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 15px",
    cursor: "pointer",
    fontWeight: "bold",
    width: "auto"
  }}
  onClick={() => navigate("/")}
>
   Logout
</button>

          {/* Profile Icon */}
          <img
            src="/images/driver.png"
            alt="Driver Profile"
            onClick={() =>
              navigate("/driver-profile")
            }
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              cursor: "pointer",
              border: "3px solid #2563eb"
            }}
          />
        </div>
      </div>

      {/* Header */}
      <div className="dashboard-header">

        <h1>🚛 డ్రైవర్ డాష్‌బోర్డ్</h1>

        <p>Driver Dashboard</p>

        <h3>
          Welcome,
          {" "}
          {driver?.fullName || "Driver"}
        </h3>

      </div>

      {/* Stats */}
      <div className="stats-grid">

        <div className="stat-card">
          <h2>{bookings.length}</h2>
          <p>My Trips</p>
        </div>

        <div className="stat-card">
          <h2>
            {
              bookings.filter(
                (b) =>
                  b.status === "Accepted"
              ).length
            }
          </h2>
          <p>Active Trips</p>
        </div>

        <div className="stat-card">
          <h2>
            {
              bookings.filter(
                (b) =>
                  b.status === "Completed"
              ).length
            }
          </h2>
          <p>Completed</p>
        </div>

            <div className="stat-card">
  <h2>⭐ {averageRating}</h2>
  <p>Rating</p>
</div>

        <div className="stat-card">
  <h2>
    ₹{totalEarnings}
  </h2>
  <p>Earnings</p>



</div>

      </div>

      {/* Trips */}
      {bookings.map((booking) => (

        <div
          className="driver-card"
          key={booking._id}
        >

          <h2>
            {booking.cropType} Transport
          </h2>

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

          <p>
            Weight:
            {" "}
            {booking.weight} Tons
          </p>

          <p>
            Vehicle:
            {" "}
            {booking.vehicleType}
          </p>

          <p>
            Status:
            {booking.status === "Pending" &&
              " ⏳ Pending"}

            {booking.status ===
              "Accepted" &&
              " ✅ Accepted"}

            {booking.status ===
              "Completed" &&
              " 🎉 Completed"}
          </p>

          <p>
            Current Location:
            {" "}
            {booking.currentLocation}
          </p>

          {booking.status ===
            "Pending" && (
            <button
              className="book-btn"
              onClick={() =>
                acceptRequest(
                  booking._id
                )
              }
            >
              Accept Request
            </button>
          )}

          {booking.status ===
            "Accepted" && (
            <button
              className="book-btn"
              onClick={() =>
                completeTrip(
                  booking._id
                )
              }
            >
              Complete Trip
            </button>
          )}

          {booking.status ===
            "Completed" && (
            <button
              className="book-btn"
              disabled
            >
              🎉 Trip Completed
            </button>
          )}

          <br />
          <br />

          <input
            type="text"
            placeholder="Enter Current Location"
            value={location}
            onChange={(e) =>
              setLocation(
                e.target.value
              )
            }
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px"
            }}
          />

          <button
            className="book-btn"
            onClick={() =>
              updateLocation(
                booking._id
              )
            }
          >
            Update Location
          </button>

        </div>

      ))}

    </div>
  );
}

export default DriverDashboard;