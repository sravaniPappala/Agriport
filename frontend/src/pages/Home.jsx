import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="container">

        <div className="title">

          <h1>🚜 అగ్రిపోర్ట్ (Agriport)</h1>

          <p>
            రైతులు మరియు రవాణా డ్రైవర్లను కలిపే వేదిక
          </p>

          <p>
            Connecting Farmers and Transport Drivers
          </p>

        </div>

        <div className="card-container">

          {/* Farmer */}

          <div className="card">

            <img
              src="/farmer-home.png"
              alt="Farmer"
              style={{
                width: "140px",
                height: "140px",
                objectFit: "contain"
              }}
            />

            <h2>
              👨‍🌾 రైతు (Farmer)
            </h2>

            <p>
              మీ పంటలను రవాణా చేయడానికి
              వాహనాలను బుక్ చేయండి
            </p>

            <p>
              Book vehicles to transport
              your produce
            </p>

            <button
              className="btn green"
              onClick={() =>
                navigate("/farmer-login")
              }
            >
              రైతుగా కొనసాగండి
              <br />
              Continue as Farmer
            </button>

          </div>

          {/* Driver */}

          <div className="card">

            <img
              src="/driver-home.png"
              alt="Driver"
              style={{
                width: "140px",
                height: "140px",
                objectFit: "contain"
              }}
            />

            <h2>
              🚛 డ్రైవర్ (Driver)
            </h2>

            <p>
              రవాణా అభ్యర్థనలను
              కనుగొని ఆదాయం పొందండి
            </p>

            <p>
              Find transportation
              requests and earn
            </p>

            <button
              className="btn orange"
              onClick={() =>
                navigate("/driver-login")
              }
            >
              డ్రైవర్‌గా కొనసాగండి
              <br />
              Continue as Driver
            </button>

          </div>

          {/* Admin */}

          <div className="card">

            <img
              src="/admin-home.png"
              alt="Admin"
              style={{
                width: "140px",
                height: "140px",
                objectFit: "contain"
              }}
            />

            <h2>
              👨‍💼 Admin
            </h2>

            <p>
              Manage Farmers, Drivers
              and Bookings
            </p>

            <p>
              Monitor System Activity
            </p>

            <button
              className="btn blue"
              style={{
    backgroundColor: "#2563eb",
    color: "white",
    border: "none"
  }}
              onClick={() =>
                navigate("/admin-login")
              }
            >
              Continue as Admin
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;