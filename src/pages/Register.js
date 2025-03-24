import React, { useState } from "react";
import Navbar from "../Navbar";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [progress, setProgress] = useState(0);

  const getPasswordStrength = (password) => {
    if (password.length < 6) return "Weak ❌";
    if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.length >= 8) return "Strong ✅";
    return "Medium ⚠️";
  };

  const calculateProgress = (data) => {
    const filledFields = Object.values(data).filter((val) => val.trim() !== "").length;
    return (filledFields / Object.keys(data).length) * 100;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setProgress(calculateProgress({ ...formData, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email!";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Enter 10-digit number!";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters!";
    if (!formData.message.trim()) newErrors.message = "Message is required!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#121212", color: "#f5f5f5", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
        <h2 style={{ color: "#ffcc00", textTransform: "uppercase", textAlign: "center" }}>📝 Register for Alerts</h2>
        <p style={{ textAlign: "center", color: "#b0b0b0", fontSize: "1.2rem" }}>Stay updated with real-time emergency alerts and resources.</p>

        <div className="progress mt-3" style={{ width: "80%", height: "8px" }}>
          <div className="progress-bar" role="progressbar" style={{ width: `${progress}%`, backgroundColor: "#4caf50" }}></div>
        </div>

        <form style={{ backgroundColor: "#1e1e1e", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)", width: "90%", maxWidth: "400px" }} action="https://submit-form.com/e1lj1BvYq" method="POST" onSubmit={(e) => { if (!validateForm()) e.preventDefault(); }}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required style={{ backgroundColor: "#2a2a2a", color: "#fff", border: "1px solid #444", padding: "10px", borderRadius: "5px", width: "100%" }} />
            {errors.name && <p style={{ color: "#ff3b3b", fontSize: "0.9rem" }}>{errors.name}</p>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required style={{ backgroundColor: "#2a2a2a", color: "#fff", border: "1px solid #444", padding: "10px", borderRadius: "5px", width: "100%" }} />
            {errors.email && <p style={{ color: "#ff3b3b", fontSize: "0.9rem" }}>{errors.email}</p>}
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your 10-digit phone number" required style={{ backgroundColor: "#2a2a2a", color: "#fff", border: "1px solid #444", padding: "10px", borderRadius: "5px", width: "100%" }} />
            {errors.phone && <p style={{ color: "#ff3b3b", fontSize: "0.9rem" }}>{errors.phone}</p>}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter a secure password" required style={{ backgroundColor: "#2a2a2a", color: "#fff", border: "1px solid #444", padding: "10px", borderRadius: "5px", width: "100%" }} />
            <p style={{ color: "#ffcc00", fontSize: "0.9rem" }}>Strength: {getPasswordStrength(formData.password)}</p>
            {errors.password && <p style={{ color: "#ff3b3b", fontSize: "0.9rem" }}>{errors.password}</p>}
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" required style={{ backgroundColor: "#2a2a2a", color: "#fff", border: "1px solid #444", padding: "10px", borderRadius: "5px", width: "100%", height: "80px" }}></textarea>
            {errors.message && <p style={{ color: "#ff3b3b", fontSize: "0.9rem" }}>{errors.message}</p>}
          </div>

          <button type="submit" style={{ backgroundColor: "#4caf50", border: "none", borderRadius: "5px", padding: "10px", color: "#fff", fontSize: "1rem", cursor: "pointer", width: "100%" }}>Register Now 🚀</button>
        </form>
      </div>
    </>
  );
}

export default Register;
