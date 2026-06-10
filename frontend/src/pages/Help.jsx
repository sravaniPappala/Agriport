import { useNavigate } from "react-router-dom";

function Help() {
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
        <h1>☎️ Help & Support</h1>
        <p>Need Assistance?</p>
      </div>

      <div className="driver-card">

        <h3>📞 Customer Support</h3>
        <p>Phone: +91 9876543210</p>

        <br />

        <h3>✉️ Email Support</h3>
        <p>support@agripoort.com</p>

        <br />

        <h3>🚛 Booking Issues</h3>
        <p>
          Contact support if you are unable
          to book a vehicle or driver.
        </p>

        <br />

        <h3>📍 Vehicle Tracking Issues</h3>
        <p>
          If location updates are not visible,
          contact support.
        </p>

        <br />

        <h3>🔑 Forgot Password</h3>

        <button
          className="book-btn"
          onClick={() =>
            navigate("/forgot-password")
          }
        >
          Reset Password
        </button>

        <br />
        <br />

        <h3>⏰ Support Hours</h3>
        <p>
          Monday - Saturday
        </p>

        <p>
          9:00 AM - 6:00 PM
        </p>

      </div>

    </div>
  );
}

export default Help;