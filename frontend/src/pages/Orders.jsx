import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Orders() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {

      const farmer = JSON.parse(
        localStorage.getItem("farmer")
      );

      const res = await axios.get(
        `http://localhost:5000/api/bookings/farmer/${farmer.farmerId}`
      );

      setBookings(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  const submitRating = async (id) => {
    try {

      await axios.put(
        `http://localhost:5000/api/bookings/rating/${id}`,
        {
          rating,
          review
        }
      );

      alert("Rating Submitted");

      fetchBookings();

    } catch (error) {

      console.log(error);

      alert("Failed To Submit Rating");

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
    padding: "8px 12px",
    width: "auto",
    fontSize: "14px"
  }}
          onClick={() => navigate("/farmer-dashboard")}
        >
          Dashboard
        </button>
      </div>

      {/* Header */}
      <div className="dashboard-header">
        <h1>📦 నా ఆర్డర్లు</h1>
        <p>My Orders</p>
      </div>

      {bookings.length === 0 ? (

        <div className="driver-card">
          <h2>No Orders Found</h2>
        </div>

      ) : (

        bookings.map((booking, index) => (

          <div
            className="driver-card"
            key={booking._id}
          >

            <h2>
              Order #{index + 1}
            </h2>

            <p>
              Crop: {booking.cropType}
            </p>

            <p>
              Pickup: {booking.pickupLocation}
            </p>

            <p>
              Destination: {booking.destination}
            </p>

            <p>
              Vehicle: {booking.vehicleType}
            </p>

            <p>
              Weight: {booking.weight} Tons
            </p>

            <p>
              Driver:
              {" "}
              {booking.driverName || "Not Assigned"}
            </p>

            <p>
              Current Location:
              {" "}
              {booking.currentLocation}
            </p>

            <p>
              Status:
              {booking.status === "Pending" &&
                " ⏳ Pending"}

              {booking.status === "Accepted" &&
                " ✅ Accepted"}

              {booking.status === "Completed" &&
                " 🎉 Completed"}
            </p>

            {booking.transportCost > 0 && (
              <p>
                Transport Cost:
                {" "}
                ₹{booking.transportCost}
              </p>
            )}

            <button
              className="book-btn"
              onClick={() => navigate("/track")}
            >
              Track Vehicle
            </button>

            {/* Rating Section */}
            {booking.status === "Completed" &&
              booking.rating === 0 && (

              <div
                style={{
                  marginTop: "20px"
                }}
              >

                <h4>
                  ⭐ Rate Driver
                </h4>

                <select
                  value={rating}
                  onChange={(e) =>
                    setRating(
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    padding: "10px"
                  }}
                >
                  <option value="">
                    Select Rating
                  </option>

                  <option value="5">
                    ⭐⭐⭐⭐⭐
                  </option>

                  <option value="4">
                    ⭐⭐⭐⭐
                  </option>

                  <option value="3">
                    ⭐⭐⭐
                  </option>

                  <option value="2">
                    ⭐⭐
                  </option>

                  <option value="1">
                    ⭐
                  </option>

                </select>

                <br />
                <br />

                <textarea
                  placeholder="Write Review"
                  value={review}
                  onChange={(e) =>
                    setReview(
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    padding: "10px"
                  }}
                />

                <br />
                <br />

                <button
                  className="book-btn"
                  onClick={() =>
                    submitRating(
                      booking._id
                    )
                  }
                >
                  Submit Rating
                </button>

              </div>

            )}

            {/* Show Existing Rating */}
            {booking.rating > 0 && (

              <div
                style={{
                  marginTop: "15px"
                }}
              >

                <h4>
                  ⭐ Rating:
                  {" "}
                  {booking.rating}/5
                </h4>

                <p>
                  Review:
                  {" "}
                  {booking.review}
                </p>

              </div>

            )}

          </div>

        ))

      )}

    </div>
  );
}

export default Orders;