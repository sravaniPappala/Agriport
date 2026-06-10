import { useNavigate } from "react-router-dom";

function Help() {
  const navigate = useNavigate();

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



      <div className="dashboard-header">
        <h1>☎️ సహాయం</h1>
        <p>Help & Support</p>
      </div>

      <div className="driver-card">

        <h3>Customer Support</h3>

        <p>Phone: +91 9876543210</p>

        <p>Email: support@agripoort.com</p>

        <button className="book-btn">
          Contact Support
        </button>

      </div>

      <div className="driver-card">

        <h3>FAQ</h3>

        <p>How to book a vehicle?</p>

        <p>Select Book Vehicle and fill details.</p>

      </div>

      <div className="driver-card">

        <button
          className="book-btn"
          onClick={() => navigate("/farmer-dashboard")}
        >
          Go To Dashboard
        </button>

      </div>

    </div>
  );
}

export default Help;