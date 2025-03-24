import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#f0f4f3" : "#1b1f1e";
    document.body.style.color = darkMode ? "#000" : "#fff";
  };

  const navbarStyle = {
    background: darkMode ? "rgba(40, 40, 40, 0.95)" : "rgba(0, 77, 64, 0.95)", // Dark green shade
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s ease-in-out",
    padding: "12px 0",
  };

  const navLinkStyle = {
    color: darkMode ? "#b0b0b0" : "#e0f2f1",
    fontSize: "16px",
    fontWeight: "500",
    padding: "10px 15px",
    margin: "0 5px",
    textDecoration: "none",
    transition: "color 0.3s ease-in-out, transform 0.2s",
    display: "inline-block",
  };

  const navLinkHover = {
    color: "#ffeb3b",
    transform: "scale(1.1)",
  };

  const registerBtnStyle = {
    backgroundColor: "#ffeb3b",
    color: "#004d40",
    padding: "8px 18px",
    borderRadius: "25px",
    fontWeight: "bold",
    border: "none",
    fontSize: "16px",
    transition: "background 0.3s ease-in-out, transform 0.2s",
  };

  const registerBtnHover = {
    backgroundColor: "#ff9800",
    transform: "scale(1.1)",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm" style={navbarStyle}>
      <div className="container d-flex justify-content-between align-items-center">
        
        {/* Brand Logo */}
        <Link className="navbar-brand fw-bold" to="/" style={{ color: "#ffeb3b", fontSize: "22px" }}>
          🌍 AI Disaster Relief
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            {[
              { name: "Home", path: "/" },
              { name: "Emergency Contacts", path: "/emergency-contacts" },
              { name: "Services", path: "/services" },
              { name: "Resources", path: "/resources" },
              { name: "Preparedness", path: "/emergency-preparedness" },
              { name: "News", path: "/disaster-news" },
              { name: "Live Map", path: "/live-map" },
            ].map((item, index) => (
              <li key={index} className="nav-item">
                <Link
                  className="nav-link"
                  to={item.path}
                  style={navLinkStyle}
                  onMouseEnter={(e) => {
                    e.target.style.color = navLinkHover.color;
                    e.target.style.transform = navLinkHover.transform;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = navLinkStyle.color;
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Register Button & Dark Mode Toggle */}
        <div className="d-flex align-items-center">
          <Link
            to="/register"
            style={registerBtnStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = registerBtnHover.backgroundColor;
              e.target.style.transform = registerBtnHover.transform;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = registerBtnStyle.backgroundColor;
              e.target.style.transform = "scale(1)";
            }}
            className="btn btn-warning"
          >
            Register
          </Link>

          <button
            className="btn ms-3"
            onClick={toggleDarkMode}
            style={{
              background: "none",
              color: "#ffeb3b",
              fontSize: "18px",
              border: "none",
              transition: "color 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#ff9800")}
            onMouseLeave={(e) => (e.target.style.color = "#ffeb3b")}
          >
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

