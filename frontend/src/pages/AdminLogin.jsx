import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] =
    useState(false);

  const handleLogin = () => {

    if (!adminId || !password) {
      alert("Please fill all fields");
      return;
    }

    if (
      adminId === "admin123" &&
      password === "Admin@600"
    ) {

      localStorage.setItem(
        "admin",
        JSON.stringify({
          adminId: "admin"
        })
      );

      navigate("/admin-dashboard");

    } else {

      alert(
        "Invalid Admin Credentials"
      );

    }
  };

  return (
    <div className="login-page">

      <div
        className="back-link"
        onClick={() => navigate("/")}
        style={{
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        ← Back
      </div>

      <div className="login-card">

        <div
          style={{
            textAlign: "center"
          }}
        >

          <img
            src="/admin-home.png"
            alt="Admin"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              marginBottom: "10px"
            }}
          />

          <h1>Admin Login</h1>

          <p>
            Administrator Access
          </p>

        </div>

        <div className="form-group">

          <label>
            Admin ID
          </label>

          <input
            type="text"
            placeholder="Enter Admin ID"
            value={adminId}
            onChange={(e) =>
              setAdminId(
                e.target.value
              )
            }
          />

        </div>

        <div className="form-group">

          <label>
            Password
          </label>

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

        </div>

        <div
          style={{
            marginBottom: "15px"
          }}
        >

          <label>

            <input
              type="checkbox"
              checked={showPassword}
              onChange={() =>
                setShowPassword(
                  !showPassword
                )
              }
            />

            {" "}
            Show Password

          </label>

        </div>

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          🚀 Login
        </button>

        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "#666"
          }}
        >
          Only authorized
          administrators can
          access this dashboard.
        </div>

      </div>

    </div>
  );
}

export default AdminLogin;