import React from "react";
import ChartSection from "./ChartSection";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="cards">
        <div className="card">
          <h4>Total Emissions</h4>
          <p>2463.5 kg CO₂</p>
          <span>This month</span>
        </div>
        <div className="card">
          <h4>Carbon Offset</h4>
          <p>1280.0 kg CO₂</p>
          <span>52.0% offset</span>
        </div>
        <div className="card">
          <h4>Net Footprint</h4>
          <p>1183.5 kg CO₂</p>
          <span>Remaining impact</span>
        </div>
      </div>

      <div className="blockchain-card">
        <h4>Blockchain Verified ✅</h4>
        <p>All transactions are recorded on an immutable distributed ledger</p>
        <small>Last Block #45,892</small>
      </div>

      <ChartSection />
    </div>
  );
}
