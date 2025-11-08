import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/auth/register",
        form,
        { headers: { "Content-Type": "application/json" } }
      );

      alert("✅ Registered Successfully");
      console.log(res.data);

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.detail || "Registration failed");
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <input name="name" placeholder="Full Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}
