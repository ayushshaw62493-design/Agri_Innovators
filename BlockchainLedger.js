import React from "react";

const transactions = [
  { id: 1, project: "Amazon Rainforest", amount: "50 kg CO₂", hash: "0x8a3f...b21e", status: "✅ Verified" },
  { id: 2, project: "Wind Farm Denmark", amount: "120 kg CO₂", hash: "0x4b1c...d91f", status: "✅ Verified" },
  { id: 3, project: "Solar Park India", amount: "80 kg CO₂", hash: "0x9d8e...f47c", status: "✅ Verified" },
];

export default function BlockchainLedger() {
  return (
    <div className="ledger-container">
      <h2>Blockchain Ledger</h2>
      <p className="subtitle">Immutable record of verified carbon offset transactions</p>
      <table className="ledger-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Project</th>
            <th>Amount</th>
            <th>Hash</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.project}</td>
              <td>{tx.amount}</td>
              <td>{tx.hash}</td>
              <td>{tx.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
