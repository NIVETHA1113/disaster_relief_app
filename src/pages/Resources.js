import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";

function Resources() {
  // Resource availability (in percentage)
  const [resources, setResources] = useState([
    { name: "💧 Water Supply", emoji: "🚰", availability: 80 },
    { name: "🍞 Food Distribution", emoji: "🥖", availability: 65 },
    { name: "🏠 Emergency Shelter", emoji: "🏕️", availability: 50 },
    { name: "🍼 Baby & Medical Needs", emoji: "🩺", availability: 40 },
  ]);

  // Styles for Dark Theme & UI Enhancements
  const styles = {
    container: {
      backgroundColor: "#121212",
      color: "#f5f5f5",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#ffcc00",
      textTransform: "uppercase",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      marginBottom: "20px",
    },
    description: {
      fontSize: "1.2rem",
      color: "#b0b0b0",
      maxWidth: "600px",
      textAlign: "center",
      lineHeight: "1.5",
      marginBottom: "20px",
    },
    resourceBox: {
      backgroundColor: "#1e1e1e",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "15px",
      width: "90%",
      maxWidth: "500px",
      boxShadow: "0px 4px 10px rgba(255, 204, 0, 0.3)",
      transition: "transform 0.3s ease-in-out",
      cursor: "pointer",
    },
    progressBarContainer: {
      width: "100%",
      backgroundColor: "#333",
      borderRadius: "5px",
      marginTop: "10px",
    },
    progressBar: (availability) => ({
      width: `${availability}%`,
      height: "15px",
      backgroundColor: availability > 60 ? "#4caf50" : availability > 30 ? "#ffa500" : "#ff3b3b",
      borderRadius: "5px",
      transition: "width 1s ease-in-out",
    }),
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h2 style={styles.heading}>📦 Available Resources</h2>
        <p style={styles.description}>
          Essential resources provided to assist people in disaster-stricken areas. Availability is updated in real-time.
        </p>
        
        {resources.map((resource, index) => (
          <div
            key={index}
            style={styles.resourceBox}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <strong>{resource.name} {resource.emoji}</strong>
            <div style={styles.progressBarContainer}>
              <div style={styles.progressBar(resource.availability)}></div>
            </div>
            <p style={{ textAlign: "right", marginTop: "5px", fontSize: "0.9rem", color: "#ffcc00" }}>
              {resource.availability}% Available
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Resources;
