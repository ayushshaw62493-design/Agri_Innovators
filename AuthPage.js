// src/pages/AuthPage.js
import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

export default function AuthPage({ onLogin }) {
  const [show, setShow] = useState("login"); // "login" or "register"

  return (
    <div style={{ padding: 24, maxWidth: 980, margin: "20px auto" }}>
      <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>

        {/* Login Button */}
        <button
          onClick={() => setShow("login")}
          style={{
            padding: "8px 14px",
            borderRadius: 8,
            background: show === "login" ? "#065f46" : "#e6f4ea",
            color: show === "login" ? "white" : "#065f46",
            border: "none",
            cursor: "pointer"
          }}
        >
          Login
        </button>

        {/* Register Button */}
        <button
          onClick={() => setShow("register")}
          style={{
            padding: "8px 14px",
            borderRadius: 8,
            background: show === "register" ? "#065f46" : "#e6f4ea",
            color: show === "register" ? "white" : "#065f46",
            border: "none",
            cursor: "pointer"
          }}
        >
          Register
        </button>
      </div>

      {/* ✅ Now Register also gets onLogin */}
      {show === "login" ? (
        <Login onLogin={onLogin} />
      ) : (
        <Register onLogin={onLogin} />
      )}
    </div>
  );
}
