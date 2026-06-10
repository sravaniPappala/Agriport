import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function AvailableDrivers() {
  const navigate = useNavigate();

  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {

      const res = await axios.get(
        "https://agriport-bakend.onrender.com/api/auth/drivers"
      );

      setDrivers(res.data);

    } catch (error) {

      console.log(error);

    }
  };

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
        <h1>🚛 అందుబాటులో ఉన్న డ్రైవర్లు</h1>
        <p>Available Drivers</p>
      </div>

      <div className="driver-list">

        {drivers.length === 0 ? (

          <div className="driver-card">
            <h2>No Drivers Available</h2>
          </div>

        ) : (

          drivers.map((driver) => (

            <div
              className="driver-card"
              key={driver._id}
            >

              <img
                src="/images/driver.png"
                alt="Driver"
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  marginBottom: "10px"
                }}
              />

              <h2>{driver.fullName}</h2>

              <p>
                🚛 Vehicle:
                {" "}
                {driver.vehicleType}
              </p>

              <p>
                🔢 Vehicle Number:
                {" "}
                {driver.vehicleNumber}
              </p>

              <p>
                🆔 Driver ID:
                {" "}
                {driver.driverId}
              </p>

              <p>
                📱 Mobile:
                {" "}
                {driver.mobileNumber}
              </p>

              <p>
                🟢 Status:
                Available
              </p>

              <button
                className="book-btn"
                onClick={async () => {
                  try {

                    const bookingData =
                      JSON.parse(
                        localStorage.getItem(
                          "bookingData"
                        )
                      );

                    const farmer =
                      JSON.parse(
                        localStorage.getItem(
                          "farmer"
                        )
                      );

                    await axios.post(
                      "https://agriport-bakend.onrender.com/api/bookings/create",
                      {
                        ...bookingData,

                        farmerId:
                          farmer.farmerId,

                        driverId:
                          driver.driverId,

                        driverName:
                          driver.fullName
                      }
                    );

                    alert(
                      "Driver Booked Successfully"
                    );

                    navigate("/orders");

                  } catch (error) {

                    console.log(error);

                    alert(
                      "Booking Failed"
                    );

                  }
                }}
              >
                Book Now
              </button>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default AvailableDrivers;