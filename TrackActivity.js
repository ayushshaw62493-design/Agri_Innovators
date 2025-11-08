import React, { useState } from "react";

export default function TrackActivity() {
  const [activity, setActivity] = useState("Flight");
  const [amount, setAmount] = useState(5);

  const emissions = (activity === "Flight" ? 0.255 : 0.21) * amount;

  return (
    <div className="track">
      <h2>Log Carbon Activity</h2>
      <p>Record your daily activities to track your carbon footprint</p>

      <div className="activity-box">
        <div className="input-group">
          <label>Activity Type</label>
          <select value={activity} onChange={(e) => setActivity(e.target.value)}>
            <option>Flight</option>
            <option>Car Travel</option>
            <option>Electricity</option>
          </select>
        </div>

        <div className="input-group">
          <label>Amount (km / kWh)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      <div className="estimate">
        Estimated Emissions: <b>{emissions.toFixed(2)} kg CO₂</b>
      </div>

      <button className="log-btn">Log Activity</button>
    </div>
  );
}
