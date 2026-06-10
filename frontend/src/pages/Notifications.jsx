import { useNavigate } from "react-router-dom";

function Notifications() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

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
          🏠 Dashboard
        </button>
      </div>

      <div className="dashboard-header">

        <h1>🔔 Notifications</h1>

        <p>
          Latest Updates and Alerts
        </p>

      </div>

      <div className="driver-card">

        <h3>📦 Booking Updates</h3>

        <p>
          No new booking notifications.
        </p>

      </div>

      <br />

      <div className="driver-card">

        <h3>🚛 Driver Updates</h3>

        <p>
          No new driver notifications.
        </p>

      </div>

      <br />

      <div className="driver-card">

        <h3>📢 System Alerts</h3>

        <p>
          Welcome to Agriport.
        </p>

      </div>

    </div>
  );
}

export default Notifications;