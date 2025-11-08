import React from "react";

const projects = [
  {
    name: "Amazon Rainforest Protection",
    country: "Brazil",
    credits: 2400,
    total: 5000,
    offset: "50 kg CO₂",
    price: "$15",
    rating: 4.8,
  },
  {
    name: "Wind Farm Development",
    country: "Denmark",
    credits: 1800,
    total: 4000,
    offset: "70 kg CO₂",
    price: "$20",
    rating: 4.9,
  },
  {
    name: "Solar Energy Expansion",
    country: "India",
    credits: 2900,
    total: 5000,
    offset: "65 kg CO₂",
    price: "$18",
    rating: 4.7,
  },
];

export default function Marketplace() {
  return (
    <div className="marketplace">
      <h2>Carbon Offset Marketplace</h2>
      <p>Purchase verified carbon credits from certified environmental projects.</p>
      <div className="market-grid">
        {projects.map((p, i) => (
          <div key={i} className="market-card">
            <h4>{p.name}</h4>
            <p>{p.country}</p>
            <p>Offset: {p.offset}</p>
            <p>Credits: {p.credits} / {p.total}</p>
            <p>Price: {p.price}</p>
            <p>⭐ {p.rating}/5</p>
            <button className="buy-btn">Purchase</button>
          </div>
        ))}
      </div>
    </div>
  );
}
