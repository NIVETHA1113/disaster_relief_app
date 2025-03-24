import React, { useState } from "react";
import Navbar from "../Navbar";

function EmergencyContacts() {
  // Emergency contacts with status and call count
  const [contacts, setContacts] = useState([
    { name: "🚒 Fire Rescue", number: "101", status: "Available", calls: 32 },
    { name: "🚑 Ambulance", number: "102", status: "Busy", calls: 45 },
    { name: "🚔 Police", number: "100", status: "Available", calls: 50 },
    { name: "🆘 Disaster Helpline", number: "108", status: "Available", calls: 22 },
  ]);

  // Function to simulate a call (increments counter)
  const callEmergency = (index) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact, i) =>
        i === index ? { ...contact, calls: contact.calls + 1 } : contact
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
    contactCard: (status) => ({
      backgroundColor: "#1e1e1e",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "15px",
      width: "90%",
      maxWidth: "500px",
      boxShadow: status === "Available" ? "0px 4px 10px rgba(0, 255, 0, 0.3)" : "0px 4px 10px rgba(255, 0, 0, 0.3)",
      transition: "transform 0.3s ease-in-out",
      cursor: status === "Available" ? "pointer" : "not-allowed",
      opacity: status === "Available" ? "1" : "0.5",
    }),
    button: (status) => ({
      padding: "8px 15px",
      backgroundColor: status === "Available" ? "#4caf50" : "#888",
      border: "none",
      borderRadius: "5px",
      color: "#fff",
      fontSize: "1rem",
      cursor: status === "Available" ? "pointer" : "not-allowed",
      marginTop: "10px",
      transition: "background-color 0.3s ease",
    }),
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h2 style={styles.heading}>📞 Emergency Contacts</h2>
        <p style={styles.description}>
          Click on a contact to simulate a call. **Busy lines cannot be called.**
        </p>

        {contacts.map((contact, index) => (
          <div
            key={index}
            style={styles.contactCard(contact.status)}
            onMouseOver={(e) => contact.status === "Available" && (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => contact.status === "Available" && (e.currentTarget.style.transform = "scale(1)")}
          >
            <h4>{contact.name}</h4>
            <p>
              <strong>Number:</strong> {contact.number}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span style={{ color: contact.status === "Available" ? "#4caf50" : "#ff3b3b" }}>
                {contact.status}
              </span>
            </p>
            <p>
              <strong>Calls:</strong> {contact.calls}
            </p>
            <button
              style={styles.button(contact.status)}
              onClick={() => contact.status === "Available" && callEmergency(index)}
              disabled={contact.status !== "Available"}
            >
              {contact.status === "Available" ? "Call Now" : "Busy"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default EmergencyContacts;
