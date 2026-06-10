import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {

  const navigate = useNavigate();

  const [role, setRole] =
    useState("Farmer");

  const [userId, setUserId] =
    useState("");

  const [mobileNumber,
    setMobileNumber] =
    useState("");

  const [newPassword,
    setNewPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const handleReset =
    async () => {

      if (
        !userId ||
        !mobileNumber ||
        !newPassword ||
        !confirmPassword
      ) {
        alert(
          "Please fill all fields"
        );
        return;
      }

      if (
        newPassword !==
        confirmPassword
      ) {
        alert(
          "Passwords do not match"
        );
        return;
      }

      try {

        await axios.put(
          "http://localhost:5000/api/auth/reset-password",
          {
            role,
            userId,
            mobileNumber,
            newPassword
          }
        );

        alert(
          "Password Reset Successfully"
        );

        navigate("/");

      } catch (error) {

        alert(
          error.response?.data?.message ||
          "Reset Failed"
        );

      }
    };

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
            navigate("/")
          }
        >
          🏠 Home
        </button>
      </div>

      <div className="dashboard-header">

        <h1>
          🔑 Forgot Password
        </h1>

        <p>
          Reset your password
        </p>

      </div>

      <div className="driver-card">

        <label>
          User Type
        </label>

        <br />

        <select
          value={role}
          onChange={(e) =>
            setRole(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "10px"
          }}
        >
          <option>
            Farmer
          </option>

          <option>
            Driver
          </option>
        </select>

        <br /><br />

        <label>
          Farmer ID / Driver ID
        </label>

        <br />

        <input
          type="text"
          value={userId}
          onChange={(e) =>
            setUserId(
              e.target.value
            )
          }
          placeholder={
            role === "Farmer"
              ? "Enter Farmer ID"
              : "Enter Driver ID"
          }
        />

        <br /><br />

        <label>
          Registered Mobile Number
        </label>

        <br />

        <input
          type="text"
          value={mobileNumber}
          onChange={(e) =>
            setMobileNumber(
              e.target.value
            )
          }
          placeholder="Enter Mobile Number"
        />

        <br /><br />

        <label>
          New Password
        </label>

        <br />

        <input
          type="password"
          value={newPassword}
          onChange={(e) =>
            setNewPassword(
              e.target.value
            )
          }
          placeholder="Enter New Password"
        />

        <br /><br />

        <label>
          Confirm Password
        </label>

        <br />

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
          placeholder="Confirm Password"
        />

        <br /><br />

        <button
          className="book-btn"
          onClick={handleReset}
        >
          Reset Password
        </button>

      </div>

    </div>
  );
}

export default ForgotPassword;