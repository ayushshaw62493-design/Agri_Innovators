import React, { useState } from "react";
import axios from "axios";
import { ethers } from "ethers";
import abi from "../blockchain/abi.json"; // <- Make sure abi.json is inside src/blockchain

const CONTRACT_ADDRESS = "0x3ECDDfF87b4975E0A15507F840b88f97F1D0D160";

const CompanyDashboard = () => {
  const [wallet, setWallet] = useState("");
  const [amount, setAmount] = useState("");
  const [txHash, setTxHash] = useState("");
  const [totalEmission, setTotalEmission] = useState(0);
  const [companyName, setCompanyName] = useState("");

  async function connectWallet() {
    if (!window.ethereum) return alert("Install MetaMask!");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setWallet(accounts[0]);

    await axios.post("http://localhost:8000/api/company/register", {
      name: companyName,
      walletAddress: accounts[0],
    });

    loadCompanyData(accounts[0]);
  }

  async function loadCompanyData(walletAddress) {
    const res = await axios.get(
      `http://localhost:8000/api/company/${walletAddress}`
    );
    if (res.data?.totalEmission !== undefined)
      setTotalEmission(res.data.totalEmission);
  }

  async function submitEmission() {
    if (!wallet) return alert("Connect MetaMask first!");
    if (!amount) return alert("Enter emission amount");

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

      const tx = await contract.recordEmission(Number(amount));
      await tx.wait();
      setTxHash(tx.hash);

      await axios.post("http://localhost:8000/api/company/emission", {
        walletAddress: wallet,
        amount: Number(amount),
      });

      alert("✅ Emission Recorded!");
      loadCompanyData(wallet);
    } catch (error) {
      console.error(error);
      alert("Transaction failed");
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>🌿 Company Carbon Dashboard</h2>

        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          style={styles.input}
        />

        <button style={styles.button} onClick={connectWallet}>
          {wallet ? "✅ Wallet Connected" : "🔗 Connect MetaMask"}
        </button>

        {wallet && (
          <>
            <p style={styles.text}><b>Wallet:</b> {wallet}</p>
            <p style={styles.text}>
              <b>Total Recorded Emission:</b> {totalEmission} kg CO₂
            </p>

            <input
              type="number"
              placeholder="Enter CO₂ Emission (kg)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={styles.input}
            />

            <button style={styles.submitBtn} onClick={submitEmission}>
              🚀 Record Emission
            </button>

            {txHash && (
              <p style={styles.tx}>
                ✅ Saved to Blockchain:{" "}
                <a
                  href={`https://sepolia.etherscan.io/tx/${txHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Transaction
                </a>
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "90px",
    background: "linear-gradient(to bottom, #e8fff3, #d4ffea)",
  },

  card: {
    width: "460px",
    padding: "35px",
    borderRadius: "18px",
    background: "#ffffff",
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.15)",
    textAlign: "center",
  },

  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#05603a",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginTop: "12px",
    borderRadius: "10px",
    border: "1px solid #bdbdbd",
    fontSize: "16px",
  },

  button: {
    width: "100%",
    background: "#0078ff",
    color: "white",
    padding: "14px",
    borderRadius: "10px",
    marginTop: "14px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
  },

  submitBtn: {
    width: "100%",
    background: "green",
    color: "white",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    marginTop: "14px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },

  text: {
    marginTop: "10px",
    fontSize: "16px",
  },

  tx: {
    marginTop: "15px",
    fontSize: "14px",
  },
};

export default CompanyDashboard;
