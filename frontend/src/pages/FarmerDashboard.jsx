import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function FarmerDashboard() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  const farmer = JSON.parse(
    localStorage.getItem("farmer")
  );

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {

      const res = await axios.get(
        `http://localhost:5000/api/bookings/farmer/${farmer.farmerId}`
      );

      setBookings(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  const handleLogout = () => {
    localStorage.removeItem("farmer");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard-page">

      {/* Navigation */}
      
<div
  style={{
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "15px",
    width: "100%",
    marginBottom: "20px"
  }}
>

  <button
    className="book-btn"
    style={{
      backgroundColor: "lightgreen",
      color: "white",
      width: "auto",
      padding: "8px 12px"
    }}
    onClick={() =>
      navigate("/notifications")
    }
  >
    🔔
  </button>

  <button
    className="book-btn"
    style={{
      backgroundColor: "lightgreen",
      color: "black",
      width: "auto",
      padding: "8px 12px"
    }}
    onClick={handleLogout}
  >
    Logout
  </button>

  <img
    src="/images/farmer.png"
    alt="Farmer"
    onClick={() =>
      navigate("/farmer-profile")
    }
    style={{
      width: "55px",
      height: "55px",
      borderRadius: "50%",
      cursor: "pointer",
      border: "3px solid #3b82f6"
    }}
  />

</div>


      {/* Header */}
      <div className="dashboard-header">

  
<h1>👨‍🌾 రైతు డాష్‌బోర్డ్</h1>

<p>Farmer Dashboard</p>

<h3>
  Welcome, {farmer?.fullName}
</h3>

      </div>

      {/* Welcome Card */}
      <div className="welcome-card">
        <h2>స్వాగతం రైతు గారూ!</h2>

        <p>
          Manage bookings, track vehicles,
          and monitor deliveries.
        </p>
      </div>

      {/* Stats */}
      <div className="stats-grid">

        <div className="stat-card">
          <h2>{bookings.length}</h2>
          <p>Total Bookings</p>
        </div>

        <div className="stat-card">
          <h2>
            {
              bookings.filter(
                b =>
                  b.status === "Accepted"
              ).length
            }
          </h2>
          <p>Active Orders</p>
        </div>

        <div className="stat-card">
          <h2>
            {
              bookings.filter(
                b =>
                  b.status === "Completed"
              ).length
            }
          </h2>
          <p>Completed</p>
        </div>

      </div>

      {/* Dashboard Options */}
      <div className="dashboard-grid">

        <div
          className="dashboard-card"
          onClick={() =>
            navigate("/book-vehicle")
          }
        >
          🚛
          <h3>
            వాహనం బుక్ చేయండి
          </h3>
          <p>Book Vehicle</p>
        </div>

        <div
          className="dashboard-card"
          onClick={() =>
            navigate("/orders")
          }
        >
          📦
          <h3>నా ఆర్డర్లు</h3>
          <p>My Orders</p>
        </div>

        <div
          className="dashboard-card"
          onClick={() =>
            navigate("/track")
          }
        >
          📍
          <h3>
            ట్రాక్ వాహనం
          </h3>
          <p>Track Vehicle</p>
        </div>


        <div
          className="dashboard-card"
          onClick={() =>
            navigate("/help")
          }
        >
          ☎️
          <h3>సహాయం</h3>
          <p>Help & Support</p>
        </div>

      

      </div>

    </div>
  );
}

export default FarmerDashboard;