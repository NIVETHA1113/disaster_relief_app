import React, { useState } from "react";
import Navbar from "../Navbar";

function Services() {
  // Service status and request counts
  const [services, setServices] = useState([
    { name: "🚨 Flood Report", description: "Report Flood and get immediate response.", status: "Active", requests: 15 },
    { name: "🌿 Wildlife Protection", description: "Protect endangered species in disaster zones.", status: "Unavailable", requests: 5 },
    { name: "🔥 Fire Rescue", description: "Alert firefighters about emergency situations.", status: "Active", requests: 20 },
    { name: "🆘 Hazard Alert", description: "Report hazards like landslides and floods.", status: "Active", requests: 8 },
    { name: "🚑 Emergency Medical", description: "Get immediate medical assistance.", status: "Active", requests: 25 },
  ]);

  // Function to request service (increments counter)
  const requestService = (index) => {
    setServices((prevServices) =>
      prevServices.map((service, i) =>
        i === index ? { ...service, requests: service.requests + 1 } : service
      )
    );
  };

  // Styles for Dark Theme & UI Enhancements
  const styles = {
    container: {
      backgroundColor: "#121212",
      color: "#f5f5f5",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
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
    serviceCard: (status) => ({
      backgroundColor: "#1e1e1e",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "15px",
      width: "90%",
      maxWidth: "500px",
      boxShadow: status === "Active" ? "0px 4px 10px rgba(0, 255, 0, 0.3)" : "0px 4px 10px rgba(255, 0, 0, 0.3)",
      transition: "transform 0.3s ease-in-out",
      cursor: status === "Active" ? "pointer" : "not-allowed",
      opacity: status === "Active" ? "1" : "0.5",
    }),
    button: (status) => ({
      padding: "8px 15px",
      backgroundColor: status === "Active" ? "#4caf50" : "#888",
      border: "none",
      borderRadius: "5px",
      color: "#fff",
      fontSize: "1rem",
      cursor: status === "Active" ? "pointer" : "not-allowed",
      marginTop: "10px",
      transition: "background-color 0.3s ease",
    }),
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h2 style={styles.heading}>⚙️ Available Services</h2>
        <p style={styles.description}>
          Select from the available services below. You can request assistance for **Active** services.
        </p>

        {services.map((service, index) => (
          <div
            key={index}
            style={styles.serviceCard(service.status)}
            onMouseOver={(e) => service.status === "Active" && (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => service.status === "Active" && (e.currentTarget.style.transform = "scale(1)")}
          >
            <h4>{service.name}</h4>
            <p>{service.description}</p>
            <p>
              <strong>Status:</strong>{" "}
              <span style={{ color: service.status === "Active" ? "#4caf50" : "#ff3b3b" }}>
                {service.status}
              </span>
            </p>
            <p>
              <strong>Requests:</strong> {service.requests}
            </p>
            <button
              style={styles.button(service.status)}
              onClick={() => service.status === "Active" && requestService(index)}
              disabled={service.status !== "Active"}
            >
              {service.status === "Active" ? "Request Service" : "Unavailable"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;
