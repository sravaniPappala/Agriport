import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminDashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    farmers: 0,
    drivers: 0,
    bookings: 0,
    completedTrips: 0,
    revenue: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {

      const res = await axios.get(
        "https://agriport-backend.onrender.com/api/admin/stats"
      );

      setStats(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="dashboard-page">

      {/* Navigation */}
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
    width: "auto",
    padding: "8px 12px",
    fontSize: "14px"
  }}
          onClick={() => navigate("/")}
        >
          Logout
        </button>
      </div>

      {/* Header */}
      <div className="dashboard-header">

        <h1>📊 Admin Dashboard</h1>

        <p>
          Agriport System Statistics
        </p>

      </div>

      {/* Stats */}
      <div className="stats-grid">

        <div className="stat-card">
          <h2>{stats.farmers}</h2>
          <p>👨‍🌾 Farmers</p>
        </div>

        <div className="stat-card">
          <h2>{stats.drivers}</h2>
          <p>🚛 Drivers</p>
        </div>

        <div className="stat-card">
          <h2>{stats.bookings}</h2>
          <p>📦 Bookings</p>
        </div>

        <div className="stat-card">
          <h2>{stats.completedTrips}</h2>
          <p>✅ Completed Trips</p>
        </div>

        <div className="stat-card">
          <h2>₹{stats.revenue}</h2>
          <p>💰 Revenue</p>
        </div>

      </div>

      {/* Summary Card */}
      <div className="driver-card">

        <h2>System Summary</h2>

        <p>
          Total Farmers:
          {" "}
          {stats.farmers}
        </p>

        <p>
          Total Drivers:
          {" "}
          {stats.drivers}
        </p>

        <p>
          Total Bookings:
          {" "}
          {stats.bookings}
        </p>

        <p>
          Completed Trips:
          {" "}
          {stats.completedTrips}
        </p>

        <p>
          Revenue Generated:
          {" "}
          ₹{stats.revenue}
        </p>

      </div>

    </div>
  );
}

export default AdminDashboard;