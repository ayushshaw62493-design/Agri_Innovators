import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf, ChartColumn, SquareActivity, Database, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    color: location.pathname === path ? "yellow" : "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontWeight: location.pathname === path ? "bold" : "normal",
    transition: "0.3s",
  });

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 24px",
        background: "linear-gradient(to right, #10b981, #14b8a6)",
        color: "white",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "18px", fontWeight: "600" }}>
        <Leaf size={22} />
        <span>CarbonChain</span>
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "24px", fontSize: "15px" }}>
        <Link to="/" style={linkStyle("/")}>
          <ChartColumn size={18} /> Dashboard
        </Link>

        <Link to="/track" style={linkStyle("/track")}>
          <SquareActivity size={18} /> Track Activity
        </Link>

        <Link to="/blockchainledger" style={linkStyle("/blockchainledger")}>
          <Database size={18} /> Ledger
        </Link>

        <Link to="/marketplace" style={linkStyle("/marketplace")}>
          <ShoppingBag size={18} /> Marketplace
        </Link>

        <Link to="/companydashboard" style={linkStyle("/companydashboard")}>
          Company Dashboard
        </Link>
      </div>

      {/* Net Emissions + Login/Register */}
      <div style={{ textAlign: "right", fontSize: "14px", display: "flex", flexDirection: "column", gap: "4px" }}>
        <div>
          <p style={{ opacity: 0.9, margin: 0 }}>Net Emissions</p>
          <p style={{ fontWeight: "600", margin: 0 }}>1183.5 kg CO₂</p>
        </div>

        {/* ✅ Added Login/Register */}
        <div style={{ display: "flex", gap: "12px", marginTop: "6px" }}>
          <Link
            to="/auth"
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              backgroundColor: "white",
              color: "#0E766E",
              fontWeight: "600",
              textDecoration: "none",
              transition: "0.3s",
            }}
          >
            Login
          </Link>

          <Link
            to="/auth"
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              backgroundColor: "#065f46",
              color: "white",
              fontWeight: "600",
              textDecoration: "none",
              transition: "0.3s",
            }}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
